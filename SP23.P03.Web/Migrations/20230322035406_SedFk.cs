using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class SedFk : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Payment_AspNetUsers_ManagerId",
                table: "Payment");

            migrationBuilder.DropIndex(
                name: "IX_Payment_ManagerId",
                table: "Payment");

            migrationBuilder.DropColumn(
                name: "ManagerId",
                table: "Payment");

            migrationBuilder.DropColumn(
                name: "user_Id",
                table: "Payment");

            migrationBuilder.RenameColumn(
                name: "cardProvider",
                table: "Payment",
                newName: "CardProvider");

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
                    TrainClass = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    AvailableSeats = table.Column<int>(type: "int", nullable: true),
                    DinerCarts = table.Column<int>(type: "int", nullable: true),
                    CoachSeats = table.Column<int>(type: "int", nullable: true),
                    FirstClassSeats = table.Column<int>(type: "int", nullable: true),
                    SleeperSeats = table.Column<int>(type: "int", nullable: true),
                    RoomletSeats = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Train", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Schedule",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduledTrainId = table.Column<int>(type: "int", nullable: false),
                    TrainsId = table.Column<int>(type: "int", nullable: false),
                    DepartureTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ArrivalTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedule", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Schedule_ScheduledTrain_ScheduledTrainId",
                        column: x => x.ScheduledTrainId,
                        principalTable: "ScheduledTrain",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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
                name: "IX_Schedule_TrainsId",
                table: "Schedule",
                column: "TrainsId");

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

            migrationBuilder.RenameColumn(
                name: "CardProvider",
                table: "Payment",
                newName: "cardProvider");

            migrationBuilder.AddColumn<int>(
                name: "ManagerId",
                table: "Payment",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "user_Id",
                table: "Payment",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Payment_ManagerId",
                table: "Payment",
                column: "ManagerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Payment_AspNetUsers_ManagerId",
                table: "Payment",
                column: "ManagerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
