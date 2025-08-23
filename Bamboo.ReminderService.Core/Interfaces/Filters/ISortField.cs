using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bamboo.Core.Interfaces.Filters
{
    public interface ISortField
    {
        public string SortField { get; set; }
        public bool IsAscending {  get; set; }
    }
}
