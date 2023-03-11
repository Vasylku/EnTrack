using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;

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
            trainClass = dto.trainClass,
            schedule_Id = dto.schedule_Id,
            availableSeats = dto.availableSeats,
            diner_Carts = dto.diner_Carts,
            coach_Seats = dto.coach_Seats,
            firstClass_Seats = dto.firstClass_Seats,
            sleeper_Seats = dto.sleeper_Seats,
            roomlet_Seats = dto.roomlet_Seats,
            maintenance_Id = dto.maintenance_Id,
            ManagerId = dto.ManagerId,
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

        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != train.ManagerId)
        {
            return Forbid();
        }

        train.Name = dto.Name;
        train.trainClass = dto.trainClass;
        train.schedule_Id = dto.schedule_Id;
        train.availableSeats = dto.availableSeats;
        train.diner_Carts = dto.diner_Carts;
        train.coach_Seats = dto.coach_Seats;
        train.firstClass_Seats = dto.firstClass_Seats;
        train.sleeper_Seats = dto.sleeper_Seats;
        train.roomlet_Seats = dto.roomlet_Seats;
        train.maintenance_Id = dto.maintenance_Id;

        if (User.IsInRole(RoleNames.Admin))
        {
            train.ManagerId = dto.ManagerId;
        }

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

        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != train.ManagerId)
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
               string.IsNullOrWhiteSpace(dto.trainClass) ||
               dto.trainClass.Length > 120 ||
               InvalidManagerId(dto.ManagerId);
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
                trainClass = x.trainClass,
                schedule_Id = x.schedule_Id,
                availableSeats = x.availableSeats,
                diner_Carts = x.diner_Carts,
                coach_Seats = x.coach_Seats,
                firstClass_Seats = x.firstClass_Seats,
                sleeper_Seats = x.sleeper_Seats,
                maintenance_Id = x.maintenance_Id
            });
    }
}