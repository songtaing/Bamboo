namespace Bamboo.Core.Interfaces.Filters
{
    public interface ISearchFilter
    {
        public string? SearchTerm { get; set; }
        public bool? MatchCase { get; set; }
        public bool? MatchWholeWord { get; set; }
    }
}
