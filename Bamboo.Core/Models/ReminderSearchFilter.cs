using Bamboo.Core.Interfaces.Filters;
using Bamboo.Shared.Interfaces.Filters;

namespace Bamboo.Core.Models
{
    public class ReminderSearchFilter : IReminderSearchFilter, IDataFilter
    {
        public DateTime? StartDateTime { get; set; }
        public DateTime? EndDateTime { get; set; }
        public string? SearchTerm { get; set; }
        public bool? MatchCase { get; set; }
        public bool? MatchWholeWord { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public bool? IsAscending { get; set; }
        public ISortField[]? SortFields { get; set; }
    }
}
