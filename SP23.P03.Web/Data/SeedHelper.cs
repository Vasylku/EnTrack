using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.ScheduledTrains;
using System.Collections.Generic;
using SP23.P03.Web.Features.Schedules;

namespace SP23.P03.Web.Data;

public static class SeedHelper
{
    public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
    {
        var dataContext = serviceProvider.GetRequiredService<DataContext>();

        await dataContext.Database.MigrateAsync();

        await AddRoles(serviceProvider);
        await AddUsers(serviceProvider);
        await AddTrainStation(dataContext);
        await SeedAllData(dataContext);
        // await AddScheduledTrains(dataContext);
        // await AddTrainsAsync(dataContext);

        // await AddScheduledTrains(dataContext);
        // await SeedtrainsSchedule(dataContext);

        //   await dataContext.SaveChangesAsync();

    }

    private static async Task AddUsers(IServiceProvider serviceProvider)
    {
        const string defaultPassword = "Password123!";
        var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

        if (userManager.Users.Any())
        {
            return;
        }

        var adminUser = new User
        {
            UserName = "galkadi"
        };
        await userManager.CreateAsync(adminUser, defaultPassword);
        await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

        var bob = new User
        {
            UserName = "bob"
        };
        await userManager.CreateAsync(bob, defaultPassword);
        await userManager.AddToRoleAsync(bob, RoleNames.User);

        var sue = new User
        {
            UserName = "sue"
        };
        await userManager.CreateAsync(sue, defaultPassword);
        await userManager.AddToRoleAsync(sue, RoleNames.User);
    }

