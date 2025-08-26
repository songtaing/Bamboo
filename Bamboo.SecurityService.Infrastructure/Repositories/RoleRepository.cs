using Bamboo.SecurityService.Core.Interfaces;
using Bamboo.SecurityService.Core.Models;
using Bamboo.Shared.Interfaces.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.SecurityService.Infrastructure.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        public Task<Role?> AddAsync(Role item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddRangeAsync(IList<Role> items)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<Role[]> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Role?> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IPayload<Role>> SearchAsync(IDataFilter filter)
        {
            throw new NotImplementedException();
        }

        public Task<Role?> UpdateAsync(Guid id, Role item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRangeAsync(IList<Role> items)
        {
            throw new NotImplementedException();
        }
    }
}
