using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Tickets;

namespace SP23.P03.Web.Controllers;

[Route("api/tickets")]
[ApiController]
public class TicketsController : ControllerBase
{
    private readonly DbSet<Ticket> tickets;
    private readonly DataContext dataContext;

    public TicketsController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        tickets = dataContext.Set<Ticket>();
    }

    [HttpGet]
    [Authorize(Roles = RoleNames.Admin)]
    public IQueryable<TicketDto> GetAllStations()
    {
        return GetTicketDtos(tickets);
    }

    [HttpGet]
    [Route("{id}")]
    [Authorize]
    public ActionResult<TicketDto> GetStationById(int id)
    {
        var result = GetTicketDtos(tickets.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult<TicketDto> CreateStation(TicketDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var ticket = new Ticket
        {
            user_Id = dto.user_Id,
            train_Id = dto.train_Id,
            seatType = dto.seatType,
            ticketPrice = dto.ticketPrice,
            bookingDate = dto.bookingDate,
            is_Cancelled = dto.is_Cancelled,

        };
        tickets.Add(ticket);

        dataContext.SaveChanges();

        dto.Id = ticket.Id;

        return CreatedAtAction(nameof(GetStationById), new { id = dto.Id }, dto);
    }

    [HttpPut]
    [Route("{id}")]
    [Authorize]
    public ActionResult<TicketDto> UpdateStation(int id, TicketDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var ticket = tickets.FirstOrDefault(x => x.Id == id);
        if (ticket == null)
        {
            return NotFound();
        }

        ticket.user_Id = dto.user_Id;
        ticket.train_Id = dto.train_Id;
        ticket.seatType = dto.seatType;
        ticket.ticketPrice = dto.ticketPrice;
        ticket.bookingDate = dto.bookingDate;
        ticket.is_Cancelled = dto.is_Cancelled;

        if (User.IsInRole(RoleNames.Admin))
        {
            ticket.ManagerId = dto.ManagerId;
        }

        dataContext.SaveChanges();

        dto.Id = ticket.Id;

        return Ok(dto);
    }

    [HttpDelete]
    [Route("{id}")]
    [Authorize]
    public ActionResult DeleteStation(int id)
    {
        var ticket = tickets.FirstOrDefault(x => x.Id == id);
        if (ticket == null)
        {
            return NotFound();
        }

        if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != ticket.ManagerId)
        {
            return Forbid();
        }

        tickets.Remove(ticket);

        dataContext.SaveChanges();

        return Ok();
    }

    private bool IsInvalid(TicketDto dto)
    {
        return InvalidManagerId(dto.ManagerId);
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

    private static IQueryable<TicketDto> GetTicketDtos(IQueryable<Ticket> tickets)
    {
        return tickets
            .Select(x => new TicketDto
            {
                Id = x.Id,
                user_Id = x.user_Id,
                train_Id = x.train_Id,
                seatType = x.seatType,
                ticketPrice = x.ticketPrice,
                bookingDate = x.bookingDate,
                is_Cancelled = x.is_Cancelled,
                ManagerId = x.ManagerId,
            });
    }
}