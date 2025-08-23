using Bamboo.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Bamboo.Data.DbContexts
{
    public class BambooDbContext : DbContext
    {
        public DbSet<Reminder> Reminders { get; set; }
    }
}
