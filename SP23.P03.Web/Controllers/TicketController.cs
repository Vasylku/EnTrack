using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.ScheduledTrains;
using SP23.P03.Web.Features.Schedules;
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
    public IQueryable<TicketDto> GetAllStations( int? mycode)
    {
     
    
        var matchingTickets = tickets
            .Where(ticket => ticket.CheckCode == mycode)
            .Select(ticket => new TicketDto
            {
                
                Id = ticket.Id,
                CheckCode= ticket.CheckCode,
                TicketPrice = ticket.TicketPrice,
                StartStationName = ticket.StartStationName,
                EndStationName = ticket.EndStationName,
                DepartureTime = ticket.DepartureTime,
                ArrivalTime= ticket.ArrivalTime,
              BookedSeat = ticket.BookedSeat,
              
        
            });

        return matchingTickets;
    }
    [HttpPost]
  
    public ActionResult<TicketDetailsDto> CreateTicket( TicketDetailsDto dto)
    {
        var newTicket = new Ticket
        {
            CheckCode = dto.CheckCode,
            TicketPrice = dto.TicketPrice,
            StartStationName=dto.StartStationName, 
            EndStationName=dto.EndStationName,
    DepartureTime = dto.DepartureTime,
            ArrivalTime = dto.ArrivalTime,
            BookedSeat = string.Join(",", dto.BookedSeat),

        };

       
       tickets.Add(newTicket);
       dataContext.SaveChanges();

   
        var createdDto = new TicketDto
        {
            Id = newTicket.Id,
            CheckCode = newTicket.CheckCode,
            TicketPrice = newTicket.TicketPrice,
            StartStationName = dto.StartStationName,
            EndStationName = dto.EndStationName,
            DepartureTime = newTicket.DepartureTime,
            ArrivalTime = newTicket.ArrivalTime,
            BookedSeat = newTicket.BookedSeat,

        };

        return CreatedAtAction(nameof(GetTicketById), new { id = createdDto.Id }, createdDto);
    }
    [HttpGet]
    [Route("{id}")]
    public ActionResult<ScheduledTrainDto> GetTicketById(int id)
    {
        var result = GetTicketDtos(tickets.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    private static IQueryable<TicketDto> GetTicketDtos(IQueryable<Ticket> tickets)
    {
        return tickets
            .Select(x => new TicketDto
            {
                Id = x.Id,
              CheckCode =x.CheckCode,
       TicketPrice =x.TicketPrice,
                StartStationName = x.StartStationName,
                EndStationName = x.EndStationName,
                DepartureTime =x.DepartureTime,
    ArrivalTime = x.ArrivalTime,
      BookedSeat = x.BookedSeat
   
});
    }
}

