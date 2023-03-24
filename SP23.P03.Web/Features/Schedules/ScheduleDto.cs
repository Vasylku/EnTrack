
using SP23.P03.Web.Features.ScheduledTrains;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.Schedules
{
    public class ScheduleDto
    {
       
            public int Id { get; set; }
            public int ScheduledTrainId { get; set; }
            public ScheduledTrainDto ScheduledTrain { get; set; }
            public int TrainsId { get; set; }
            public TrainDto Train { get; set; }
            public DateTime DepartureTime { get; set; }
            public DateTime ArrivalTime { get; set; }
        
    }
    public class ScheduleSearchDto
    {

        public int Id { get; set; }
        public int TrainsId { get; set; }
        public TrainDto Train { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }

    }
}
