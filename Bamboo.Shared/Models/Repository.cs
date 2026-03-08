using Bamboo.Shared.Interfaces;

namespace Bamboo.Shared.Models
{
    public class Repository<T, K> : IRepository<T, K>
    {
        public Task<T?> AddAsync(T item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddRangeAsync(IList<T> items)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(K id)
        {
            throw new NotImplementedException();
        }

        public Task<T[]> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<T?> GetByIdAsync(K id)
        {
            throw new NotImplementedException();
        }

        public Task<IPayload<T>> SearchAsync(IDataFilter filter)
        {
            throw new NotImplementedException();
        }

        public Task<T?> UpdateAsync(K id, T item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRangeAsync(IList<T> items)
        {
            throw new NotImplementedException();
        }
    }
}
