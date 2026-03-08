using Bamboo.Core.DTOs;
using Bamboo.Core.Interfaces;
using Bamboo.Shared.Interfaces;

namespace Bamboo.Infrastructure.Services
{
    public class ResourceService : IResourceService
    {
        public Task<ResourceDto?> AddAsync(ResourceDto item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddRangeAsync(IList<ResourceDto> items)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<ResourceDto[]> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ResourceDto?> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IPayload<ResourceDto>> SearchAsync(IDataFilter filter)
        {
            throw new NotImplementedException();
        }

        public Task<ResourceDto?> UpdateAsync(Guid id, ResourceDto item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRangeAsync(IList<ResourceDto> items)
        {
            throw new NotImplementedException();
        }
    }
}
