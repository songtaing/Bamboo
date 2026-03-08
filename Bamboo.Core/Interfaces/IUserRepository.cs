using Bamboo.Core.Models;
using Bamboo.Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.Core.Interfaces
{
    public interface IUserRepository: IRepository<User, Guid>
    {
    }
}
