using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Routes
{
    public class RouteConfiguration : IEntityTypeConfiguration<Route_1>
    {
        public void Configure(EntityTypeBuilder<Route_1> builder)
        {
            builder.Property(x => x.startStation_Id)
                .IsRequired();

            builder.Property(x => x.endStation_Id)
                .IsRequired();

            builder.Property(x => x.distance)
                .IsRequired();

            builder.Property(x => x.travel_Time)
                .IsRequired();

            builder.HasOne(x => x.Manager)
                .WithMany(x => x.ManageRoutes)
                .HasForeignKey(x => x.ManagerId);
        }
    }
}
