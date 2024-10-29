using RequestPortal.Application.Common;
using RequestPortal.Application.Repository;
using RequestPortal.Domain.Entities;

namespace RequestPortal.Application.Services
{
    public class RequestService : IRequestService
    {
        private readonly IRequestRepository _requestRepository;

        public RequestService(
            IRequestRepository requestRepository
            )
        {
            _requestRepository = requestRepository;
        }

        public async Task AddRequest(Request request)
        {
            await _requestRepository.Create(request);
        }

        public async Task DeleteRequest(Guid id)
        {
            await _requestRepository.Delete(id);
        }

        public async Task UpdateRequest(Request request)
        {
            await _requestRepository.Update(request);
        }

        public async Task<Request> GetRequestsById(Guid id, Guid userId)
        {
            return await _requestRepository.GetById(id, userId);
        }

        public async Task<List<Request>> GetAllRequestsByUserId(Guid userId)
        {
            return await _requestRepository.GetByUserId(userId);
        }
    }
}
