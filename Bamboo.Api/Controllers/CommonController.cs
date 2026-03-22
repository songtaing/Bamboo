using Bamboo.Shared.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class CommonController<T, K>(ILogger logger, IService<T, K> service) : ControllerBase
    {
        [HttpPost("search")]
        public virtual async Task<IActionResult> FindAsync(IDataFilter filter) => Ok(await service.FindAsync(filter));
        public virtual async Task<IActionResult> AddAsync(T item) => Ok(await service.AddAsync(item));
        public virtual async Task<IActionResult> AddRangeAsync(IEnumerable<T> items) => Ok(await service.AddRangeAsync(items));
        public virtual async Task<IActionResult> GetAllAsync() => Ok(await service.GetAllAsync());
        public virtual async Task<IActionResult> GetByIdAsync(K id) => Ok(await service.GetByIdAsync(id));
        public virtual async Task<IActionResult> UpdateAsync(T item) => Ok(await service.UpdateAsync(item));
        public virtual async Task<IActionResult> UpdateRangeAsync(IEnumerable<T> items) => Ok(await service.UpdateRangeAsync(items));
        public virtual async Task<IActionResult> DeleteAsync(K id)
        {
            await service.DeleteAsync(id);
            return Ok();
        }
        public virtual async Task<IActionResult> DeleteAsync(T item)
        {
            await service.DeleteAsync(item);
            return Ok();
        }
        public virtual async Task<IActionResult> DeleteRangeAsync(IEnumerable<K> ids)
        {
            await service.DeleteRangeAsync(ids);
            return Ok();
        }
    }
}
