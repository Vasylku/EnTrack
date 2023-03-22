using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.TrainStations;

public class TrainStation
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty; //Name of the station
    public string Street { get; set; } = string.Empty; //Street of the station
    public string City { get; set; } = string.Empty; //City of the Station
    public string State { get; set; } = string.Empty; //State of the Station
    public string Country { get; set; } = string.Empty; //Country of the Station
    public string ZipCode { get; set; } = string.Empty; //Zipcode of the Station
    public int? ManagerId { get; set; } //Id for the Manager of the station
    public virtual User? Manager { get; set; }
}