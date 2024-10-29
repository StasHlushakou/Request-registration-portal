using RequestPortal.Domain.Common;

namespace RequestPortal.Infrastructure.Entities
{
    public class Token : BaseEntity
    {
        public Guid UserId { get; set; }

        public Token(Guid userId) : base()
        {
            UserId = userId;
        }

        public Token() { }
    }
}
