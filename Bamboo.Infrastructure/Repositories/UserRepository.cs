using Bamboo.Core.Interfaces;
using Bamboo.Core.Models;
using Bamboo.Shared.Interfaces;


namespace Bamboo.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        public Task<User?> AddAsync(User item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddRangeAsync(IList<User> items)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<User[]> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<User?> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IPayload<User>> SearchAsync(IDataFilter filter)
        {
            throw new NotImplementedException();
        }

        public Task<User?> UpdateAsync(Guid id, User item)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRangeAsync(IList<User> items)
        {
            throw new NotImplementedException();
        }
    }
}
