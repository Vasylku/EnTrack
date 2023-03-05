namespace SP23.P03.Web.Features.Schedules
{
    public class ScheduleDto
    {

        public int train_Id { get; set; }
        public int maintenance_Id { get; set; }
        public DateTime departureTime { get; set; }
        public DateTime arrivalTime { get; set; }
        public int startStation_Id { get; set; }
        public int endStation_Id { get; set; }
        public int? ManagerId { get; set; }
    }
}
