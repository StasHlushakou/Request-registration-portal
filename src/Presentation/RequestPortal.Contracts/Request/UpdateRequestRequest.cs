namespace RequestPortal.Contracts.Request
{
    public sealed record UpdateRequestRequest
    {
        public string Id { get; set; }
        public string Theme { get; set; }
        public string Description { get; set; }
    }
}
