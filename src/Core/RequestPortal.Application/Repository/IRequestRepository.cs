using RequestPortal.Application.Common;
using RequestPortal.Domain.Entities;

namespace RequestPortal.Application.Repository
{
    public interface IRequestRepository : IBaseRepository<Request>
    {
        Task<List<Request>> GetByByUserId(Guid userId);
    }
}
