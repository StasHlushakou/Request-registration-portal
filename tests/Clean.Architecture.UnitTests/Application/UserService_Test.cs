using RequestPortal.Application.Repository;
using Moq;
using RequestPortal.Application.Services;
using RequestPortal.Domain.Entities;
using RequestPortal.Application.Common;

namespace Clean.Architecture.UnitTests.Application
{
    public class UserService_Test
    {
        Mock<IUserRepository> _userRepository = new Mock<IUserRepository>(MockBehavior.Strict);
        UserService _userService;

        string _name = "name";
        string _email = "email";
        string _password = "password";
        User _user;

        public UserService_Test()
        {
            _userService = new UserService(_userRepository.Object);
            _user = new User(_name, _email, _password);
        }

        [Fact]
        public async void UserService_CheckUserCredential()
        {
            _userRepository.Setup(mock => mock.GetByEmailAndPassword(_email, _password))
                .ReturnsAsync((() => null));
            var actualUserId = await _userService.CheckUserCredential(_email, _password);
            Assert.Null(actualUserId);


            _userRepository.Setup(mock => mock.GetByEmailAndPassword(_email, _password))
                .ReturnsAsync((() => _user));
            actualUserId = await _userService.CheckUserCredential(_email, _password);
            Assert.Equal(actualUserId, _user.Id);
        }
        
        [Fact]
        public async void UserService_CreateUser()
        {
            _userRepository.Setup(mock => mock.IsEmailReserved(_email))
                .ReturnsAsync(() => true);
            await Assert.ThrowsAsync<EmailReservedException>( () => _userService.CreateUser(_user));
        }

    }
}
