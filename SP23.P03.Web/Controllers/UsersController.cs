using System.Transactions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Controllers;

[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserManager<User> userManager;

    public UsersController(UserManager<User> userManager)
    {
        this.userManager = userManager;
    }

    [HttpPost]
    public async Task<ActionResult<UserDto>> Create(CreateUserDto dto)
    {
        using var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);

        var newUser = new User
        {
            UserName = dto.UserName,
            Email = dto.Email
        };
        var createResult = await userManager.CreateAsync(newUser, dto.Password);
        if (!createResult.Succeeded)
        {
            foreach (var error in createResult.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
            return BadRequest(ModelState);
        }

        try
        {
            var roleResult = await userManager.AddToRolesAsync(newUser, new List<string> { "user" });
            if (!roleResult.Succeeded)
            {
                foreach (var error in roleResult.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
                return BadRequest(ModelState);
            }
        }
        catch (InvalidOperationException e) when (e.Message.StartsWith("Role") && e.Message.EndsWith("does not exist."))
        {
            ModelState.AddModelError(string.Empty, e.Message);
            return BadRequest(ModelState);
        }

        transaction.Complete();

        return Ok(new UserDto
        {
            Id = newUser.Id,
            Roles = dto.Roles,
            UserName = newUser.UserName,
            Email = newUser.Email,
        });
    }

}
            // Uncomment the following lines if you want to automatically sign the user in after registration
            //var signInResult = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
            //if (signInResult.Succeeded)
            //{
            //    return Ok();
            //}

           
