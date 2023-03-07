using SP23.P03.Web.Features.Routes;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.RouteStations
{
    public class RouteStation
    {
        public int Id { get; set; }
        public int RouteId { get; set; }
        public Route_1 Route { get; set; }
        public int StationId { get; set; }
        public TrainStation Station { get; set; }
        public DateTime ArrivalTime { get; set; }
        public DateTime DepartureTime { get; set; }
    }
}
