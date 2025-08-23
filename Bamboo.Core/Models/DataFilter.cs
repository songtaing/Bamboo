using Bamboo.Core.Interfaces.Filters;

namespace Bamboo.Core.Models
{
    public class DataFilter : IDataFilter
    {
        public string? SearchTerm { get; set; }
        public bool? MatchCase { get; set; } = false;
        public bool? MatchWholeWord { get; set; } = false;
        public int PageIndex { get; set; } = 0;
        public int PageSize { get; set; } = 25;
        public bool? IsAscending { get; set; } = true;
        public string[]? SortFields { get; set; } = new string[0];
    }
}
