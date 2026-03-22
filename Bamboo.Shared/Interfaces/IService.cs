namespace Bamboo.Shared.Interfaces
{
    public interface IService<T, K>
    {
        Task<IPayload<T>> FindAsync(IDataFilter filter);
        Task<T?> AddAsync(T item);
        Task<bool> AddRangeAsync(IEnumerable<T> items);
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetByIdAsync(K id);
        Task<T?> UpdateAsync(T item);
        Task<bool> UpdateRangeAsync(IEnumerable<T> items);
        Task DeleteAsync(K id);
        Task DeleteAsync(T item);
        Task DeleteRangeAsync(IEnumerable<K> ids);
    }
}
