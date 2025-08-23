namespace Bamboo.Shared.Interfaces.Filters
{
    public interface ISortField
    {
        public string SortField { get; set; }
        public bool IsAscending {  get; set; }
    }
}
