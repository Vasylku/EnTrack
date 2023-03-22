using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;



namespace SP23.P03.Web.Features.Schedules;

public class SchedulesConfiguration : IEntityTypeConfiguration<Schedule>
{
    public void Configure(EntityTypeBuilder<Schedule> builder)
    {

        builder.HasKey(s => s.Id);
        builder
            .HasOne(s => s.Train)
            .WithMany(st => st.Schedules)
            .HasForeignKey(s => s.TrainsId)
            .OnDelete(DeleteBehavior.Restrict);


        builder
            .HasOne(s => s.ScheduledTrain)
            .WithMany(st => st.Schedules)
            .HasForeignKey(s => s.ScheduledTrainId)
            .OnDelete(DeleteBehavior.Restrict);


    }
}