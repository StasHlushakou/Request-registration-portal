namespace RequestPortal.Infrastructure.Authentication
{
    public interface ICustomAuthenticationManager
    {
        Task<string?> Login(string username, string password);

        Task<Guid?> Authenticate(string token);
    }
}
