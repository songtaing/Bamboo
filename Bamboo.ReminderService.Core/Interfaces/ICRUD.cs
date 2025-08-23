using Bamboo.Core.Interfaces.Filters;

namespace Bamboo.Core.Interfaces
{
    public interface ICRUD<T, K>
    {
        Task<T[]> GetAllAsync();
        Task<T?> GetByIdAsync(K id);
        Task<IPayload<T>> SearchAsync(IDataFilter filter);
        Task<T?> AddAsync(T item);
        Task<T?> UpdateAsync(K id, T item);
        Task<bool> DeleteAsync(K id);
    }
}
