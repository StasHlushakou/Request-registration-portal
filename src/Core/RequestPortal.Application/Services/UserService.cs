using RequestPortal.Application.Common;
using RequestPortal.Application.Repository;
using RequestPortal.Domain.Entities;

namespace RequestPortal.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(
            IUserRepository userRepository
            )
        {
            _userRepository = userRepository;
        }

        public async Task<Guid?> CheckUserCredential(string email, string password)
        {
            var user = await _userRepository.GetByEmailAndPassword(email, password);

            return user != null ? user.Id : null;
        }

        public async Task CreateUser(User user)
        {
            if (await _userRepository.IsEmailReserved(user.Email))
            {
                throw new EmailReservedException();
            }

            await _userRepository.Create(user);
        }
    }
}
