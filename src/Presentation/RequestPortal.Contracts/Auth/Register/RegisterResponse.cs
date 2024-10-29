namespace RequestPortal.Contracts.Auth.Register
{
    public sealed record RegisterResponse
    {
        public string Token { get; set; }
    }
}
