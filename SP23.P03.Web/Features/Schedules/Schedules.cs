using SP23.P03.Web.Features.ScheduledTrains;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.Schedules
{
    public class Schedule
    {
        public int Id { get; set; }
        public int ScheduledTrainId { get; set; }
        public virtual ScheduledTrain ScheduledTrain { get; set; }
        public int TrainsId { get; set; }
        public virtual Train Train { get; set; }
        public DateTime DepartureTime { get; set; }  //this define sets of time for departures and arrivals whithin a day, like March 12 9am-11am or March 12 2pm-4pm
        public DateTime ArrivalTime { get; set; }
    }
}
