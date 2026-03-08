using System.Linq.Expressions;

namespace Bamboo.Shared.Models
{
    public abstract class Specification<T>
    {
        public Expression<Func<T, bool>>? Criteria { get; private set; }
        public List<Expression<Func<T, object>>> Includes { get; } = new();
        public List<string> IncludeStrings { get; } = new();

        public virtual void AddCriteria(Expression<Func<T, bool>> expression) => Criteria = expression;
        public virtual void AddInclude(Expression<Func<T, object>> expression) => Includes.Add(expression);
        public virtual void AddInclude(string navigationProperty) => IncludeStrings.Add(navigationProperty);
    }
}
