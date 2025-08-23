using System.ComponentModel.DataAnnotations;

namespace Bamboo.ReminderService.Core.Models
{
    public class Reminder
    {
        [Key]
        public int Id { get; set; }
    }
}
