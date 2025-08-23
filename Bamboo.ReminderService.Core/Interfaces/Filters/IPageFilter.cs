namespace Bamboo.Core.Interfaces.Filters
{
    public interface IPageFilter
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
    }
}
