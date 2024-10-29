namespace RequestPortal.Contracts.DTO
{
    public sealed record RequestDTO
    {
        public string Id { get; set; }
        public string Theme { get; set; }
        public string Description { get; set; }
    }
}
