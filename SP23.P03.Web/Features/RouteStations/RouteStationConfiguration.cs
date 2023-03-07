using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.RouteStations
{
    public class RouteStationConfiguration : IEntityTypeConfiguration<RouteStation>
    {
        public void Configure(EntityTypeBuilder<RouteStation> builder)
        {
            builder.Property(x => x.RouteId)
                .IsRequired();

            builder.Property(x => x.StationId)
                .IsRequired();

            builder.Property(x => x.ArrivalTime)
                .IsRequired();

            builder.Property(x => x.DepartureTime)
                .IsRequired();

            builder.HasOne(x => x.Manager)
                .WithMany(x => x.ManageRouteStations)
                .HasForeignKey(x => x.ManagerId);
        }
    }
}
