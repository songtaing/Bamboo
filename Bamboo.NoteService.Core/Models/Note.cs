using Bamboo.Shared.Models;
using System.ComponentModel.DataAnnotations;

namespace Bamboo.NoteService.Core.Models
{
    public class Note : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
    }
}
