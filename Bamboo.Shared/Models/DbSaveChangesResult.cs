namespace Bamboo.Shared.Models
{
    public readonly record struct DbSaveChangesResult(int resultCount)
    {
        public static implicit operator int(DbSaveChangesResult result)
        {
            return result.resultCount;
        }

        public static implicit operator DbSaveChangesResult(int resultCount)
        {
            return new DbSaveChangesResult(resultCount);
        }
    }
}
