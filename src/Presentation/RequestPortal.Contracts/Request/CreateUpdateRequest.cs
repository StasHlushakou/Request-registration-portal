namespace RequestPortal.Contracts.Request
{
    public sealed record CreateUpdateRequest
    {
        public string Theme { get; set; }
        public string Description { get; set; }
    }
}
