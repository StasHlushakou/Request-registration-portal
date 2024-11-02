using Microsoft.EntityFrameworkCore;
using RequestPortal.Domain.Entities;
using RequestPortal.Infrastructure.Entities;

namespace RequestPortal.Persistence.Context
{
    public class AppDbContext : DbContext
    {

        public DbSet<User> User { get; set; }
        public DbSet<Request> Request { get; set; }
        public DbSet<Token> Token { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {}
        
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }

    }
}
