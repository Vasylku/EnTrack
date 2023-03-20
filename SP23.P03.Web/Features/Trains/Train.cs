using SP23.P03.Web.Features.Schedules;

namespace SP23.P03.Web.Features.Trains
{
    public class Train
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string trainClass { get; set; } = string.Empty;
        public int? availableSeats { get; set; }
        public int? dinerCarts { get; set; }
        public int? coachSeats { get; set; }
        public int? firstClassSeats { get; set; }
        public int? sleeperSeats { get; set; }
        public int? roomletSeats { get; set; }
        public virtual ICollection<Schedule> Schedules { get; set; }
    }

}