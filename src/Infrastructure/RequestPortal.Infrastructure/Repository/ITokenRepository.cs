using RequestPortal.Application.Common;
using RequestPortal.Infrastructure.Entities;

namespace RequestPortal.Persistence.Repository
{
    public interface ITokenRepository : IBaseRepository<Token>
    {
        Task<Token?> GetByUserId(Guid userId);

        Task DeleteByUserId(Guid userId);
    }
}
