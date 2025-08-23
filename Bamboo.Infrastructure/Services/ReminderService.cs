
using Bamboo.ReminderService.Core.Interfaces;
using Bamboo.ReminderService.Core.Models;
using Bamboo.Shared.Interfaces;
using Bamboo.Shared.Interfaces.Filters;

namespace Bamboo.ReminderService.Infrastructure.Services
{
    sealed class ReminderService : IService<Reminder, int>
    {
        private IReminderRepository _repo;

        public ReminderService(IReminderRepository reminderRepository)
        {
            _repo = reminderRepository;
        }

        public async Task<Reminder?> AddAsync(Reminder item)
        {
            return await _repo.AddAsync(item);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _repo.DeleteAsync(id);
        }

        public async Task<Reminder[]> GetAllAsync()
        {
            return await _repo.GetAllAsync();
        }

        public async Task<Reminder?> GetByIdAsync(int id)
        {
            return await _repo.GetByIdAsync(id);
        }

        public async Task<IPayload<Reminder>> SearchAsync(IDataFilter filter)
        {
            return await _repo.SearchAsync(filter);
        }

        public async Task<Reminder?> UpdateAsync(int id, Reminder item)
        {
            return await _repo.UpdateAsync(id, item);
        }
    }
}
