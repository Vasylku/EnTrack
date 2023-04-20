
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Schedules;
using SP23.P03.Web.Features.ScheduledTrains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trains;


namespace SP23.P03.Web.Controllers;

[Route("api/schedules")]
[ApiController]
public class SchedulesController : ControllerBase
{
    private readonly DbSet<Schedule> schedules;
    private readonly DataContext dataContext;

    public SchedulesController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        schedules = dataContext.Set<Schedule>();
    }

    [HttpGet("{id}")]
    public IActionResult GetScheduleById(int id)
    {
        var schedule = schedules.FirstOrDefault(s => s.Id == id);

        if (schedule == null)
        {
            return NotFound();
        }
        List<string> reservedSeats = new List<string>();
        byte[] bookedSeats = schedule.ReservedSeats;

        for (int i = 0; i < bookedSeats.Length; i++)
        {
            if ((bookedSeats[i] & 0x01) != 0)
            {
                reservedSeats.Add("c" + (i + 1));
            }
            if ((bookedSeats[i] & 0x08) != 0)
            {
                reservedSeats.Add("s" + (i + 1));
            }
            if ((bookedSeats[i] & 0x24) != 0)
            {
                reservedSeats.Add("f" + (i + 1));
            }
            if ((bookedSeats[i] & 0x32) != 0)
            {
                reservedSeats.Add("r" + (i + 1));
            }
        }
        var scheduled = dataContext.Set<Schedule>()
            .Where(s => s.Id == id)
            .Select(s => 
     new ScheduleSeatBookDto
        {
            Id = s.Id,
            ScheduledTrainId = s.ScheduledTrain!.Id,
            ScheduledTrain = new ScheduledTrainDto
            {
                Id = s.ScheduledTrain.Id,
                StartStationId = s.ScheduledTrain.StartStationId,
                StartStation = new TrainStationDto
                {
                    Id = s.ScheduledTrain!.StartStation!.Id,
                    Name = s.ScheduledTrain.StartStation.Name,
                    Street = s.ScheduledTrain.StartStation.Street,
                    City = s.ScheduledTrain.StartStation.City,
                    State = s.ScheduledTrain.StartStation.State,
                    Country = s.ScheduledTrain.StartStation.Country,
                    ZipCode = s.ScheduledTrain.StartStation.ZipCode
                },
                EndStationId = s.ScheduledTrain.EndStationId,
                EndStation = new TrainStationDto
                {
                    Id = s.ScheduledTrain!.EndStation!.Id,
                    Name = s.ScheduledTrain.EndStation.Name,
                    Street = s.ScheduledTrain.EndStation.Street,
                    City = s.ScheduledTrain.EndStation.City,
                    State = s.ScheduledTrain.EndStation.State,
                    Country = s.ScheduledTrain.EndStation.Country,
                    ZipCode = s.ScheduledTrain.EndStation.ZipCode
                },
                Distance = s.ScheduledTrain.Distance,
                TravelTime = s.ScheduledTrain.TravelTime,

            },
            TrainsId = s.Train!.Id,
             Train = new TrainDto
             { 
                  Id = s.Id,
                  Name = s.Train.Name,
                TrainClass = s.Train.TrainClass,
                  AvailableSeats = s.Train.AvailableSeats,
                 DinerCarts = s.Train.DinerCarts,
                CoachSeats = s.Train.CoachSeats,
                 FirstClassSeats = s.Train.FirstClassSeats,
                 SleeperSeats = s.Train.SleeperSeats,
                 RoomletSeats = s.Train.RoomletSeats,
         },
            AvailableSeats = s.AvailableSeats,
            ReservedCheck = reservedSeats,
            DepartureTime = s.DepartureTime,
            ArrivalTime = s.ArrivalTime,
        }).ToList();  
        return Ok(scheduled);
    }
    [HttpPut]
    public IActionResult UpdateSchedule(int id, string[] seatNumbers)

    {
        var schedule = schedules.FirstOrDefault(s => s.Id == id);

        if (schedule == null)
        {
            return NotFound();
        }

        if (seatNumbers == null)
        {
            return BadRequest("Seat numbers cannot be null.");
        }
        // Convert seats to byte array

        byte[] bookedSeats = (byte[])schedule.ReservedSeats.Clone(); 

        foreach (var seatNumber in seatNumbers)
        {
            int seatIndex = Convert.ToInt32(seatNumber.Substring(1)) - 1; 
            char seatTypeN = seatNumber[0];
            switch (seatTypeN)
            {
                case 'c':
                    bookedSeats[seatIndex] |= 0x01;//'c' (coach seats): 304 (38 x 8 x 1 / 1)
                    break;
                case 's':
                    bookedSeats[seatIndex] |= 0x08; //'s'(sleeper seats): 38(38 x 8 x 1 / 8)
                    break;
                case 'f':
                    bookedSeats[seatIndex] |= 0x24;//'f' (first class seats): 152 (38 x 8 x 3 / 8)
                    break;
                case 'r':
                    bookedSeats[seatIndex] |= 0x32; //'r'(roomlet seats): 119(38 x 8 x 2 / 8)
                    break;
                // Add cases for other seattypes if necessary
                default:
                    return BadRequest("Invalid seat type");
            }
        }
        schedule.ReservedSeats = bookedSeats;
        dataContext.SaveChanges();
        List<string> reservedSeats = new List<string>();
        for (int i = 0; i < bookedSeats.Length; i++)
        {
            if ((bookedSeats[i] & 0x01) != 0)
            {
                reservedSeats.Add("c" + (i + 1));
            }
            if ((bookedSeats[i] & 0x08) != 0)
            {
                reservedSeats.Add("s" + (i + 1));
            }
            if ((bookedSeats[i] & 0x24) != 0)
            {
                reservedSeats.Add("f" + (i + 1));
            }
            if ((bookedSeats[i] & 0x32) != 0)
            {
                reservedSeats.Add("r" + (i + 1));
            }
        }
     
        // Map updated schedule to DTO
        var dto = new ScheduleSeatBookDto
        {
            Id = schedule.Id,

            ReservedCheck = reservedSeats,
        };

        return Ok(dto);
    }

}
