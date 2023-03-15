//using SP23.P03.Web.Features.Authorization;
//using SP23.P03.Web.Features.Trains;

//namespace SP23.P03.Web.Features.Train_Maintenance
//{
//    public class TrainMaintenance
//    {
//        public int Id { get; set; }
//        public ICollection<Train> train_Id { get; set; } //Maintenance records will have multiple trains
//        public DateTime last_Maintenance { get; set; } //Keep record of the last time a train had maintenance
//        public DateTime next_Maintenance { get; set; } //Keep record of the next time a train will have maintenance
//        public string? status { get; set; } = string.Empty; //Current status of maintenance if currently going on
//        public string? issues { get; set; } = string.Empty; //Current issues if any
//        public string? repairs { get; set; } = string.Empty; //Current repairs if any have been made
//        public string? maintenance_logs { get; set; } = string.Empty; //Current maintenance logs if its not a new train
//        public int? ManagerId { get; set; } //Have an optional Manager
//        public virtual User? Manager { get; set; }
//    }
//}
