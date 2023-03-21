using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ScheduledTrain",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartStationId = table.Column<int>(type: "int", nullable: false),
                    EndStationId = table.Column<int>(type: "int", nullable: false),
                    Distance = table.Column<float>(type: "real", nullable: false),
                    TravelTime = table.Column<TimeSpan>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ScheduledTrain", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ScheduledTrain_TrainStation_EndStationId",
                        column: x => x.EndStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ScheduledTrain_TrainStation_StartStationId",
                        column: x => x.StartStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Train",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    trainClass = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    availableSeats = table.Column<int>(type: "int", nullable: true),
                    dinerCarts = table.Column<int>(type: "int", nullable: true),
                    coachSeats = table.Column<int>(type: "int", nullable: true),
                    firstClassSeats = table.Column<int>(type: "int", nullable: true),
                    sleeperSeats = table.Column<int>(type: "int", nullable: true),
                    roomletSeats = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Train", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Schedule",
                columns: table => new
                {
                    ScheduledTrainId = table.Column<int>(type: "int", nullable: false),
                    TrainsId = table.Column<int>(type: "int", nullable: false),
                    DepartureTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ArrivalTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TrainId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedule", x => new { x.TrainsId, x.ScheduledTrainId });
                    table.ForeignKey(
                        name: "FK_Schedule_ScheduledTrain_ScheduledTrainId",
                        column: x => x.ScheduledTrainId,
                        principalTable: "ScheduledTrain",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Schedule_Train_TrainId",
                        column: x => x.TrainId,
                        principalTable: "Train",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Schedule_Train_TrainsId",
                        column: x => x.TrainsId,
                        principalTable: "Train",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Schedule_ScheduledTrainId",
                table: "Schedule",
                column: "ScheduledTrainId");

            migrationBuilder.CreateIndex(
                name: "IX_Schedule_TrainId",
                table: "Schedule",
                column: "TrainId");

            migrationBuilder.CreateIndex(
                name: "IX_ScheduledTrain_EndStationId",
                table: "ScheduledTrain",
                column: "EndStationId");

            migrationBuilder.CreateIndex(
                name: "IX_ScheduledTrain_StartStationId",
                table: "ScheduledTrain",
                column: "StartStationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Schedule");

            migrationBuilder.DropTable(
                name: "ScheduledTrain");

            migrationBuilder.DropTable(
                name: "Train");
        }
    }
}
