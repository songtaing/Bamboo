using Bamboo.ReminderService.Core.Models;
using Bamboo.Shared.Interfaces;

namespace Bamboo.ReminderService.Core.Interfaces
{
    public interface IReminderRepository : IRepository<Reminder, int>
    {
    }
}
