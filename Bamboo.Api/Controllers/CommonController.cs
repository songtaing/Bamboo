using Bamboo.Shared.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class CommonController<T, K>(ILogger logger, IService<T, K> service) : ControllerBase
    {
        [HttpPost("search")]
        public virtual async Task<IActionResult> FindAsync(IDataFilter filter) => Ok(await service.FindAsync(filter));
        [HttpPost]
        public virtual async Task<IActionResult> AddAsync(T item) => Ok(await service.AddAsync(item));
        [HttpPost]
        public virtual async Task<IActionResult> AddRangeAsync(IEnumerable<T> items) => Ok(await service.AddRangeAsync(items));
        [HttpGet]
        public virtual async Task<IActionResult> GetAllAsync() => Ok(await service.GetAllAsync());
        [HttpGet("{id}")]
        public virtual async Task<IActionResult> GetByIdAsync(K id) => Ok(await service.GetByIdAsync(id));
        [HttpPut]
        public virtual async Task<IActionResult> UpdateAsync(T item) => Ok(await service.UpdateAsync(item));
        [HttpPut]
        public virtual async Task<IActionResult> UpdateRangeAsync(IEnumerable<T> items) => Ok(await service.UpdateRangeAsync(items));
        [HttpDelete("{id}")]
        public virtual async Task<IActionResult> DeleteAsync(K id)
        {
            await service.DeleteAsync(id);
            return Ok();
        }
        [HttpDelete]
        public virtual async Task<IActionResult> DeleteAsync(T item)
        {
            await service.DeleteAsync(item);
            return Ok();
        }
        [HttpDelete]
        public virtual async Task<IActionResult> DeleteRangeAsync(IEnumerable<K> ids)
        {
            await service.DeleteRangeAsync(ids);
            return Ok();
        }
    }
}
