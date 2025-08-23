namespace Bamboo.Core.Interfaces.Filters
{
    public interface IPayload<T>
    {
        public T[] Data { get; set; }
        public int TotalCount { get; set; }

    }
}
