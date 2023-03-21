using SP23.P03.Web.Features.Schedules;

namespace SP23.P03.Web.Features.Trains
{
    public class Train
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string TrainClass { get; set; } = string.Empty;
        public int? AvailableSeats { get; set; }
        public int? DinerCarts { get; set; }
        public int? CoachSeats { get; set; }
        public int? FirstClassSeats { get; set; }
        public int? SleeperSeats { get; set; }
        public int? RoomletSeats { get; set; }
        public virtual ICollection<Schedule> Schedules { get; set; }
    }

}