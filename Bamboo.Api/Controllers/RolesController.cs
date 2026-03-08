using Bamboo.Api.Controllers.Common;
using Bamboo.Core.DTOs;
using Bamboo.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.SecurityService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController(ILogger<RolesController> logger, IRoleService roleService) : BaseController<RoleDto, Guid>(logger, roleService)
    {
    }
}
