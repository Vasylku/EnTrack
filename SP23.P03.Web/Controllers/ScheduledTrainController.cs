//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using SP23.P03.Web.Data;
//using SP23.P03.Web.Extensions;
//using SP23.P03.Web.Features.Authorization;
//using SP23.P03.Web.Features.Routes;
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
//    [Authorize(Roles = RoleNames.Admin)]
//    public ActionResult<ScheduledTrainDto> CreateStation(ScheduledTrainDto dto)
//    {
//        if (IsInvalid(dto))
//        {
//            return BadRequest();
//        }

//        var scheduledtrain = new ScheduledTrain
//        {
//            train_Id = dto.train_Id,
//            startStation_Id = dto.startStation_Id,
//            endStation_Id = dto.endStation_Id,
//            departureDate = dto.departureDate,
//            arrivalDate = dto.arrivalDate,
//            distance = dto.distance,
//            travel_Time = dto.travel_Time,
//            ManagerId = dto.ManagerId,
//        };
//        scheduledtrains.Add(scheduledtrain);

//        dataContext.SaveChanges();

//        dto.Id = scheduledtrain.Id;

//        return CreatedAtAction(nameof(GetScheduledTrainById), new { id = dto.Id }, dto);
//    }

//    [HttpPut]
//    [Route("{id}")]
//    [Authorize]
//    public ActionResult<ScheduledTrainDto> UpdateStation(int id, ScheduledTrainDto dto)
//    {
//        if (IsInvalid(dto))
//        {
//            return BadRequest();
//        }

//        var scheduledtrain = scheduledtrains.FirstOrDefault(x => x.Id == id);
//        if (scheduledtrain == null)
//        {
//            return NotFound();
//        }

//        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != scheduledtrain.ManagerId)
//        {
//            return Forbid();
//        }

//        scheduledtrain.train_Id = dto.train_Id;
//        scheduledtrain.startStation_Id = dto.startStation_Id;
//        scheduledtrain.endStation_Id = dto.endStation_Id;
//        scheduledtrain.departureDate = dto.departureDate;
//        scheduledtrain.arrivalDate = dto.arrivalDate;
//        scheduledtrain.distance = dto.distance;
//        scheduledtrain.travel_Time = dto.travel_Time;
        
//        if (User.IsInRole(RoleNames.Admin))
//        {
//            scheduledtrain.ManagerId = dto.ManagerId;
//        }

//        dataContext.SaveChanges();

//        dto.Id = scheduledtrain.Id;

//        return Ok(dto);
//    }

//    [HttpDelete]
//    [Route("{id}")]
//    [Authorize]
//    public ActionResult DeleteStation(int id)
//    {
//        var scheduledtrain = scheduledtrains.FirstOrDefault(x => x.Id == id);

//        if (scheduledtrain == null)
//        {
//            return NotFound();
//        }

//        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != scheduledtrain.ManagerId)
//        {
//            return Forbid();
//        }

//        scheduledtrains.Remove(scheduledtrain);

//        dataContext.SaveChanges();

//        return Ok();
//    }

//    private bool IsInvalid(ScheduledTrainDto dto)
//    {
//        return  dto.train_Id == null ||
//            dto.startStation_Id == null ||
//            dto.endStation_Id == null ||
//            dto.departureDate == null ||
//            dto.arrivalDate == null ||
//            dto.distance < 0 ||
//            dto.travel_Time == null ||
//            InvalidManagerId(dto.ManagerId);
//    }

//    private bool InvalidManagerId(int? managerId)
//    {
//        if (managerId == null)
//        {
//            return false;
//        }

//        if (!User.IsInRole(RoleNames.Admin))
//        {
//            // only admins can change manager ids anyway
//            return false;
//        }
//        return !dataContext.Set<User>().Any(x => x.Id == managerId);
//    }

//    private static IQueryable<ScheduledTrainDto> GetScheduledTrainDtos(IQueryable<ScheduledTrain> scheduledtrains)
//    {
//        return scheduledtrains
//            .Select(x => new ScheduledTrainDto
//            {
//                Id = x.Id,
//                train_Id = x.train_Id,
//                startStation_Id = x.startStation_Id,
//                endStation_Id = x.endStation_Id,
//                departureDate = x.departureDate,
//                arrivalDate = x.arrivalDate,
//                distance = x.distance,
//                travel_Time = x.travel_Time,
//            });
//    }
//}