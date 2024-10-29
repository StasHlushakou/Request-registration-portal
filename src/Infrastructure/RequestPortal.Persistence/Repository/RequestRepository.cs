using Microsoft.EntityFrameworkCore;
using RequestPortal.Application.Repository;
using RequestPortal.Domain.Entities;
using RequestPortal.Persistence.Context;

namespace RequestPortal.Persistence.Repository
{
    public class RequestRepository : BaseRepository<Request>, IRequestRepository
    {
        public RequestRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Request> GetById(Guid id, Guid userId)
        {
            return await GetAll().FirstOrDefaultAsync(r => r.Id == id && r.UserId == userId);
        }

        public async Task<List<Request>> GetByUserId(Guid userId)
        {
            return await GetAll().Where(r => r.UserId == userId).ToListAsync();
        }

    }
}
