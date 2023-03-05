using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.Payments
{
    public class Payment
    {
        public int Id { get; set; }
        public int? user_Id { get; set; } //An opptional user id (optional for guest account)
        public virtual User? User { get; set; }
        public string paymentMethod { get; set; } = string.Empty; //String for the payment (could for another table for payment optional like Paypal and Visa)
        public int cardNum { get; set; } //int for the card number used
        public DateTime cardExpire { get; set; } //int for when the card will expire
        public int card_Sec_Code { get; set; } //int for the security code for the card
        public string billingAddress { get; set; } = string.Empty; //string for the billing address of the buyer
        public DateTime paymentDate { get; set; } //date of the purchase
        public float paymentAmount { get; set; } //total for the payment
    }
}
