using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Trains;

public class TrainConfiguration : IEntityTypeConfiguration<Train>
{
    public void Configure(EntityTypeBuilder<Train> builder)
    {
        builder.HasKey(t => t.Id);

        builder.Property(t => t.Name).IsRequired().HasMaxLength(255);
        builder.Property(t => t.trainClass).IsRequired().HasMaxLength(50);
        builder.Property(t => t.availableSeats).IsRequired(false);
        builder.Property(t => t.dinerCarts).IsRequired(false);
        builder.Property(t => t.coachSeats).IsRequired(false);
        builder.Property(t => t.firstClassSeats).IsRequired(false);
        builder.Property(t => t.sleeperSeats).IsRequired(false);
        builder.Property(t => t.roomletSeats).IsRequired(false);



    }

}