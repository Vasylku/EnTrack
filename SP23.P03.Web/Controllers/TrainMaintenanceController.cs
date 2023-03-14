//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using SP23.P03.Web.Data;
//using SP23.P03.Web.Extensions;
//using SP23.P03.Web.Features.Authorization;
//using SP23.P03.Web.Features.Train_Maintenance;

//namespace SP23.P03.Web.Controllers;

//[Route("api/trainmaintenance")]
//[ApiController]
//public class TrainMaintenanceController : ControllerBase
//{
//    private readonly DbSet<TrainMaintenance> trainmaintenances;
//    private readonly DataContext dataContext;

//    public TrainMaintenanceController(DataContext dataContext)
//    {
//        this.dataContext = dataContext;
//        trainmaintenances = dataContext.Set<TrainMaintenance>();
//    }

//    [HttpGet]
//    [Authorize(Roles = RoleNames.Admin)]
//    public IQueryable<TrainMaintenanceDto> GetAllStations()
//    {
//        return GetTrainMaintenanceDtos(trainmaintenances);
//    }

//    [HttpGet]
//    [Route("{id}")]
//    [Authorize]
//    public ActionResult<TrainMaintenanceDto> GetStationById(int id)
//    {
//        var result = GetTrainMaintenanceDtos(trainmaintenances.Where(x => x.Id == id)).FirstOrDefault();
//        if (result == null)
//        {
//            return NotFound();
//        }

//        return Ok(result);
//    }

//    [HttpPost]
//    [Authorize(Roles = RoleNames.Admin)]
//    public ActionResult<TrainMaintenanceDto> CreateStation(TrainMaintenanceDto dto)
//    {
//        if (IsInvalid(dto))
//        {
//            return BadRequest();
//        }

//        var trainmaintenance = new TrainMaintenance
//        {
//            train_Id = dto.train_Id,
//            last_Maintenance = dto.last_Maintenance,
//            next_Maintenance = dto.next_Maintenance,
//            status = dto.status,
//            issues = dto.issues,
//            repairs = dto.repairs,
//            maintenance_logs = dto.maintenance_logs,

//        };
//        trainmaintenances.Add(trainmaintenance);

//        dataContext.SaveChanges();

//        dto.Id = trainmaintenance.Id;

//        return CreatedAtAction(nameof(GetStationById), new { id = dto.Id }, dto);
//    }

//    [HttpPut]
//    [Route("{id}")]
//    [Authorize]
//    public ActionResult<TrainMaintenanceDto> UpdateStation(int id, TrainMaintenanceDto dto)
//    {
//        if (IsInvalid(dto))
//        {
//            return BadRequest();
//        }

//        var trainmaintenance = trainmaintenances.FirstOrDefault(x => x.Id == id);
//        if (trainmaintenance == null)
//        {
//            return NotFound();
//        }

//        trainmaintenance.train_Id = dto.train_Id;
//        trainmaintenance.last_Maintenance = dto.last_Maintenance;
//        trainmaintenance.next_Maintenance = dto.next_Maintenance;
//        trainmaintenance.status = dto.status;
//        trainmaintenance.issues = dto.issues;
//        trainmaintenance.repairs = dto.repairs;
//        trainmaintenance.maintenance_logs = dto.maintenance_logs;

//        if (User.IsInRole(RoleNames.Admin))
//        {
//            trainmaintenance.ManagerId = dto.ManagerId;
//        }

//        dataContext.SaveChanges();

//        dto.Id = trainmaintenance.Id;

//        return Ok(dto);
//    }

//    [HttpDelete]
//    [Route("{id}")]
//    [Authorize]
//    public ActionResult DeleteStation(int id)
//    {
//        var trainmaintenance = trainmaintenances.FirstOrDefault(x => x.Id == id);
//        if (trainmaintenance == null)
//        {
//            return NotFound();
//        }

//        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != trainmaintenance.ManagerId)
//        {
//            return Forbid();
//        }

//        trainmaintenances.Remove(trainmaintenance);

//        dataContext.SaveChanges();

//        return Ok();
//    }

//    private bool IsInvalid(TrainMaintenanceDto dto)
//    {
//        return InvalidManagerId(dto.ManagerId);
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

//    private static IQueryable<TrainMaintenanceDto> GetTrainMaintenanceDtos(IQueryable<TrainMaintenance> trainmaintenance)
//    {
//        return trainmaintenance
//            .Select(x => new TrainMaintenanceDto
//            {
//                Id = x.Id,
//                train_Id = x.train_Id,
//                last_Maintenance = x.last_Maintenance,
//                next_Maintenance = x.next_Maintenance,
//                status = x.status,
//                issues = x.issues,
//                repairs = x.repairs,
//                maintenance_logs = x.maintenance_logs,
//                ManagerId = x.ManagerId,
//            });
//    }
//}