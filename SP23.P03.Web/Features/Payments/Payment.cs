using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.Payments
{
    public class Payment
    {
        public int Id { get; set; }
        public int? user_Id { get; set; } //An opptional user id (optional for guest account)
        public virtual User? User { get; set; }
        public string cardProvider { get; set; } = string.Empty;
        public int? ManagerId { get; set; }
        public virtual User? Manager { get; set; }
    }
}
