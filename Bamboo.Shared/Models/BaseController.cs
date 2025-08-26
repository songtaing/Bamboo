using Bamboo.Shared.Interfaces;
using Bamboo.Shared.Interfaces.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.Shared.Models
{
    [Route("api/[controller]")]
    public abstract class BaseController<T, K>(ILogger logger, IService<T, K> service) : ControllerBase
    {
        [HttpPost("search")]
        public virtual async Task<IActionResult> SearchAsync([FromBody] DataFilter filter)
        {
            try
            {
                if (filter == null)
                    return BadRequest();

                return Ok(await service.SearchAsync(filter));
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "SearchAsync");
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public virtual async Task<IActionResult> GetAsync(K id)
        {
            try
            {
                T? results = await service.GetByIdAsync(id);

                if (results == null)
                    return NotFound();

                return Ok(results);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "GetAsync");
                return BadRequest(ex.Message);
            }
        }
#if DEBUG
        [HttpGet]
        public virtual async Task<IActionResult> GetAllAsync()
        {
            try
            {
                return Ok(await service.GetAllAsync());
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "GetAllAsync");
                return BadRequest(ex.Message);
            }
        }
#endif

        [HttpPost]
        public virtual async Task<IActionResult> AddAsync([FromBody] T entity)
        {
            try
            {
                if (entity == null)
                    return BadRequest();

                return Ok(await service.AddAsync(entity));
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "AddAsync");
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("add-range")]
        public virtual async Task<IActionResult> AddRangeAsync([FromBody] IList<T> entities)
        {
            try
            {
                if(entities == null || !entities.Any()) return BadRequest();

                return Ok(await service.AddRangeAsync(entities));
            }
            catch(Exception ex)
            {
                logger.LogError(ex, "AddRangeAsync");
                return BadRequest(ex.Message);
            }
        }
    }
}
