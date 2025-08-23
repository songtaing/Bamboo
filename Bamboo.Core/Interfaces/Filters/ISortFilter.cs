namespace Bamboo.Core.Interfaces.Filters
{
    public interface ISortFilter
    {
        public bool? IsAscending { get; set; }
        public string[]? SortFields { get; set; }
    }
}
