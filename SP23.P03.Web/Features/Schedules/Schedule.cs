using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.Train_Maintenance;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.Schedules
{
    public class Schedule
    {
        public int Id { get; set; }
        public int train_Id { get; set; } //A schedule will go to a train
        public Train train { get; set; }
        public int maintenance_Id { get; set; } //A schedule will include the maintenance record (personally curious if this is needed)
        public TrainMaintenance maintenance { get; set; }
        public DateTime departureTime { get; set; } //A schedule will include a departure time
        public DateTime arrivalTime { get; set; } //A schedule will include a arrival time
        public int startStation_Id { get; set; } //A schedule will provide the info for the starting station (potential removal for route_Id)
        public TrainStation startStation { get; set; }
        public int endStation_Id { get;set; } //A schedule will provide the info for the starting station (potential removal for route_Id)
        public TrainStation endStation { get;set; }
        public int? ManagerId { get; set; } //A schedule will be managed by one Manager for now
        public virtual User? Manager { get; set; }

    }
}
