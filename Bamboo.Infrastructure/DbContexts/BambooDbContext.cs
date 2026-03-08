using Bamboo.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Bamboo.Infrastructure.DbContexts
{
    public class BambooDbContext : DbContext
    {
        public DbSet<Reminder> Reminders { get; set; }
    }
}
