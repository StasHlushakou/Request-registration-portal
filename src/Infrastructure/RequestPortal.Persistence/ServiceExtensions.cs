using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RequestPortal.Application.Repository;
using RequestPortal.Persistence.Context;
using RequestPortal.Persistence.Repository;

namespace RequestPortal.Persistence
{
    public static class ServiceExtensions
    {
        public static void ConfigurePersistence(this IServiceCollection services, string connection)
        {
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connection));

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IRequestRepository, RequestRepository>();
            services.AddScoped<ITokenRepository, TokenRepository>();
        }
    }
}
