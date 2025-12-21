using Bamboo.Shared.Models;
using System.ComponentModel.DataAnnotations;

namespace Bamboo.ReminderService.Core.Models
{
    public class Reminder : BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
