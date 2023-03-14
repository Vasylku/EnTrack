using Microsoft.AspNetCore.Identity;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.Train_Maintenance;
using SP23.P03.Web.Features.ScheduledTrains;

namespace SP23.P03.Web.Features.Authorization;

public class User : IdentityUser<int>
{
    public virtual ICollection<UserRole> Roles { get; set; } = new List<UserRole>();
    public virtual ICollection<TrainStation> ManageStations { get; set; } = new List<TrainStation>();
    public virtual ICollection<Train> ManageTrains { get; set; } = new List<Train>();
    public virtual ICollection<TrainMaintenance> ManageMaintenance { get; set; } = new List<TrainMaintenance>();
    public virtual ICollection<ScheduledTrain> ManageRoutes { get; set; } = new List<ScheduledTrain>();
}