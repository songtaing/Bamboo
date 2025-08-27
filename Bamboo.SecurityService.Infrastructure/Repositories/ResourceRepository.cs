using Bamboo.SecurityService.Core.Interfaces;
using Bamboo.SecurityService.Core.Models;
using Bamboo.Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.SecurityService.Infrastructure.Repositories
{
    public class ResourceRepository : IResourceRepository
    {
        public Task<Resource?> AddAsync(Resource item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddRangeAsync(IList<Resource> items)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<Resource[]> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Resource?> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IPayload<Resource>> SearchAsync(IDataFilter filter)
        {
            throw new NotImplementedException();
        }

        public Task<Resource?> UpdateAsync(Guid id, Resource item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRangeAsync(IList<Resource> items)
        {
            throw new NotImplementedException();
        }
    }
}
