using RequestPortal.Application.Common;
using RequestPortal.Domain.Entities;

namespace RequestPortal.Application.Repository
{
    public interface IRequestRepository : IBaseRepository<Request>
    {
        Task<Request> GetById(Guid id, Guid userId);
        Task<List<Request>> GetByUserId(Guid userId);
    }
}
