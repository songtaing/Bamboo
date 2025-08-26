using Bamboo.SecurityService.Core.DTOs;
using Bamboo.SecurityService.Core.Interfaces;
using Bamboo.SecurityService.Core.Models;
using Bamboo.Shared.Interfaces;

namespace Bamboo.SecurityService.Infrastructure.Services
{
    public class RoleService : IRoleService
    {
        public Task<RoleDto?> AddAsync(RoleDto item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddRangeAsync(IList<RoleDto> items)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<RoleDto[]> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<RoleDto?> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IPayload<RoleDto>> SearchAsync(IDataFilter filter)
        {
            throw new NotImplementedException();
        }

        public Task<RoleDto?> UpdateAsync(Guid id, RoleDto item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRangeAsync(IList<RoleDto> items)
        {
            throw new NotImplementedException();
        }
    }
}
