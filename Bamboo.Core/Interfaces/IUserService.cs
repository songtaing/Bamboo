using Bamboo.Core.DTOs;
using Bamboo.Shared.Interfaces;

namespace Bamboo.Core.Interfaces
{
    public interface IUserService: IService<UserDto, Guid>
    {
    }
}
