using Bamboo.Shared.Models;

namespace Bamboo.SecurityService.Core.DTOs
{
    public class RoleDto : BaseEntity
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; } = string.Empty;
    }
}
