using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RequestPortal.Api.Controllers.Common;
using RequestPortal.Application.Common;
using RequestPortal.Contracts.Auth;
using RequestPortal.Domain.Entities;
using RequestPortal.Infrastructure.Authentication;

namespace RequestPortal.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : AppControllerBase
    {
        private readonly ICustomAuthenticationManager _customAuthenticationManager;
        private readonly IUserService _userService;

        public AuthController(
            ICustomAuthenticationManager customAuthenticationManager
            , IUserService userService
            )
        {
            _customAuthenticationManager = customAuthenticationManager;
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<TokenResponse>> Login([FromBody] LoginRequest request)
        {
            var token = await _customAuthenticationManager.Login(request.Login, request.Password);

            if (token == null)
                return Unauthorized();

            return Ok(new TokenResponse() { Token = token });
        }

        [HttpPost("register")]
        public async Task<ActionResult<TokenResponse>> Register([FromBody] RegisterRequest request)
        {
            await _userService.CreateUser(new User(request.Name, request.Email, request.Password));

            var token = await _customAuthenticationManager.Login(request.Email, request.Password);

            if (token == null)
                return Unauthorized();

            return Ok(new TokenResponse() { Token = token });
        }

        [HttpPost("logout")]
        [Authorize]
        public async Task<ActionResult<TokenResponse>> Logout()
        {
            await _customAuthenticationManager.Logout(GetUserId());

            return Ok();
        }
    }
}
