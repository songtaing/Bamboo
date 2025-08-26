using Bamboo.ReminderService.Core.Interfaces.Filters;
using Bamboo.Shared.Interfaces;
using Bamboo.Shared.Interfaces.Filters;

namespace Bamboo.ReminderService.Core.Models
{
    public class ReminderSearchFilter : IReminderSearchFilter, IDataFilter
    {
        public DateTime? StartDateTime { get; set; }
        public DateTime? EndDateTime { get; set; }
        public string SearchTerm { get; set; } = string.Empty;
        public bool MatchCase { get; set; } = false;
        public bool MatchWholeWord { get; set; } = false;
        public int PageIndex { get; set; } = 0;
        public int PageSize { get; set; } = 25;
        public ISortField[]? SortFields { get; set; }
    }
}
