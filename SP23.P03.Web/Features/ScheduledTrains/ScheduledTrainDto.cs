using SP23.P03.Web.Features.Schedules;


namespace SP23.P03.Web.Features.ScheduledTrains
{
    public class ScheduledTrainDto
    {
        public int Id { get; set; }
        public int StartStationId { get; set; }
        public int EndStationId { get; set; }
        public float Distance { get; set; }
        public TimeSpan TravelTime { get; set; }
        public ICollection<ScheduleDto> Schedules { get; set; }
    }
}
