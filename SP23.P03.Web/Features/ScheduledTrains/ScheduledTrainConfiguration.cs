using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SP23.P03.Web.Features.ScheduledTrains;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;



public class ScheduledTrainConfiguration : IEntityTypeConfiguration<ScheduledTrain>
{
    public void Configure(EntityTypeBuilder<ScheduledTrain> builder)
    {
        builder.HasKey(st => st.Id);


        builder.Property(st => st.Distance).IsRequired();
        builder.Property(st => st.TravelTime).IsRequired();

        builder.HasOne(st => st.StartStation)
            .WithMany()
            .HasForeignKey(st => st.StartStationId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(st => st.EndStation)
            .WithMany()
            .HasForeignKey(st => st.EndStationId)
            .OnDelete(DeleteBehavior.Restrict);

    }

}
