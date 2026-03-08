using Bamboo.Shared.Models;

namespace Bamboo.Core.DTOs
{
    public class RoleDto : BaseEntity
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; } = string.Empty;
    }
}
