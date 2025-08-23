namespace Bamboo.Shared.Interfaces.Filters
{
    public interface ISortFilter
    {
        public bool? IsAscending { get; set; }
        public ISortField[]? SortFields { get; set; }
    }
}
