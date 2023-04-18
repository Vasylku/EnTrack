using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Controllers;

[Route("api/trains")]
[ApiController]
public class TrainsController : ControllerBase
{
    private readonly DbSet<Train> trains;
    private readonly DataContext dataContext;

    public TrainsController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        trains = dataContext.Set<Train>();
    }

    [HttpGet]
    public IQueryable<TrainDto> GetAllTrains()
    {
        return GetTrainDtos(trains);
    }

    [HttpGet]
    [Route("{id}")]
    public ActionResult<TrainDto> GetStationById(int id)
    {
        var result = GetTrainDtos(trains.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult<TrainDto> CreateStation(TrainDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var train = new Train
        {
            Name = dto.Name,
            TrainClass= dto.TrainClass,
            AvailableSeats= dto.AvailableSeats,
            DinerCarts= dto.DinerCarts,
            CoachSeats= dto.CoachSeats,
            FirstClassSeats= dto.FirstClassSeats,
            SleeperSeats= dto.SleeperSeats,
            RoomletSeats= dto.RoomletSeats,
        };
        trains.Add(train);

        dataContext.SaveChanges();

        dto.Id = train.Id;

        return CreatedAtAction(nameof(GetStationById), new { id = dto.Id }, dto);
    }

    [HttpPut]
    [Route("{id}")]
    [Authorize]
    public ActionResult<TrainDto> UpdateTrain(int id, TrainDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var train = trains.FirstOrDefault(x => x.Id == id);
        if (train == null)
        {
            return NotFound();
        }

        if (!User.IsInRole(RoleNames.Admin))
        {
            return Forbid();
        }

        train.Name = dto.Name;
        train.TrainClass = dto.TrainClass;
        train.AvailableSeats = dto.AvailableSeats;
        train.DinerCarts = dto.DinerCarts;
        train.CoachSeats = dto.CoachSeats;
        train.FirstClassSeats = dto.FirstClassSeats;
        train.SleeperSeats = dto.SleeperSeats;
        train.RoomletSeats = dto.RoomletSeats;
       

        dataContext.SaveChanges();

        dto.Id = train.Id;

        return Ok(dto);
    }

    [HttpDelete]
    [Route("{id}")]
    [Authorize]
    public ActionResult DeleteStation(int id)
    {
        var train = trains.FirstOrDefault(x => x.Id == id);
        if (train == null)
        {
            return NotFound();
        }

        if (!User.IsInRole(RoleNames.Admin))
        {
            return Forbid();
        }

        trains.Remove(train);

        dataContext.SaveChanges();

        return Ok();
    }

    private bool IsInvalid(TrainDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.Name) ||
               dto.Name.Length > 120 ||
               string.IsNullOrWhiteSpace(dto.TrainClass) ||
               dto.TrainClass.Length > 120;
            
    }

    private bool InvalidManagerId(int? managerId)
    {
        if (managerId == null)
        {
            return false;
        }

        if (!User.IsInRole(RoleNames.Admin))
        {
            // only admins can change manager ids anyway
            return false;
        }
        return !dataContext.Set<User>().Any(x => x.Id == managerId);
    }

    private static IQueryable<TrainDto> GetTrainDtos(IQueryable<Train> trains)
    {
        return trains
            .Select(x => new TrainDto
            {
                Id = x.Id,
                Name = x.Name,
                TrainClass = x.TrainClass,
                AvailableSeats =x.AvailableSeats,
                DinerCarts =x.DinerCarts,
                CoachSeats = x.CoachSeats,
                FirstClassSeats = x.FirstClassSeats,
                SleeperSeats = x.SleeperSeats,
                RoomletSeats = x.RoomletSeats,
            });
    }
}