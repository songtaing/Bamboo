
using Bamboo.ReminderService.Core.Interfaces;
using Bamboo.ReminderService.Core.Models;
using Bamboo.ReminderService.Infrastructure.DbContexts;
using Bamboo.Shared.Interfaces.Filters;
using Bamboo.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace Bamboo.ReminderService.Infrastructure.Repositories
{
    public class ReminderRepository : IReminderRepository
    {
        private BambooDbContext _dbContext;

        public ReminderRepository(BambooDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Reminder?> AddAsync(Reminder item)
        {
            await _dbContext.Reminders.AddAsync(item);
            await _dbContext.SaveChangesAsync();

            return item;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            Reminder? record = await _dbContext.Reminders.FindAsync(id);
            if (record != null)
            {
                _dbContext.Reminders.Remove(record);
                await _dbContext.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<Reminder[]> GetAllAsync()
        {
            return await _dbContext.Reminders.ToArrayAsync();
        }

        public async Task<Reminder?> GetByIdAsync(int id)
        {
            return await _dbContext.Reminders.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IPayload<Reminder>> SearchAsync(IDataFilter filter)
        {
            var query = _dbContext.Reminders.AsQueryable();
            int skip = (filter.PageIndex * filter.PageSize) + 1;

            var results = await query.Select(x => new
            {
                Reminder = new Reminder { Id = x.Id },
                TotalCount = query.Count()
            })
            .Skip(skip).Take(filter.PageSize)
            .ToArrayAsync();

            int totalCount = results.FirstOrDefault()?.TotalCount ?? query.Count();
            Reminder[] data = await query.ToArrayAsync();

            return new Payload<Reminder>(data, totalCount);
        }

        public async Task<Reminder?> UpdateAsync(int id, Reminder item)
        {
            Reminder? record = await _dbContext.Reminders.FindAsync(id);

            if (record != null)
            {
                record.Id = item.Id;
                // todo: update fields
                await _dbContext.SaveChangesAsync();
                return record;
            }

            return null;
        }
    }
}
