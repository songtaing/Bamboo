using Bamboo.Shared.Interfaces;
using Microsoft.Extensions.Logging;

namespace Bamboo.Core.Services
{
    internal abstract class CommonService<T, K>(ILogger logger, IRepository<T, K> repository) : IService<T, K>
    {
        public virtual async Task<T?> AddAsync(T item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));

            return await repository.AddAsync(item);
        }

        public virtual async Task<bool> AddRangeAsync(IEnumerable<T> items)
        {
            if (items == null) throw new ArgumentNullException(nameof(items));

            var results = await repository.AddRangeAsync(items);
            return results.resultCount == items.Count();
        }

        public virtual async Task DeleteAsync(K id)
        {
            if (id == null) throw new ArgumentNullException(nameof(id));

            await repository.DeleteAsync(id);
        }

        public virtual async Task DeleteAsync(T item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));

            await repository.DeleteAsync(item);
        }

        public virtual async Task DeleteRangeAsync(IEnumerable<K> ids)
        {
            if (ids == null || !ids.Any()) throw new ArgumentNullException(nameof(ids));

            throw new NotImplementedException();
        }

        public virtual async Task<IPayload<T>> FindAsync(IDataFilter filter)
        {
            if (filter == null) throw new ArgumentNullException(nameof(filter));

            throw new NotImplementedException();
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await repository.GetAllAsync();
        }

        public virtual Task<T?> GetByIdAsync(K id)
        {
            throw new NotImplementedException();
        }

        public virtual Task<T?> UpdateAsync(T item)
        {
            throw new NotImplementedException();
        }

        public virtual Task<bool> UpdateRangeAsync(IEnumerable<T> items)
        {
            throw new NotImplementedException();
        }
    }
}
