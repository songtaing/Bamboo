using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.SecurityService.Core.DTOs
{
    public class RoleDto
    {
        public int RoleId { get; set; }
        public Guid RefKey { get; set; }
        public string RoleName { get; set; } = string.Empty;
    }
}
