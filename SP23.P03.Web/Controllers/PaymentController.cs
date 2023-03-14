using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Payments;

namespace SP23.P03.Web.Controllers;

[Route("api/payments")]
[ApiController]
public class PaymentsController : ControllerBase
{
    private readonly DbSet<Payment> payments;
    private readonly DataContext dataContext;

    public PaymentsController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        payments = dataContext.Set<Payment>();
    }

    [HttpGet]
    [Authorize(Roles = RoleNames.Admin)]
    public IQueryable<PaymentDto> GetAllPayments()
    {
        return GetPaymentDtos(payments);
    }

    [HttpGet]
    [Route("{id}")]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult<PaymentDto> GetPaymentById(int id)
    {
        var result = GetPaymentDtos(payments.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    [HttpPost]
    public ActionResult<PaymentDto> CreatePayment(PaymentDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var payment = new Payment
        {
            cardProvider = dto.cardProvider
        };

        payments.Add(payment);

        dataContext.SaveChanges();

        dto.Id = payment.Id;

        return CreatedAtAction(nameof(GetPaymentById), new { id = dto.Id }, dto);
    }

    [HttpPut]
    [Route("{id}")]
    [Authorize]
    public ActionResult<PaymentDto> UpdatePayment(int id, PaymentDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var payment = payments.FirstOrDefault(x => x.Id == id);
        if (payment == null)
        {
            return NotFound();
        }

        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != payment.ManagerId)
        {
            return Forbid();
        }

        payment.cardProvider = dto.cardProvider;
        if (User.IsInRole(RoleNames.Admin))
        {
            payment.ManagerId = dto.ManagerId;
        }

        dataContext.SaveChanges();

        dto.Id = payment.Id;

        return Ok(dto);
    }

    [HttpDelete]
    [Route("{id}")]
    [Authorize]
    public ActionResult DeleteStation(int id)
    {
        var station = payments.FirstOrDefault(x => x.Id == id);
        if (station == null)
        {
            return NotFound();
        }

        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != station.ManagerId)
        {
            return Forbid();
        }

        payments.Remove(station);

        dataContext.SaveChanges();

        return Ok();
    }

    private bool IsInvalid(PaymentDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.cardProvider) ||
               dto.cardProvider.Length > 120 ||
               InvalidManagerId(dto.ManagerId);
    }

    private bool InvalidManagerId(int? managerId)
    {
        if (managerId == null)
        {
            return false;
        }

        if (!User.IsInRole(RoleNames.Admin))
        {
            // only admins can change manager ids anyway
            return false;
        }
        return !dataContext.Set<User>().Any(x => x.Id == managerId);
    }

    private static IQueryable<PaymentDto> GetPaymentDtos(IQueryable<Payment> payments)
    {
        return payments
            .Select(x => new PaymentDto
            {
                Id = x.Id,
                user_Id = x.user_Id,
                cardProvider = x.cardProvider,
                ManagerId = x.ManagerId,
            });
    }
}