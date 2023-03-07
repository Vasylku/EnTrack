using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Train_Maintenance;

namespace SP23.P03.Web.Features.Trains
{

    public class Train
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; //Name of the train
        public int? diner_Carts { get; set; } //Number of optional diner carts attached
        public int coach_Seats { get; set; } //Number of coach seats left
        public int firstClass_Seats { get; set; } //Number of firsClass seats left
        public int sleeper_Seats { get; set; } //Number of sleeper seats left
        public int roomlet_Seats { get; set; } //Number of roomlet seats left
        public int maintenance_Id { get; set; } //Id of the last maintenance record for the train
        public TrainMaintenance maintenanceRecord { get; set; }
        public int? ManagerId { get; set; } //Id for the Manager for the Train
        public virtual User? Manager { get; set; }

    }
}
