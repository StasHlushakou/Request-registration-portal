using Microsoft.EntityFrameworkCore;
using RequestPortal.Application.Common;
using RequestPortal.Domain.Common;
using RequestPortal.Persistence.Context;

namespace RequestPortal.Persistence.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        protected readonly AppDbContext _context;

        public BaseRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task Create(T entity)
        {
            await _context.AddAsync<T>(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Update(T entity)
        {
            _context.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(Guid id)
        {
            var entity = await Get(id);
            entity.DateDeleted = DateTime.UtcNow;
            await Update(entity);
        }

        public async Task<T?> Get(Guid id)
        {
            return await _context.Set<T>().FirstOrDefaultAsync(x => x.Id == id && !x.DateDeleted.HasValue);
        }

        public IQueryable<T> GetAll()
        {
            return _context.Set<T>().Where(x => !x.DateDeleted.HasValue);
        }
    }
}
