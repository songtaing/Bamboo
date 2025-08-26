using Bamboo.SecurityService.Core.DTOs;
using Bamboo.Shared.Interfaces;

namespace Bamboo.SecurityService.Core.Interfaces
{
    public interface IUserService: IService<UserDto, Guid>
    {
    }
}
