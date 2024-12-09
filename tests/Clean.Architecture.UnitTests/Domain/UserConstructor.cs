using RequestPortal.Domain.Common;
using RequestPortal.Domain.Entities;

namespace Clean.Architecture.UnitTests.Domain
{
    public class UserConstructor
    {
        string name = "name";
        string email = "email";
        string password = "password";
        User entity;

        public UserConstructor()
        {
            entity = new User(name, email, password);
        }

        [Fact]
        public void UserConstructor_Name()
        {
            Assert.Equal(name, entity.Name);
        }

        [Fact]
        public void UserConstructor_Email()
        {
            Assert.Equal(email, entity.Email);
        }

        [Fact]
        public void UserConstructor_Password()
        {
            Assert.Equal(password, entity.Password);
        }
    }
}
