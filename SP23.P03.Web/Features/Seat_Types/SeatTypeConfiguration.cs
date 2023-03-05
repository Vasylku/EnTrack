using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Seat_Types;

public class SeatTypeConfiguration : IEntityTypeConfiguration<SeatType>
{
    public void Configure(EntityTypeBuilder<SeatType> builder)
    {
        builder.Property(x => x.seatType)
            .IsRequired();

        builder.HasOne(x => x.Manager)
            .WithMany(x => x.ManageSeatTypes)
            .HasForeignKey(x => x.ManagerId);
    }
}
