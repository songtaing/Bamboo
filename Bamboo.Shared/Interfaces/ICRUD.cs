
using Bamboo.Shared.Interfaces;
using Bamboo.Shared.Interfaces.Filters;

namespace Bamboo.Shared.Interfaces
{
    public interface ICRUD<T, K>
    {
        
        Task<IPayload<T>> SearchAsync(IDataFilter filter);
        Task<T?> AddAsync(T item);
        Task<bool> AddRangeAsync(IList<T> items);
        Task<T[]> GetAllAsync();
        Task<T?> GetByIdAsync(K id);
        Task<T?> UpdateAsync(K id, T item);
        Task<bool> UpdateRangeAsync(IList<T> items);
        Task<bool> DeleteAsync(K id);
    }
}
