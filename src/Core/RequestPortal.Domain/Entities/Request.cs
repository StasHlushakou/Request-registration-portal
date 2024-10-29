using RequestPortal.Domain.Common;

namespace RequestPortal.Domain.Entities
{
    public class Request : BaseEntity
    {
        public string Theme { get; set; }
        public string Description { get; set; }
        public Guid UserId { get; private init; }

        public Request(string theme, string description, Guid userId) : base()
        {
            Theme = theme;
            Description = description;
            UserId = userId;
        }

        public Request() { }
    }
}
