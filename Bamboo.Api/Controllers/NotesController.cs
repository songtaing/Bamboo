using Bamboo.Api.Controllers.Common;
using Bamboo.Core.Models;
using Bamboo.Shared.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bamboo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController(ILogger logger, IService<NoteDto, Guid> service) : BaseController<NoteDto, Guid>(logger, service)
    {

    }
}
