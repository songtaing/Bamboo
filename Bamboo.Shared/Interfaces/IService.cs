namespace Bamboo.Shared.Interfaces
{
    public interface IService<T, Key>
    {
        Task<IPayload<T>> FindAsync(IDataFilter filter);
        Task<T?> AddAsync(T item);
        Task<bool> AddRangeAsync(IEnumerable<T> items);
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetByIdAsync(Key id);
        Task<T?> UpdateAsync(T item);
        Task<bool> UpdateRangeAsync(IEnumerable<T> items);
        Task<bool> DeleteAsync(Key id);
    }
}
