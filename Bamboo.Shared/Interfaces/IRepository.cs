
using Bamboo.Shared.Models;
using System.Linq.Expressions;

namespace Bamboo.Shared.Interfaces
{
    public interface IRepository<T, K>
    {
        Task<IPayload<T>> FindAsync(Expression<Func<T, bool>> predicate);
        Task<T?> AddAsync(T item);
        Task<DbSaveChangesResult> AddRangeAsync(IEnumerable<T> items);
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetByIdAsync(K id);
        Task<T?> UpdateAsync(T item);
        Task<DbSaveChangesResult> UpdateRangeAsync(IEnumerable<T> items);
        Task DeleteAsync(K id);
        Task DeleteAsync(T item);
        Task DeleteRangeAsync(Expression<Func<T, bool>> predicate);
    }
}
