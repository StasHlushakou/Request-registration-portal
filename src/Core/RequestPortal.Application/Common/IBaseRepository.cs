using RequestPortal.Domain.Common;

namespace RequestPortal.Application.Common
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
        Task Create(T entity);
        Task Update(T entity);
        Task Delete(Guid id);
        Task<T?> Get(Guid id);
        IQueryable<T> GetAll();
    }
}
