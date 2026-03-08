using Bamboo.Shared.Interfaces;

namespace Bamboo.Shared.Models
{
    public class Payload<T> : IPayload<T>
    {
        public Payload()
        {

        }

        public Payload(T[] results, int totalCount)
        {
            this.Results = results;
            this.TotalCount = totalCount;
        }

        public T[] Results { get; set; } = [];
        public int TotalCount { get; set; }
    }
}
