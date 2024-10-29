namespace RequestPortal.Contracts.Request
{
    public sealed record CreateRequestRequest
    {
        public string Theme { get; set; }
        public string Description { get; set; }
    }
}
