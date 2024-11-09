using RequestPortal.Infrastructure;
using RequestPortal.Infrastructure.Middlewares;
using RequestPortal.Persistence;

namespace RequestPortal.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddCors(o =>
                o.AddDefaultPolicy(p => p.WithOrigins("http://localhost:4200", "https://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials())
                );

            var connection = builder.Configuration.GetConnectionString("DefaultConnection");
            builder.Services.ConfigurePersistence(connection);

            builder.Services.ConfigureInfrastructure();

            // Add services to the container.

            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();

            app.MapControllers();

            app.UseMiddleware<ErrorMiddleware>();
            //app.UseMiddleware<LogMiddleware>();

            app.UseCors();

            app.Run();
        }

    }
}
