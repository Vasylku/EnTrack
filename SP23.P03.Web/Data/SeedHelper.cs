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
        await TrainsSchedule(dataContext);
        await SchedulesData(dataContext);
        /*await AddScheduledTrains(dataContext);
        await AddTrainsAsync(dataContext);

        await AddScheduledTrains(dataContext);
        await SeedtrainsSchedule(dataContext);*/

        await dataContext.SaveChangesAsync();

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
                    TrainClass = "Class A",
                    AvailableSeats = 168,
                    CoachSeats = 168,
                },
                new Train
                {
                    Name = "Siemens Charger 2.0",
                    TrainClass = "Class B",

                    AvailableSeats = 126,
                    CoachSeats = 84,
                    FirstClassSeats = 42
                },
                new Train
                {
                    Name = "Siemens Charger Express",
                    TrainClass = "Class C",
                    AvailableSeats = 104,
                    CoachSeats = 42,
                    FirstClassSeats = 62,
                },
                new Train
                {
                    Name = "Siemens Charger 7",
                    TrainClass = "Class D",

                    AvailableSeats = 98,
                    FirstClassSeats = 42,
                    SleeperSeats = 10,
                    RoomletSeats = 4
                },
                new Train
      {
        Name = "Entrack Charger",
        TrainClass = "Class A/2",
        AvailableSeats = 150,
        CoachSeats = 100,
        DinerCarts = 1,
        FirstClassSeats = 20,
        SleeperSeats = 20,
        RoomletSeats = 10
      },
      new Train
      {
        Name = "Entrack charger A/1",
        TrainClass = "Premium",
        AvailableSeats = 100,
        CoachSeats = 80,
        DinerCarts = 2,
        FirstClassSeats = 10,
        SleeperSeats = 10,
        RoomletSeats = 0
      },

        };

            await dataContext.AddRangeAsync(trains);
            await dataContext.SaveChangesAsync();
        }

    }
    private static async Task TrainsSchedule(DataContext dataContext)
    {
        var scheduledTrains = dataContext.Set<ScheduledTrain>();

        var trainst1 = dataContext.Set<TrainStation>().First(e => e.Id == 1);

        var trainst2 = dataContext.Set<TrainStation>().First(e => e.Id == 2);

        var trainst3 = dataContext.Set<TrainStation>().First(e => e.Id == 3);

        var trainst4 = dataContext.Set<TrainStation>().First(e => e.Id == 4);

        var trainst5 = dataContext.Set<TrainStation>().First(e => e.Id == 5);
        if (!await scheduledTrains.AnyAsync())
        {
            var schtrains = new List<ScheduledTrain>
                {

            new ScheduledTrain
            {
                StartStationId = trainst1.Id,
                EndStationId = trainst2.Id,

                Distance = 200,
                TravelTime = new TimeSpan(0, 2, 18),
            },
            new ScheduledTrain
            {
              StartStationId = trainst2.Id,
              EndStationId = trainst1.Id,

              Distance = 200,
              TravelTime = new TimeSpan(0, 2, 18),
      },
            new ScheduledTrain
            {
                StartStationId = trainst2.Id,
                EndStationId = trainst5.Id,
                Distance = 50,
                TravelTime= new TimeSpan(0,0,50),
            },
            new ScheduledTrain
            {
                StartStationId = trainst3.Id,
                EndStationId = trainst4.Id,
                Distance = 400,
                TravelTime= new TimeSpan(0,5,50),
            },
            new ScheduledTrain {
                StartStationId =trainst5.Id,
                EndStationId = trainst1.Id,
                Distance= 400,
                TravelTime = new TimeSpan(0,5,50),

            },
    };

            await dataContext.AddRangeAsync(schtrains);
            await dataContext.SaveChangesAsync();
        }



    }
    private static async Task SchedulesData(DataContext dataContext)
    {

        var schedultr1 = dataContext.Set<ScheduledTrain>().First(e => e.Id == 1);

        var schedultr2 = dataContext.Set<ScheduledTrain>().First(e => e.Id == 2);

        var schedultr3 =dataContext.Set<ScheduledTrain>().First(e => e.Id == 3);

        var schedultr4 = dataContext.Set<ScheduledTrain>().First(e => e.Id == 4);

        var tr1 =dataContext.Set<Train>().First(e => e.Id == 1);

        var tr2 = dataContext.Set<Train>().First(e => e.Id == 2);
        var tr3 =dataContext.Set<Train>().First(e => e.Id == 3);
        var tr4 = dataContext.Set<Train>().First(e => e.Id == 4);

        /*var schedultr1 = await dataContext.Set<ScheduledTrain>().SingleAsync(e => e.Id == 1);
        var schedultr2 = await dataContext.Set<ScheduledTrain>().SingleAsync(e => e.Id == 2);
        var schedultr3 = await dataContext.Set<ScheduledTrain>().SingleAsync(e => e.Id == 3);
        var schedultr4 = await dataContext.Set<ScheduledTrain>().SingleAsync(e => e.Id == 4);
        var tr1 = await dataContext.Set<Train>().SingleAsync(e => e.Id == 1);
        var tr2 = await dataContext.Set<Train>().SingleAsync(e => e.Id == 2);
        var tr3 = await dataContext.Set<Train>().SingleAsync(e => e.Id == 3);
        var tr4 = await dataContext.Set<Train>().SingleAsync(e => e.Id == 4);*/





        var schedulesData =  dataContext.Set<Schedule>();
        if (!await schedulesData.AnyAsync())
        {
            var schedules = new List<Schedule>
    {
      new Schedule
      {

        ScheduledTrainId =  schedultr1.Id,
        TrainsId = tr1.Id,
        DepartureTime = new DateTime(2023, 3, 20, 9,15,0),
        ArrivalTime =new DateTime(2023, 7, 20, 9,15,0),
      },
      new Schedule
      {
        ScheduledTrainId = schedultr2.Id,
        TrainsId = tr2.Id,
        DepartureTime = new DateTime(2023, 3, 12, 9,15,0),
        ArrivalTime = new DateTime(2023, 3, 15, 9,15,0),
      },
      new Schedule
      {
          ScheduledTrainId = schedultr4.Id,
          TrainsId = tr3.Id,
          DepartureTime = new DateTime(2023, 3, 20, 9,15,0),
          ArrivalTime = new DateTime(2023,3,21, 2,15,0),

    },   new Schedule
      {
          ScheduledTrainId = schedultr3.Id,
          TrainsId = tr4.Id,
          DepartureTime = new DateTime(2023, 3, 20, 9,15,0),
          ArrivalTime = new DateTime(2023,3,21, 2,15,0),

    },

    };

              await dataContext.AddRangeAsync(schedules);
              await dataContext.SaveChangesAsync();
        }
    }
}

    

