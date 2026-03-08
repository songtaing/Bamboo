using Bamboo.Shared.Interfaces;
using Bamboo.Shared.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Bamboo.Infrastructure.Repositories
{
    public class Repository<T, K> : IRepository<T, K> where T : BaseEntity
    {
        private DbContext _dbContext;
        private DbSet<T> _dbSet;

        public Repository(DbContext context)
        {
            _dbContext = context ?? throw new ArgumentNullException(nameof(context));
            _dbSet = _dbContext.Set<T>();
        }

        public async Task<T?> AddAsync(T item)
        {
            await _dbSet.AddAsync(item);
            await _dbContext.SaveChangesAsync();
            return item;
        }

        public async Task<DbSaveChangesResult> AddRangeAsync(IEnumerable<T> items)
        {
            await _dbSet.AddRangeAsync(items);
            return await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(K id)
        {
            if (id == null) throw new ArgumentNullException(nameof(id));

            var entity = await GetByIdAsync(id);
            if (entity == null) throw new KeyNotFoundException($"Entity with ID '{id}' not found.");

            _dbSet.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(T item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));

            _dbSet.Remove(item);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteRangeAsync(Expression<Func<T, bool>> predicate)
        {
            if (predicate == null) throw new ArgumentNullException(nameof(predicate));

            await _dbSet.Where(predicate).ExecuteDeleteAsync();
        }

        public async Task<IPayload<T>> FindAsync(Expression<Func<T, bool>> predicate)
        {
            var query = _dbSet.Where(predicate);

            var totalCount = await query.CountAsync();
            return new Payload<T>(await query.ToArrayAsync(), 0);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.AsNoTracking().ToArrayAsync();
        }

        public async Task<T?> GetByIdAsync(K id)
        {
            if (id == null) throw new ArgumentNullException(nameof(id));

            return await _dbSet.FindAsync(id);
        }

        public async Task<T?> UpdateAsync(T item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));

            var entry = _dbContext.Entry(item);
            if ((entry.State == EntityState.Detached))
            {
                _dbSet.Attach(item);
            }

            entry.State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                throw new InvalidOperationException(ex.Message, ex);
            }

            return item;
        }

        public async Task<bool> UpdateRangeAsync(IEnumerable<T> items)
        {
            throw new NotImplementedException();
        }
    }
}
