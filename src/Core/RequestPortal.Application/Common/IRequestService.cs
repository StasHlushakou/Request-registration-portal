using RequestPortal.Domain.Entities;

namespace RequestPortal.Application.Common
{
    public interface IRequestService
    {
        Task AddRequest(Request request);

        Task<Request> GetRequestsById(Guid id);

        Task<List<Request>> GetAllRequestsByUserId(Guid userId);

        Task UpdateRequest(Request request);

        Task DeleteRequest(Guid id);
    }
}
