using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Trains;

public class TrainConfiguration : IEntityTypeConfiguration<Train>
{
    public void Configure(EntityTypeBuilder<Train> builder)
    {
        builder.Property(x => x.Name)
            .IsRequired();

        builder.HasOne(x => x.Manager)
            .WithMany(x => x.ManageTrains)
            .HasForeignKey(x => x.ManagerId);
    }
}
