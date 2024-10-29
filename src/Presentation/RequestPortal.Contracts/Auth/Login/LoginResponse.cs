namespace RequestPortal.Contracts.Auth.Login
{
    public sealed record LoginResponse
    {
        public string Token { get; set; }
    }
}
