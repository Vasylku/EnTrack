using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.Seat_Types
{
    public class SeatType
    {
        public int Id { get; set; }
        public string seatType { get; set; } = string.Empty; //Different seat types
        public int? ManagerId { get; set; } //Managed by one Manager in case of any removals or additions
        public virtual User? Manager { get; set; }
    }
}
