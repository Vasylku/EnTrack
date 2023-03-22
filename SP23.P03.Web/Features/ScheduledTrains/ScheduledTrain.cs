using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Schedules;
namespace SP23.P03.Web.Features.ScheduledTrains
{
    public class ScheduledTrain
    {
        public int Id { get; set; }
        public int StartStationId { get; set; }
        public virtual TrainStation StartStation { get; set; }
        public int EndStationId { get; set; }
        public virtual TrainStation EndStation { get; set; }
        public float Distance { get; set; }
        public TimeSpan TravelTime { get; set; }
        public virtual ICollection<Schedule> Schedules { get; set; }

    }
}