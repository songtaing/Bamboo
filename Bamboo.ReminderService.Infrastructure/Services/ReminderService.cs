
using Bamboo.ReminderService.Core.Interfaces;
using Bamboo.ReminderService.Core.Models;
using Bamboo.Shared.Interfaces;
using Bamboo.Shared.Interfaces.Filters;

namespace Bamboo.ReminderService.Infrastructure.Services
{
    sealed class ReminderService(IReminderRepository reminderRepository) : IService<Reminder, int>
    {
        public async Task<Reminder?> AddAsync(Reminder item)
        {
            return await reminderRepository.AddAsync(item);
        }

        public Task<bool> AddRangeAsync(IList<Reminder> items)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await reminderRepository.DeleteAsync(id);
        }

        public async Task<Reminder[]> GetAllAsync()
        {
            return await reminderRepository.GetAllAsync();
        }

        public async Task<Reminder?> GetByIdAsync(int id)
        {
            return await reminderRepository.GetByIdAsync(id);
        }

        public async Task<IPayload<Reminder>> SearchAsync(IDataFilter filter)
        {
            return await reminderRepository.SearchAsync(filter);
        }

        public async Task<Reminder?> UpdateAsync(int id, Reminder item)
        {
            return await reminderRepository.UpdateAsync(id, item);
        }

        public Task<bool> UpdateRangeAsync(IList<Reminder> items)
        {
            throw new NotImplementedException();
        }
    }
}
