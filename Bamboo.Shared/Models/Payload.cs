using Bamboo.Shared.Interfaces;

namespace Bamboo.Shared.Models
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

        public T[] Data { get; set; } = [];
        public int TotalCount { get; set; }
    }
}
