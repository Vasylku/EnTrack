using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.Schedules;
using SP23.P03.Web.Features.Seat_Types;
using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.Tickets
{
    public class Ticket
    {
        public int Id { get; set; }
        public int? user_Id { get; set; } //A ticket will be connected to an opptional user_Id (opptional for guests)
        public virtual User user { get; set; }
        public ICollection<Train> train_Id { get; set; } //A ticket can connect to multiple trains for round-trips
        public int schedule_Id { get; set; } //A ticket will have the information from the schedule of the trains
        public Schedule schedule { get; set; }
        public int seatType_Id { get; set; } //A ticket will show the
        public SeatType seatType { get; set; }
        public float ticketPrice { get; set; } //A ticket will have a ticketPrice
        public DateTime bookingDate { get; set; } //A ticket will have bookingDate
        public bool is_Cancelled { get; set; } //A ticket with either be true or false for it being Cancelled
    }
}
