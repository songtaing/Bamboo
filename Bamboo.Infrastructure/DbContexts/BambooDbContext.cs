
using Bamboo.ReminderService.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Bamboo.ReminderService.Infrastructure.DbContexts
{
    public class BambooDbContext : DbContext
    {
        public DbSet<Reminder> Reminders { get; set; }
    }
}
