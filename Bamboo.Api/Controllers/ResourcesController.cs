using Bamboo.Api.Controllers.Common;
using Bamboo.Core.DTOs;
using Bamboo.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.SecurityService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourcesController(ILogger<ResourcesController> logger, IResourceService resourceService) : BaseController<ResourceDto, Guid>(logger, resourceService)
    {
    }
}
