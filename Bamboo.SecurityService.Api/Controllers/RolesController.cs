using Bamboo.SecurityService.Core.DTOs;
using Bamboo.SecurityService.Core.Interfaces;
using Bamboo.Shared.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.SecurityService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController(ILogger<RolesController> logger, IRoleService roleService) : BaseController<RoleDto, Guid>(logger, roleService)
    {
    }
}
