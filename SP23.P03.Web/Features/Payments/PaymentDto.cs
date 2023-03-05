namespace SP23.P03.Web.Features.Payments
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public int user_Id { get; set; }
        public string paymentMethod { get; set; } = string.Empty;
        public int cardNum { get; set; }
        public DateTime cardExpire { get; set; }
        public int card_Sec_Code { get; set; }
        public string billingAddress { get; set; } = string.Empty;
        public DateTime paymentDate { get; set; }
        public float paymentAmount { get; set; }
    }
}
