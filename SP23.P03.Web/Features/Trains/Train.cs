//using SP23.P03.Web.Features.ScheduledTrains;
//using SP23.P03.Web.Features.Train_Maintenance;
//using SP23.P03.Web.Features.Authorization;

//namespace SP23.P03.Web.Features.Trains
//{

//    public class Train
//    {
//        public int Id { get; set; }
//        public string Name { get; set; } = string.Empty; //Name of the train
//        public string trainClass { get; set; } = string.Empty; //Class for the type of train
//        public int schedule_Id { get; set; } //Id for the schedule this Train will follow
//        public ScheduledTrain schedule { get; set; }
//        public int? availableSeats { get; set; } //Number of seats left for customers
//        public int? diner_Carts { get; set; } //Number of optional diner carts attached
//        public int? coach_Seats { get; set; } //Number of coach seats left
//        public int? firstClass_Seats { get; set; } //Number of firsClass seats left
//        public int? sleeper_Seats { get; set; } //Number of sleeper seats left
//        public int? roomlet_Seats { get; set; } //Number of roomlet seats left
//        public int? maintenance_Id { get; set; } //Id of the last maintenance record for the train
//        public TrainMaintenance? maintenanceRecord { get; set; }
//        public int? ManagerId { get; set; }
//        public virtual User? Manager { get; set; }
//    }
//}
