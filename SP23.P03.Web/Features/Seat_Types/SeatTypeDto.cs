namespace SP23.P03.Web.Features.Seat_Types
{
    public class SeatTypeDto
    {
        public int Id { get; set; }
        public string seatType { get; set; } = string.Empty;
        public int? Manager_Id { get; set; }
    }
}
