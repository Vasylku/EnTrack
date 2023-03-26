using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Schedules;
using SP23.P03.Web.Features.ScheduledTrains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trains;
using System.Diagnostics;

namespace SP23.P03.Web.Controllers;

[Route("api/scheduledtrains")]
[ApiController]
public class ScheduledTrainsController : ControllerBase
{
    private readonly DbSet<ScheduledTrain> scheduledtrains;
    private readonly DataContext dataContext;

    public ScheduledTrainsController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        scheduledtrains = dataContext.Set<ScheduledTrain>();
    }

    [HttpGet]
    public IQueryable<ScheduledTrainDto> GetAllStations()
    {
        return GetScheduledTrainDtos(scheduledtrains);
    }

    [HttpGet("scheduled-trains_1station")]
    public ActionResult<List<ScheduledTrainSearchDto>> GetScheduledTrain(string? startStationName)
    {
        var scheduledTrains = dataContext.Set<ScheduledTrain>()
            .Where(st => st.StartStation.Name == startStationName)
            .Select(st => new ScheduledTrainSearchDto
            {
                Id = st.Id,
                StartStationId = st.StartStation.Id,
                StartStation = new TrainStationDto
                {
                    Id = st.StartStation.Id,
                    Name = st.StartStation.Name,
                    Street = st.StartStation.Street,
                    City = st.StartStation.City,
                    State = st.StartStation.State,
                    Country = st.StartStation.Country,
                    ZipCode = st.StartStation.ZipCode
                },
                EndStationId = st.EndStation.Id,
                EndStation = new TrainStationDto
                {
                    Id = st.EndStation.Id,
                    Name = st.EndStation.Name,
                    Street = st.EndStation.Street,
                    City = st.EndStation.City,
                    State = st.EndStation.State,
                    Country = st.EndStation.Country,
                    ZipCode = st.EndStation.ZipCode
                },
                Distance = st.Distance,
                TravelTime = st.TravelTime,
                Schedules = st.Schedules
                   .Select(s => new ScheduleSearchDto
                   {
                       Id = s.Id,
                       TrainsId = s.Train.Id,
                       DepartureTime = s.DepartureTime,
                       ArrivalTime = s.ArrivalTime,
                       Train = new TrainDto
                       {
                           Id = s.TrainsId,
                           Name = s.Train.Name,
                           TrainClass = s.Train.TrainClass,
                           AvailableSeats = s.Train.AvailableSeats,
                           DinerCarts = s.Train.DinerCarts,
                           CoachSeats = s.Train.CoachSeats,
                           FirstClassSeats = s.Train.FirstClassSeats,
                           SleeperSeats = s.Train.SleeperSeats,
                           RoomletSeats = s.Train.RoomletSeats,
                       }
                   }).ToList()
            }).ToList();

        return scheduledTrains;
    }

    [HttpGet("scheduled-trains")]
    public ActionResult<List<ScheduledTrainSearchDto>> GetScheduledTrains(string? startStationName, string? endStationName, DateTime? departureDate)
    {
        var scheduledTrains = dataContext.Set<ScheduledTrain>()
            .Where(st => st.StartStation.Name == startStationName && st.EndStation.Name == endStationName)
            .Select(st => new ScheduledTrainSearchDto
            {
                Id = st.Id,
                StartStationId = st.StartStation.Id,
                StartStation = new TrainStationDto
                {
                    Id = st.StartStation.Id,
                    Name = st.StartStation.Name,
                    Street = st.StartStation.Street,
                    City = st.StartStation.City,
                    State = st.StartStation.State,
                    Country = st.StartStation.Country,
                    ZipCode = st.StartStation.ZipCode
                },
                EndStationId = st.EndStation.Id,
                EndStation = new TrainStationDto
                {
                    Id = st.EndStation.Id,
                    Name = st.EndStation.Name,
                    Street = st.EndStation.Street,
                    City = st.EndStation.City,
                    State = st.EndStation.State,
                    Country = st.EndStation.Country,
                    ZipCode = st.EndStation.ZipCode
                },
                Distance = st.Distance,
                TravelTime = st.TravelTime,
                Schedules = st.Schedules.Where(s => s.DepartureTime.Date == departureDate.Value.Date) // This should be changed
                   .Select(s => new ScheduleSearchDto
                   {
                       Id = s.Id,                   
                       TrainsId = s.Train.Id,
                       DepartureTime = s.DepartureTime,
                       ArrivalTime = s.ArrivalTime,
                       Train = new TrainDto
                       {
                           Id = s.TrainsId,
                           Name = s.Train.Name,
                           TrainClass = s.Train.TrainClass,
                           AvailableSeats = s.Train.AvailableSeats,
                           DinerCarts = s.Train.DinerCarts,
                           CoachSeats = s.Train.CoachSeats,
                           FirstClassSeats = s.Train.FirstClassSeats,
                           SleeperSeats = s.Train.SleeperSeats,
                           RoomletSeats = s.Train.RoomletSeats,
                       }
                   }).ToList()
            }).ToList();
     
        return scheduledTrains;
    }

    [HttpGet]
    [Route("{id}")]
    public ActionResult<ScheduledTrainDto> GetScheduledTrainById(int id)
    {
        var result = GetScheduledTrainDtos(scheduledtrains.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    [HttpPost]
    public ActionResult<ScheduledTrainCreateDto> CreateScheduledTrain(ScheduledTrainCreateDto dto)
    {
        if (dto.StartStationId == dto.EndStationId)
        {
            return BadRequest("Start and end station cannot be the same.");
        }

        // Check if distance and travel time are positive values
        if (dto.Distance <= 0 || dto.TravelTime <= TimeSpan.Zero)
        {
            return BadRequest("Distance and travel time must be positive values.");
        }
        var scheduledTrain = new ScheduledTrain
        {
            StartStationId = dto.StartStationId,
            EndStationId = dto.EndStationId,
            Distance = dto.Distance,
            TravelTime = dto.TravelTime,
            Schedules = new List<Schedule>()
        };

        scheduledtrains.Add(scheduledTrain);
        dataContext.SaveChanges();

        dataContext.SaveChanges();

        var scheduledTrainDto = new ScheduledTrainCreateDto
        {
            Id = scheduledTrain.Id,
            StartStationId = scheduledTrain.StartStationId,
            EndStationId = scheduledTrain.EndStationId,
            Distance = scheduledTrain.Distance,
            TravelTime = scheduledTrain.TravelTime,
       
        };

        return CreatedAtAction(nameof(GetScheduledTrainById), new { id = scheduledTrainDto.Id }, scheduledTrainDto);
    }
    [HttpPut]
    [Route("{id}")]
    [Authorize]
    public ActionResult<ScheduledTrainDto> UpdateScheduledTrain(int id, ScheduledTrainCreateDto dto)
    {
        if (dto.StartStationId == dto.EndStationId)
        {
            return BadRequest("Start and end station cannot be the same.");
        }

        // Check if distance and travel time are positive values
        if (dto.Distance <= 0 || dto.TravelTime <= TimeSpan.Zero)
        {
            return BadRequest("Distance and travel time must be positive values.");
        }

        var scheduledTrain = scheduledtrains.FirstOrDefault(x => x.Id == id);
        if (scheduledTrain == null)
        {
            return NotFound();
        }

        if (!User.IsInRole(RoleNames.Admin))
        {
            return Forbid();
        }

        scheduledTrain.StartStationId = dto.StartStationId;
        scheduledTrain.EndStationId = dto.EndStationId;
        scheduledTrain.Distance = dto.Distance;
        scheduledTrain.TravelTime = dto.TravelTime;

       

        dataContext.SaveChanges();

        var scheduledTrainDto = new ScheduledTrainDto
        {
            Id = scheduledTrain.Id,
            StartStationId = scheduledTrain.StartStationId,
            EndStationId = scheduledTrain.EndStationId,
            Distance = scheduledTrain.Distance,
            TravelTime = scheduledTrain.TravelTime,
            Schedules = scheduledTrain.Schedules.Select(s => new ScheduleDto
            {
                ScheduledTrainId = s.ScheduledTrainId,
                TrainsId = s.TrainsId,
                ArrivalTime = s.ArrivalTime,
                DepartureTime = s.DepartureTime
            }).ToList()
        };

        return Ok(scheduledTrainDto);
    }

    [HttpDelete]
    [Route("{id}")]
    [Authorize]
    public ActionResult DeleteStation(int id)
    {
        var scheduledtrain = scheduledtrains.FirstOrDefault(x => x.Id == id);

        if (scheduledtrain == null)
        {
            return NotFound();
        }

        if (!User.IsInRole(RoleNames.Admin) && !User.IsInRole(RoleNames.Admin))
        {
            return Forbid();
        }

        scheduledtrains.Remove(scheduledtrain);

        dataContext.SaveChanges();

        return Ok();
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

    private static IQueryable<ScheduledTrainDto> GetScheduledTrainDtos(IQueryable<ScheduledTrain> scheduledtrains)
    {
        return scheduledtrains
            .Select(x => new ScheduledTrainDto
            {
                Id = x.Id,
                StartStationId =x.StartStationId,
                EndStationId = x.EndStationId,
                Distance = x.Distance,
                TravelTime = x.TravelTime,
                Schedules = x.Schedules.Select(s => new ScheduleDto
                {
                    Id = s.Id,
                    ScheduledTrainId = s.ScheduledTrainId,
                    TrainsId = s.TrainsId,
                    ArrivalTime = s.ArrivalTime,
                    DepartureTime = s.DepartureTime
                }).ToList()
            });
    }
    private static IQueryable<ScheduledTrainCreateDto> GetScheduledTrainCreateDtos(IQueryable<ScheduledTrain> scheduledtrains)
    {
        return scheduledtrains
            .Select(x => new ScheduledTrainCreateDto
            {
                Id= x.Id,
                StartStationId = x.StartStationId,
                EndStationId = x.EndStationId,
                Distance = x.Distance,
                TravelTime = x.TravelTime,
            
            });
    }
}
