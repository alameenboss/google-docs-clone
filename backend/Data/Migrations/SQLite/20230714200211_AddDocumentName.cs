using Microsoft.EntityFrameworkCore.Migrations;

namespace Google.Docs.Clone.API.Data.Migrations.SQLite
{
    public partial class AddDocumentName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DocumentName",
                table: "Documents",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DocumentName",
                table: "Documents");
        }
    }
}
