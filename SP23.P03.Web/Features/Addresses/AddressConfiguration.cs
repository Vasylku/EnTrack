using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SP23.P03.Web.Features.Addresses
{
    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.Property(x => x.Street)
                .IsRequired();

            builder.Property(x => x.City)
                .IsRequired();

            builder.Property(x => x.State)
                .IsRequired();

            builder.Property(x => x.Country)
                .IsRequired();

            builder.Property(x => x.ZipCode)
                .IsRequired();

            builder.HasOne(x => x.Manager)
                .WithMany(x => x.ManageAddresses)
                .HasForeignKey(x => x.ManagerId);
        }
    }
}
