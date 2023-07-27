using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Google.Docs.Clone.Repository.Data
{
    public class SQLiteDbContext : ApplicationDBContext
    {
        public SQLiteDbContext(IConfiguration configuration) : base(configuration)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(Configuration.GetConnectionString("SQLiteConnection"));
        }
    }
}