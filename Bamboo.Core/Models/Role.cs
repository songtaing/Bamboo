using Bamboo.Shared.Models;

namespace Bamboo.Core.Models
{
    public class Role : BaseEntity
    {
        public Guid RoleId { get; set; }
        public string RoleName { get; set; } = string.Empty;
    }
}
