using RequestPortal.Domain.Common;
using RequestPortal.Domain.Entities;

namespace Clean.Architecture.UnitTests.Domain
{
    public class BaseEntity_Test
    {
        DateTime dateBefore;
        BaseEntity entity;
        DateTime dateAfter;

        public BaseEntity_Test()
        {
            dateBefore = DateTime.UtcNow;
            entity = new BaseEntityT();
            dateAfter = DateTime.UtcNow;
        }

        [Fact]
        public void BaseEntityConstructor_DateCreated()
        {
            Assert.True(entity.DateCreated > dateBefore);

            Assert.True(entity.DateCreated < dateAfter);
        }

        [Fact]
        public void BaseEntityConstructor_DateUpdated()
        {
            Assert.True(entity.DateUpdated > dateBefore);

            Assert.True(entity.DateUpdated < dateAfter);
        }
    }

    public class BaseEntityT : BaseEntity
    {
        public BaseEntityT() : base()
        {}
    }
}
