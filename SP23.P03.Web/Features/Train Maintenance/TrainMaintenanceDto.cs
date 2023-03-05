namespace SP23.P03.Web.Features.Train_Maintenance
{
    public class trainMaintenance
    {
        public int train_Id { get; set; }
        public DateTime last_Maintenance { get; set; }
        public DateTime next_Maintenance { get; set; }
        public string issues { get; set; } = string.Empty;
        public string repairs { get; set; } = string.Empty;
        public string maintenance_logs { get; set; } = string.Empty;
    }
}
