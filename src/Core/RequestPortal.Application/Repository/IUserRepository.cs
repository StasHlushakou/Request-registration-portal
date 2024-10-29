using RequestPortal.Application.Common;
using RequestPortal.Domain.Entities;

namespace RequestPortal.Application.Repository
{
    public interface IUserRepository : IBaseRepository<User>
    {
        Task<bool> IsEmailReserved(string email);
        Task<User?> GetByEmailAndPassword(string email, string password);
    }
}
