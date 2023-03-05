using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Schedules;
public class ScheduleConfiguration : IEntityTypeConfiguration<Schedule>
{
    public void Configure(EntityTypeBuilder<Schedule> builder)
    {
        builder.Property(x => x.train_Id)
            .IsRequired();

        builder.Property(x => x.maintenance_Id)
            .IsRequired();

        builder.Property(x => x.departureTime)
            .IsRequired();

        builder.Property(x => x.arrivalTime)
            .IsRequired();

        builder.Property(x => x.startStation_Id)
            .IsRequired();

        builder.Property(x => x.endStation_Id)
            .IsRequired();

        builder.HasOne(x => x.Manager)
            .WithMany(x => x.ManageSchedules)
            .HasForeignKey(x => x.ManagerId);
    }
}
