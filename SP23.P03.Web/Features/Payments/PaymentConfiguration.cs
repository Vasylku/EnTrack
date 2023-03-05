using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Payments
{
    public class PaymentConfiguration : IEntityTypeConfiguration<Payment>
    {
        public void Configure(EntityTypeBuilder<Payment> builder)
        {
            builder.Property(x => x.paymentMethod)
                .IsRequired();

            builder.Property(x => x.cardNum)
                .IsRequired();

            builder.Property(x => x.cardExpire)
                .IsRequired();

            builder.Property(x => x.card_Sec_Code)
                .IsRequired();

            builder.Property(x => x.billingAddress)
                .IsRequired();
        }
    }
}
