using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using RequestPortal.Application.Common;
using RequestPortal.Application.Services;
using RequestPortal.Infrastructure.Authentication;

namespace RequestPortal.Infrastructure
{
    public static class ServiceExtensions
    {
        public static void ConfigureInfrastructure(this IServiceCollection services)
        {
            services.AddAuthentication("Basic")
                .AddScheme<BasicAuthenticationOptions, CustomAuthenticationHandler>("Basic", null);

            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddScoped<ICustomAuthenticationManager, CustomAuthenticationManager>();
            
            // application services
            services.AddScoped<IRequestService, RequestService>();
            services.AddScoped<IUserService, UserService>();

        }
    }
}
