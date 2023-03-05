using System.Runtime.CompilerServices;

namespace SP23.P03.Web.Features.Authorization;

public class UserDto
{
    public int Id { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string firstName { get; set; } = string.Empty;
    public string lastName { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
    public string city { get; set; } = string.Empty;
    public int phoneNum { get; set; }
    public string Address { get;  set; } = string.Empty;
    public DateTime createdAt { get; set; }
    public DateTime createdBy { get; set; }
    public DateTime updatedAt { get; set; }
    public string[] Roles { get; set; } = Array.Empty<string>();
}