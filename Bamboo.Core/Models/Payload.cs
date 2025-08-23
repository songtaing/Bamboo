using Bamboo.Core.Interfaces.Filters;

namespace Bamboo.Core.Models
{
    public class Payload<T> : IPayload<T>
    {
        public Payload()
        {

        }

        public Payload(T[] data, int totalCount)
        {
            this.Data = data;
            this.TotalCount = totalCount;
        }

        public T[] Data { get; set; } = new T[0];
        public int TotalCount { get; set; }
    }
}
