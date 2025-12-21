using Bamboo.Shared.Models;

namespace Bamboo.SecurityService.Core.Models
{
    public class Role : BaseEntity
    {
        public Guid RoleId { get; set; }
        public string RoleName { get; set; } = string.Empty;
    }
}
