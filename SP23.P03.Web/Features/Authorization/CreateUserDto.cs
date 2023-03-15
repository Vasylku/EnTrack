using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Authorization;

public class CreateUserDto
{
    [Required]
    public string UserName { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public string Email { get; set; }=string.Empty;

   
    public string[] Roles { get; set; } = Array.Empty<string>();
}