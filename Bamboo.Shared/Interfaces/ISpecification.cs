namespace Bamboo.Shared.Interfaces
{
    public interface ISpecification<T>
    {
        public bool IsSatisfiedBy(T item);
    }
}
