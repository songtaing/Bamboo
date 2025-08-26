namespace Bamboo.Shared.Interfaces.Filters
{
    public interface ISortField
    {
        public string FieldName { get; set; }
        public bool IsAscending {  get; set; }
    }
}
