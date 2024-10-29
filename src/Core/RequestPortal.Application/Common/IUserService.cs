using RequestPortal.Domain.Entities;

namespace RequestPortal.Application.Common
{
    public interface IUserService
    {
        Task CreateUser(User user);
        Task<Guid?> CheckUserCredential(string email, string password);
    }
}
