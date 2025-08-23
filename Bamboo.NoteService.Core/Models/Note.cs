using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.NoteService.Core.Models
{
    public class Note
    {
        [Key]
        public Guid Id { get; set; }
    }
}
