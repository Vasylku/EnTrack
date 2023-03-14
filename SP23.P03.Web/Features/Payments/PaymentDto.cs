namespace SP23.P03.Web.Features.Payments
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public int? user_Id { get; set; }
        public string cardProvider { get; set; } = string.Empty;
        public int? ManagerId { get; set; }
    }
}
