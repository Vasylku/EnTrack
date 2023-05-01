using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.Tickets
{
    public class TicketDto
    {
        public int Id { get; set; }
        public int CheckCode { get; set; }
        public float TicketPrice { get; set; }
        public string StartStationName { get; set; } = string.Empty;
        public string EndStationName { get; set; } = string.Empty;
        public DateTimeOffset DepartureTime { get; set; }
        public DateTimeOffset ArrivalTime { get; set; }
        public string BookedSeat { get; set; } = string.Empty;

    
    }
    public class TicketDetailsDto
    {
        public int Id { get; set; }
        public int CheckCode { get; set; }
        public float TicketPrice { get; set; }
        public string StartStationName { get; set; } = string.Empty;
        public string EndStationName { get; set; } = string.Empty;
        public DateTimeOffset DepartureTime { get; set; }
        public DateTimeOffset ArrivalTime { get; set; }
        public string[] BookedSeat { get; set; } 
    }


}