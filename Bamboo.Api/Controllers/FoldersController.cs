using Bamboo.Core.FileExplorer.DTOs;
using Bamboo.Shared.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoldersController(ILogger logger, IService<FolderDto, int> service) : CommonController<FolderDto, int>(logger, service)
    {
    }
}
