using Bamboo.Shared.Interfaces.Filters;

namespace Bamboo.Core.Interfaces.Filters
{
    public interface IReminderSearchFilter : IDataFilter
    {
        DateTime? StartDateTime { get; set; }
        DateTime? EndDateTime { get; set; }
    }
}
