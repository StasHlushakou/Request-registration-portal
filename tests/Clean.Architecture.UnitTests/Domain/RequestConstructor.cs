using RequestPortal.Domain.Common;
using RequestPortal.Domain.Entities;

namespace Clean.Architecture.UnitTests.Domain
{
    public class RequestConstructor
    {
        string theme = "theme";
        string description = "description";
        Guid userId = new Guid();
        Request entity;

        public RequestConstructor()
        {
            entity = new Request(theme, description, userId);
        }

        [Fact]
        public void RequestConstructor_Theme()
        {
            Assert.Equal(theme, entity.Theme);
        }

        [Fact]
        public void RequestConstructor_Description()
        {
            Assert.Equal(description, entity.Description);
        }

        [Fact]
        public void RequestConstructor_UserId()
        {
            Assert.Equal(userId, entity.UserId);
        }

    }
}
