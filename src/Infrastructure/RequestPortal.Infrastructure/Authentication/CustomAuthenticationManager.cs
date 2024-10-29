using RequestPortal.Application.Common;
using RequestPortal.Infrastructure.Entities;
using RequestPortal.Persistence.Repository;

namespace RequestPortal.Infrastructure.Authentication
{
    public class CustomAuthenticationManager : ICustomAuthenticationManager
    {
        private readonly ITokenRepository _tokenRepository;
        private readonly IUserService _userService;

        public CustomAuthenticationManager(
            ITokenRepository tokenRepository,
            IUserService userService)
        {
            _tokenRepository = tokenRepository;
            _userService = userService;
        }

        public async Task<Guid?> Authenticate(string tokenStr)
        {
            var token = await _tokenRepository.Get(Guid.Parse(tokenStr));

            return token?.UserId ?? null;
        }

        public async Task<string?> Login(string username, string password)
        {
            var userId = await _userService.CheckUserCredential(username, password);

            if (!userId.HasValue)
            {
                return null;
            }

            var token = await _tokenRepository.GetByUserId(userId.Value);

            if (token != null)
            {
                return token.Id.ToString();
            }

            token = new Token(userId.Value);

            await _tokenRepository.Create(token);

            return token.Id.ToString();
        }
    }
}
