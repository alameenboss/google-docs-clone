using Google.Docs.Clone.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Google.Docs.Clone.Repository.Data
{
    public abstract class ApplicationDBContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public ApplicationDBContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public DbSet<Document> Documents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}