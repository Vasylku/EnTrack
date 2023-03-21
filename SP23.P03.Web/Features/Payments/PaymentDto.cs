namespace SP23.P03.Web.Features.Payments
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string CardProvider { get; set; } = string.Empty;

    }
}
