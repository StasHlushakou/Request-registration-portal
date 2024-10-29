﻿namespace RequestPortal.Contracts.Auth.Register
{
    public sealed record RegisterRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
