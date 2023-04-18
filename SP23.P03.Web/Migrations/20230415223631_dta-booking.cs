using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class dtabooking : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "DepartureTime",
                table: "Schedule",
                type: "datetimeoffset",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "ArrivalTime",
                table: "Schedule",
                type: "datetimeoffset",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<int>(
                name: "AvailableSeats",
                table: "Schedule",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<byte[]>(
                name: "ReservedSeats",
                table: "Schedule",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvailableSeats",
                table: "Schedule");

            migrationBuilder.DropColumn(
                name: "ReservedSeats",
                table: "Schedule");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DepartureTime",
                table: "Schedule",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset");

            migrationBuilder.AlterColumn<DateTime>(
                name: "ArrivalTime",
                table: "Schedule",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset");
        }
    }
}
