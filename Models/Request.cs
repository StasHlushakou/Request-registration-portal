namespace Request_registration_portal.Models
{
    public class Request
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Theme { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }

    }
}
