using Bamboo.NoteService.Core.Models;
using Bamboo.Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.NoteService.Core.Interfaces
{
    public interface INoteRepository : IRepository<Note, Guid>
    {
    }
}
