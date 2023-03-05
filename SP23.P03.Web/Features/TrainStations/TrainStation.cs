using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.TrainStations;

public class TrainStation
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty; //Name of the station
    public string Address { get; set; } = string.Empty; //Address of the station
    public int? ManagerId { get; set; } //Id for the Manager of the station
    public virtual User? Manager { get; set; }
}