    private static async Task AddRoles(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
        if (roleManager.Roles.Any())
        {
            return;
        }
        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.Admin
        });

        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.User
        });
    }

    private static async Task AddTrainStation(DataContext dataContext)
    {
        var trainStations = dataContext.Set<TrainStation>();

        if (await trainStations.AnyAsync())
        {
            return;
        }
        var trainsSeedStations = new[]
    {

  new TrainStation
  {
    Name = "Dallas",
    Street = "456 Main St",
    City = "Dallas",
    State = "TX",
    Country = "USA",
    ZipCode = "75201"
  },
  new TrainStation
  {
    Name = "Hammond",
    Street = "789 Main St",
    City = "Hammond",
    State = "IN",
    Country = "USA",
    ZipCode = "46324"
  },
  new TrainStation
  {
    Name = "Gulfport",
    Street = "101 Main St",
    City = "Gulfport",
    State = "MS",
    Country = "USA",
    ZipCode = "39501"
  },
  new TrainStation
  {
    Name = "Jackson",
    Street = "202 Main St",
    City = "Jackson",
    State = "MS",
    Country = "USA",
    ZipCode = "39201"
  },
  new TrainStation
{
  Name = "New Orleans",
  Street = "303 Canal St",
  City = "New Orleans",
  State = "LA",
  Country = "USA",
  ZipCode = "70130"
},
new TrainStation
{
  Name = "Baton Rouge",
  Street = "404 Main St",
  City = "Baton Rouge",
  State = "LA",
  Country = "USA",
  ZipCode = "70802"
},
new TrainStation
{
  Name = "Shreveport",
  Street = "505 Broadway Ave",
  City = "Shreveport",
  State = "LA",
  Country = "USA",
  ZipCode = "71105"
},
new TrainStation
{
  Name = "Austin",
  Street = "606 Congress Ave",
  City = "Austin",
  State = "TX",
  Country = "USA",
  ZipCode = "78701"
},
new TrainStation
{
  Name = "San Antonio",
  Street = "707 Alamo St",
  City = "San Antonio",
  State = "TX",
  Country = "USA",
  ZipCode = "78205"
},
new TrainStation
{
  Name = "Houston",
  Street = "902 Washington Ave",
  City = "Houston",
  State = "TX",
  Country = "USA",
  ZipCode = "77002"
},
new TrainStation
{
  Name = "Biloxi",
  Street = "100 Reynoir St",
  City = "Biloxi",
  State = "MS",
  Country = "USA",
  ZipCode = "39530"
},
new TrainStation
{
  Name = "Hattiesburg",
  Street = "200 N Front St",
  City = "Hattiesburg",
  State = "MS",
  Country = "USA",
  ZipCode = "39401"
}
    };
        foreach (var trainStation in trainsSeedStations)
        {
            dataContext.Set<TrainStation>().Add(trainStation);
        }
        await dataContext.SaveChangesAsync();

    }

    private static async Task SeedAllData(DataContext dataContext)
    {
        var train = dataContext.Set<Train>();

        if (!await train.AnyAsync())
        {
            var trains = new List<Train>
    {
    
       new Train
                {
                   Name = "Siemens Charger 11",
                    trainClass = "Class A",             
                    availableSeats = 168,
                    coachSeats = 168,
                },
                new Train
                {
                    Name = "Siemens Charger 2.0",
                    trainClass = "Class B",
                 
                    availableSeats = 126,
                    coachSeats = 84,
                    firstClassSeats = 42
                },
                new Train
                {
                    Name = "Siemens Charger Express",
                    trainClass = "Class C",             
                    availableSeats = 104,
                    coachSeats = 42,
                    firstClassSeats = 62,
                },
                new Train
                {
                    Name = "Siemens Charger 7",
                    trainClass = "Class D",
                   
                    availableSeats = 98,
                    firstClassSeats = 42,
                    sleeperSeats = 10,
                    roomletSeats = 4
                }, 
                new Train
      {
        Name = "Entrack Charger",
        trainClass = "Class A/2",
        availableSeats = 150,
        coachSeats = 100,
        dinerCarts = 1,
        firstClassSeats = 20,
        sleeperSeats = 20,
        roomletSeats = 10
      },
      new Train
      {
        Name = "Entrack charger A/1",
        trainClass = "Premium",
        availableSeats = 100,
        coachSeats = 80,
        dinerCarts = 2,
        firstClassSeats = 10,
        sleeperSeats = 10,
        roomletSeats = 0
      },

        };

            await dataContext.AddRangeAsync(trains);
            await dataContext.SaveChangesAsync();
        }
    //    var scheduledTrains = dataContext.Set<ScheduledTrain>();

    //    if (!await scheduledTrains.AnyAsync())
    //    {
    //        var scheduled = new List<ScheduledTrain>
    //{
    //  new ScheduledTrain
    //  {
    //    StartStationId = 1,
    //    EndStationId = 2,

    //    Distance = 200,
    //    TravelTime = new TimeSpan(2023, 3, 18, 2, 0, 0),
    //  },
    //  new ScheduledTrain
    //  {
    //    StartStationId = 2,
    //    EndStationId = 1,

    //    Distance = 200,
    //    TravelTime = new TimeSpan(2023, 3, 18, 2, 0, 0),
    //  }
    //};

    //        await dataContext.AddRangeAsync(scheduledTrains);
    //        await dataContext.SaveChangesAsync();
    //    }
    //    var trainSchedule = dataContext.Set<Schedule>();
    //    if (!await trainSchedule.AnyAsync())
    //    {
    //        var schedules = new List<Schedule>
    //{
    //  new Schedule
    //  {

    //    ScheduledTrainId = 1,
    //    TrainsId = 1,
    //    DepartureTime = DateTime.UtcNow.AddHours(1),
    //    ArrivalTime = DateTime.UtcNow.AddHours(3)
    //  },
    //  new Schedule
    //  {
    //    ScheduledTrainId = 2,
    //    TrainsId = 2,
    //    DepartureTime = DateTime.UtcNow.AddHours(4),
    //    ArrivalTime = DateTime.UtcNow.AddHours(6)
    //  }
    //};

    //        await dataContext.AddRangeAsync(schedules);
    //        await dataContext.SaveChangesAsync();
    //    }
    }




}