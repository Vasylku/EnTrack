namespace SP23.P03.Web.Features.Trains;
public class TrainDto
{
    public string Name { get; set; } = string.Empty;
    public int startStation_Id { get; set; }
    public int endStation_Id { get; set; }
    public int coach_Seats { get; set; }
    public int firstClass_Seats { get; set; }
    public int sleeper_Seats { get; set; }
    public int roomlet_Seats { get; set; }

}
