using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Trains;

public class TrainConfiguration : IEntityTypeConfiguration<Train>
{
    public void Configure(EntityTypeBuilder<Train> builder)
    {
        builder.HasKey(t => t.Id);

        builder.Property(t => t.Name)
            .IsRequired()
            .HasMaxLength(255);

        builder.Property(t => t.TrainClass)
            .IsRequired()
            .HasMaxLength(50);
        
        builder.Property(t => t.AvailableSeats)
            .IsRequired(false);

        builder.Property(t => t.DinerCarts)
            .IsRequired(false);

        builder.Property(t => t.CoachSeats)
            .IsRequired(false);

        builder.Property(t => t.FirstClassSeats)
            .IsRequired(false);

        builder.Property(t => t.SleeperSeats)
            .IsRequired(false);

        builder.Property(t => t.RoomletSeats)
            .IsRequired(false);



    }

}