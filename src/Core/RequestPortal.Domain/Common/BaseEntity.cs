using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RequestPortal.Domain.Common
{
    public abstract class BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; private init; }
        public DateTime DateCreated { get; private init; }
        public DateTime DateUpdated { get; set; }
        public DateTime? DateDeleted { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            DateCreated = DateTime.UtcNow;
            DateUpdated = DateCreated;
        }

    }
}
