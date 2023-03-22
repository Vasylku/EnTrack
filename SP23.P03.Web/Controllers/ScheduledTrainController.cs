//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using SP23.P03.Web.Data;
//using SP23.P03.Web.Extensions;
//using SP23.P03.Web.Features.Authorization;
//using SP23.P03.Web.Features.Schedules;
//using SP23.P03.Web.Features.ScheduledTrains;
//using SP23.P03.Web.Features.TrainStations;

//namespace SP23.P03.Web.Controllers;

//[Route("api/scheduledtrains")]
//[ApiController]
//public class ScheduledTrainsController : ControllerBase
//{
//    private readonly DbSet<ScheduledTrain> scheduledtrains;
//    private readonly DataContext dataContext;

//    public ScheduledTrainsController(DataContext dataContext)
//    {
//        this.dataContext = dataContext;
//        scheduledtrains = dataContext.Set<ScheduledTrain>();
//    }

//    [HttpGet]
//    public IQueryable<ScheduledTrainDto> GetAllStations()
//    {
//        return GetScheduledTrainDtos(scheduledtrains);
//    }

//    [HttpGet]
//    [Route("{id}")]
//    public ActionResult<ScheduledTrainDto> GetScheduledTrainById(int id)
//    {
//        var result = GetScheduledTrainDtos(scheduledtrains.Where(x => x.Id == id)).FirstOrDefault();
//        if (result == null)
//        {
//            return NotFound();
//        }

//        return Ok(result);
//    }

//    [HttpPost]
//    public ActionResult<ScheduledTrainDto> CreateScheduledTrain(ScheduledTrainDto dto)
//    {

        
//        var scheduledTrain = new ScheduledTrain
//        {
//            StartStationId = dto.StartStationId,
//            EndStationId = dto.EndStationId,
//            Distance = dto.Distance,
//            TravelTime = dto.TravelTime,
//            Schedules = new List<Schedule>()
//        };

//        scheduledtrains.Add(scheduledTrain);
//        dataContext.SaveChanges();

//        foreach (var schedule in dto.Schedules)
//        {
//            scheduledTrain.Schedules.Add(new Schedule
//            {
//                ScheduledTrainId = scheduledTrain.Id,
//                TrainsId = schedule.TrainsId,
//                ArrivalTime = schedule.ArrivalTime,
//                DepartureTime = schedule.DepartureTime
//            });
//        }

//        dataContext.SaveChanges();

//        var scheduledTrainDto = new ScheduledTrainDto
//        {
//            Id = scheduledTrain.Id,
//            StartStationId = scheduledTrain.StartStationId,
//            EndStationId = scheduledTrain.EndStationId,
//            Distance = scheduledTrain.Distance,
//            TravelTime = scheduledTrain.TravelTime,
//            Schedules = scheduledTrain.Schedules.Select(s => new ScheduleDto
//            {
//                TrainsId = s.TrainsId,
//                ArrivalTime = s.ArrivalTime,
//                DepartureTime = s.DepartureTime
//            }).ToList()
//        };

//        return CreatedAtAction(nameof(GetScheduledTrainById), new { id = scheduledTrainDto.Id }, scheduledTrainDto);
//    }
    //[HttpPut]
    //[Route("{id}")]
    //[Authorize]
    //public ActionResult<ScheduledTrainDto> UpdateStation(int id, ScheduledTrainDto dto)
    //{
    //    if (IsInvalid(dto))
    //    {
    //        return BadRequest();
    //    }

    //    var scheduledtrain = scheduledtrains.FirstOrDefault(x => x.Id == id);
    //    if (scheduledtrain == null)
    //    {
    //        return NotFound();
    //    }

    //    if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != scheduledtrain.ManagerId)
    //    {
    //        return Forbid();
    //    }

    //    scheduledtrain.train_Id = dto.train_Id;
    //    scheduledtrain.startStation_Id = dto.startStation_Id;
    //    scheduledtrain.endStation_Id = dto.endStation_Id;
    //    scheduledtrain.departureDate = dto.departureDate;
    //    scheduledtrain.arrivalDate = dto.arrivalDate;
    //    scheduledtrain.distance = dto.distance;
    //    scheduledtrain.travel_Time = dto.travel_Time;

    //    if (User.IsInRole(RoleNames.Admin))
    //    {
    //        scheduledtrain.ManagerId = dto.ManagerId;
    //    }

    //    dataContext.SaveChanges();

    //    dto.Id = scheduledtrain.Id;

    //    return Ok(dto);
    //}

    //[HttpDelete]
    //[Route("{id}")]
    //[Authorize]
    //public ActionResult DeleteStation(int id)
    //{
    //    var scheduledtrain = scheduledtrains.FirstOrDefault(x => x.Id == id);

    //    if (scheduledtrain == null)
    //    {
    //        return NotFound();
    //    }

    //    if (!User.IsInRole(RoleNames.Admin) &&  !User.IsInRole(RoleNames.Admin))
    //    {
    //        return Forbid();
    //    }

    //    scheduledtrains.Remove(scheduledtrain);

    //    dataContext.SaveChanges();

    //    return Ok();
    //}

    //private bool InvalidManagerId(int? managerId)
    //{
    //    if (managerId == null)
    //    {
    //        return false;
    //    }

    //    if (!User.IsInRole(RoleNames.Admin))
    //    {
    //        // only admins can change manager ids anyway
    //        return false;
    //    }
    //    return !dataContext.Set<User>().Any(x => x.Id == managerId);
  //  }

//    private static IQueryable<ScheduledTrainDto> GetScheduledTrainDtos(IQueryable<ScheduledTrain> scheduledtrains)
//    {
//        return scheduledtrains
//            .Select(x => new ScheduledTrainDto
//            {
//                Id = x.Id,
//                StartStationId = x.StartStationId,
//                EndStationId = x.EndStationId,                  
//                Distance = x.Distance,
//                TravelTime = x.TravelTime,
//                Schedules = new List<ScheduleDto>()
//            });
//    }
//}