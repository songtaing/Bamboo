using Bamboo.SecurityService.Core.Models;
using Bamboo.Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.SecurityService.Core.Interfaces
{
    public interface IResourceRepository: IRepository<Resource, Guid>
    {
    }
}
