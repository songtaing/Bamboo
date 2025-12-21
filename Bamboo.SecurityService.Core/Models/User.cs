using Bamboo.Shared.Models;

namespace Bamboo.SecurityService.Core.Models
{
    public class User : BaseEntity
    {
        public Guid UserId { get; set; }
        public string Username { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }
}
