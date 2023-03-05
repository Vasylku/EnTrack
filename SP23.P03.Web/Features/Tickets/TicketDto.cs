using SP23.P03.Web.Features.Schedules;
using SP23.P03.Web.Features.Seat_Types;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.Tickets
{
    public class TicketDto
    {
        public int Id { get; set; }
        public int user_Id { get; set; }
        public int train_Id { get; set; }
        public int schedule_Id { get; set; }
        public int seatType_Id { get; set; }
        public float ticketPrice { get; set; }
        public DateTime bookingDate { get; set; }
        public bool is_Cancelled { get; set; }
    }
}
