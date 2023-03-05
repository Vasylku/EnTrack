using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.Routes
{
    public class RouteDto
    {
        public int Id { get; set; }
        public int startStation_Id { get; set; }
        public int endStation_Id { get; set; }
        public float distance { get; set; }
        public DateTime travel_Time { get; set; }
        public int? ManagerId { get; set; }
    }
}
