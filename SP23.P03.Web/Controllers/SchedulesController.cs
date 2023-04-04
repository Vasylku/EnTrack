
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using SP23.P03.Web.Data;
//using SP23.P03.Web.Extensions;
//using SP23.P03.Web.Features.Authorization;
//using SP23.P03.Web.Features.Schedules;
//using SP23.P03.Web.Features.ScheduledTrains;
//using SP23.P03.Web.Features.TrainStations;
//using SP23.P03.Web.Features.Trains;


//namespace SP23.P03.Web.Controllers;

//[Route("api/schedules")]
//[ApiController]
//public class SchedulesController : ControllerBase
//{
//    private readonly DbSet<Schedule> schedules;
//    private readonly DataContext dataContext;

//    public SchedulesController(DataContext dataContext)
//    {
//        this.dataContext = dataContext;
//        schedules = dataContext.Set<Schedule>();
//    }


//    [HttpGet("schedules-search")]
//    public ActionResult<List<ScheduleSearchDto>> GetSchedules(string? startStation, string? endStation, DateTime? departureDate)
//    {
//        if (startStation == null)
//        {
//            return BadRequest("startStation is missing");
//        }

//        if (endStation == null)
//        {
//            return BadRequest("endStation is missing");
//        }

//        if (departureDate == null)
//        {
//            return BadRequest("departureDate is missing");
//        }

//        var allschedules = dataContext.Set<Schedule>()
//            .Where(st => st.DepartureTime.Date == departureDate.Value.Date && st.ScheduledTrain.StartStation.Name == startStation && st.ScheduledTrain.EndStation.Name == endStation)
//            .Select(st => new ScheduleSearchDto
//            {
//                Id = st.Id,
//                TrainsId = st.TrainsId,
//                Train = new TrainDto
//                {
//                    Id = st.TrainsId,
//                    Name = st.Train.Name,
//                    TrainClass = st.Train.TrainClass,
//                    AvailableSeats = st.Train.AvailableSeats,
//                    DinerCarts = st.Train.DinerCarts,
//                    CoachSeats = st.Train.CoachSeats,
//                    FirstClassSeats = st.Train.FirstClassSeats,
//                    SleeperSeats = st.Train.SleeperSeats,
//                    RoomletSeats = st.Train.RoomletSeats,
//                },
//                ScheduledTrainId= st.ScheduledTrainId,
//                ScheduledTrain = new ScheduledTrainDto
//                {
               



//                }

//            }
        //        StartStation = new TrainStationDto
        //        {
        //            Id = st.StartStation.Id,
        //            Name = st.StartStation.Name,
        //            Street = st.StartStation.Street,
        //            City = st.StartStation.City,
        //            State = st.StartStation.State,
        //            Country = st.StartStation.Country,
        //            ZipCode = st.StartStation.ZipCode
        //        },
        //        EndStationId = st.EndStation.Id,
        //        EndStation = new TrainStationDto
        //        {
        //            Id = st.EndStation.Id,
        //            Name = st.EndStation.Name,
        //            Street = st.EndStation.Street,
        //            City = st.EndStation.City,
        //            State = st.EndStation.State,
        //            Country = st.EndStation.Country,
        //            ZipCode = st.EndStation.ZipCode
        //        },
        //        Distance = st.Distance,
        //        TravelTime = st.TravelTime,
        //        Schedules = st.Schedules.Where(s => s.DepartureTime.Date == departureDate.Value.Date) // This should be changed
        //           .Select(s => new ScheduleSearchDto
        //           {

            //               ScheduledTrainId = s.ScheduledTrainId,
            //               TrainsId = s.Train.Id,
            //               DepartureTime = s.DepartureTime,
            //               ArrivalTime = s.ArrivalTime,
            //               Train = new TrainDto
            //               {
            //                   Id = s.TrainsId,
            //                   Name = s.Train.Name,
            //                   TrainClass = s.Train.TrainClass,
            //                   AvailableSeats = s.Train.AvailableSeats,
            //                   DinerCarts = s.Train.DinerCarts,
            //                   CoachSeats = s.Train.CoachSeats,
            //                   FirstClassSeats = s.Train.FirstClassSeats,
            //                   SleeperSeats = s.Train.SleeperSeats,
            //                   RoomletSeats = s.Train.RoomletSeats,
            //               }
            //           }).ToList()
            //    }).ToList();

            //return scheduledTrains;
   