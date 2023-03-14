//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata.Builders;

//namespace SP23.P03.Web.Features.ScheduledTrains
//{
//    public class ScheduledTrainConfiguration : IEntityTypeConfiguration<ScheduledTrain>
//    {
//        public void Configure(EntityTypeBuilder<ScheduledTrain> builder)
//        {
//            builder.Property(x => x.startStation_Id)
//                .IsRequired();

//            builder.Property(x => x.endStation_Id)
//                .IsRequired();

//            builder.Property(x => x.distance)
//                .IsRequired();

//            builder.Property(x => x.travel_Time)
//                .IsRequired();

//            builder.Property(x => x.train_Id)
//                .IsRequired();

//            builder.Property(x => x.departureDate)
//                .IsRequired();

//            builder.Property(x => x.arrivalDate)
//                .IsRequired();
//        }
//    }
//}
