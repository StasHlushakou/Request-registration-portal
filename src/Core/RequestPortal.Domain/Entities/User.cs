using RequestPortal.Domain.Common;

namespace RequestPortal.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User(string name, string email, string password) : base()
        {
            Name = name;
            Email = email;
            Password = password;
        }

        public User() { }
    }
}
