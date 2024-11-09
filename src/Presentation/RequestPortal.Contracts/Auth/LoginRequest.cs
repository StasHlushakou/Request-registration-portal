namespace RequestPortal.Contracts.Auth
{
    public sealed record LoginRequest
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
