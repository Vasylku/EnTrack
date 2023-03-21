using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.Payments
{
    public class Payment
    {
        public int Id { get; set; }
        public int? UserId { get; set; } //An opptional user id (optional for guest account)
        public virtual User? User { get; set; }
        public string CardProvider { get; set; } = string.Empty;
       
    }
}
