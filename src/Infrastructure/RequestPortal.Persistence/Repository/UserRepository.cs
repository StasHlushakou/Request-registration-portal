using Microsoft.EntityFrameworkCore;
using RequestPortal.Application.Repository;
using RequestPortal.Domain.Entities;
using RequestPortal.Persistence.Context;


namespace RequestPortal.Persistence.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<bool> IsEmailReserved(string email)
        {
            return await GetAll().AnyAsync(e => e.Email == email);
        }

        public async Task<User?> GetByEmailAndPassword(string email, string password)
        {
            return await GetAll().FirstOrDefaultAsync(e => e.Email == email && e.Password == password);
        }
    }
}
