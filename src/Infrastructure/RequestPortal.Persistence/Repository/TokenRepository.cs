using Microsoft.EntityFrameworkCore;
using RequestPortal.Infrastructure.Entities;
using RequestPortal.Persistence.Context;

namespace RequestPortal.Persistence.Repository
{
    public class TokenRepository : BaseRepository<Token>, ITokenRepository
    {
        public TokenRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Token?> GetByUserId(Guid userId)
        {
            return await GetAll().FirstOrDefaultAsync(t => t.UserId == userId);
        }
    }
}
