
using Bamboo.ReminderService.Core.Interfaces;
using Bamboo.ReminderService.Core.Models;
using Bamboo.ReminderService.Infrastructure.DbContexts;
using Bamboo.Shared.Interfaces;
using Bamboo.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace Bamboo.ReminderService.Infrastructure.Repositories
{
    public class ReminderRepository(BambooDbContext dbContext) : IReminderRepository
    {
        public async Task<Reminder?> AddAsync(Reminder item)
        {
            await dbContext.Reminders.AddAsync(item);
            await dbContext.SaveChangesAsync();

            return item;
        }

        public Task<bool> AddRangeAsync(IList<Reminder> items)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            Reminder? record = await dbContext.Reminders.FindAsync(id);
            if (record != null)
            {
                dbContext.Reminders.Remove(record);
                await dbContext.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<Reminder[]> GetAllAsync()
        {
            return await dbContext.Reminders.ToArrayAsync();
        }

        public async Task<Reminder?> GetByIdAsync(int id)
        {
            return await dbContext.Reminders.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IPayload<Reminder>> SearchAsync(IDataFilter filter)
        {
            var query = dbContext.Reminders.AsQueryable();
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
            Reminder? record = await dbContext.Reminders.FindAsync(id);

            if (record != null)
            {
                record.Id = item.Id;
                // todo: update fields
                await dbContext.SaveChangesAsync();
                return record;
            }

            return null;
        }

        public Task<bool> UpdateRangeAsync(IList<Reminder> items)
        {
            throw new NotImplementedException();
        }
    }
}
