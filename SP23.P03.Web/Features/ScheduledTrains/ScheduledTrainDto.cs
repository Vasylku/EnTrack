﻿using SP23.P03.Web.Features.Schedules;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.ScheduledTrains
{
    public class ScheduledTrainDto
    {
        public int Id { get; set; }
        public int StartStationId { get; set; }
        public TrainStationDto StartStation { get; set; }
        public int EndStationId { get; set; }
        public TrainStationDto EndStation { get; set; }
        public float Distance { get; set; }
        public TimeSpan TravelTime { get; set; }
        public ICollection<ScheduleDto>? Schedules { get; set; }
    }
    public class ScheduledTrainCreateDto
    {
        public int Id { get; set; }
        public int StartStationId { get; set; }
        public int EndStationId { get; set; }
        public float Distance { get; set; }
        public TimeSpan TravelTime { get; set; }
      
    }
    public class ScheduledTrainSearchDto
    {
        public int Id { get; set; }
        public int StartStationId { get; set; }
        public TrainStationDto StartStation { get; set; }
        public int EndStationId { get; set; }
        public TrainStationDto EndStation { get; set; }
        public float Distance { get; set; }
        public TimeSpan TravelTime { get; set; }
        public ICollection<ScheduleSearchDto> Schedules { get; set; }
    }
}
