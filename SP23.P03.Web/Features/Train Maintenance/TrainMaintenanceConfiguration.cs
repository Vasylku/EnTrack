using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Train_Maintenance;

public class TrainMaintenanceConfiguration : IEntityTypeConfiguration<TrainMaintenance>
{
    public void Configure(EntityTypeBuilder<TrainMaintenance> builder)
    {
        builder.Property(x => x.train_Id)
            .IsRequired();

        builder.Property(x => x.last_Maintenance)
            .IsRequired();

        builder.Property(x => x.next_Maintenance)
            .IsRequired();

        builder.Property(x => x.status)
            .IsRequired();

        builder.Property(x => x.maintenance_logs)
            .IsRequired();

        builder.HasOne(x => x.Manager)
            .WithMany(x => x.ManageMaintenance)
            .HasForeignKey(x => x.ManagerId);
    }
}
