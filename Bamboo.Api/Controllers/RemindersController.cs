using Bamboo.Core.Interfaces;
using Bamboo.Core.Interfaces.Filters;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RemindersController : ControllerBase
    {
        private readonly IReminderService _service;

        public RemindersController(IReminderService reminderService)
        {
            _service = reminderService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _service.GetAllAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Search(IReminderSearchFilter filter)
        {
            if (filter == null)
            {
                return BadRequest();
            }

            return Ok(await _service.SearchAsync(filter));
        }
    }
}
