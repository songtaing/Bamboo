using Bamboo.Core.Interfaces.Filters;

namespace Bamboo.Core.Interfaces
{
    public interface IBaseCRUD<T, KeyType>
    {
        Task<T[]> GetAllAsync();
        Task<T?> GetByIdAsync(KeyType id);
        Task<IPayload<T>> SearchAsync(IDataFilter filter);
        Task<T?> AddAsync(T item);
        Task<T?> UpdateAsync(KeyType id, T item);
        Task<bool> DeleteAsync(KeyType id);
    }
}
