using Bamboo.SecurityService.Core.DTOs;
using Bamboo.SecurityService.Core.Interfaces;
using Bamboo.SecurityService.Core.Models;
using Bamboo.Shared.Interfaces;

namespace Bamboo.SecurityService.Infrastructure.Services
{
    public class UserService : IUserService
    {
        public Task<UserDto?> AddAsync(UserDto item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddRangeAsync(IList<UserDto> items)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<UserDto[]> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<UserDto?> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IPayload<UserDto>> SearchAsync(IDataFilter filter)
        {
            throw new NotImplementedException();
        }

        public Task<UserDto?> UpdateAsync(Guid id, UserDto item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRangeAsync(IList<UserDto> items)
        {
            throw new NotImplementedException();
        }
    }
}
