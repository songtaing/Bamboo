namespace Bamboo.Shared.Interfaces
{
    public interface IPayload<T>
    {
        public T[] Results { get; set; }
        public int TotalCount { get; set; }

    }
}
