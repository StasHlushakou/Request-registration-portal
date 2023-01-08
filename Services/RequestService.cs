using Request_registration_portal.Models;

namespace Request_registration_portal.Services
{
    public class RequestService
    {
        static List<Request> Requests { get; }
        static int nextId = 3;
        static RequestService()
        {
            Requests = new List<Request>
            {
                new Request { Id = 1, UserId = 1, Theme = "Classic Italian111", Description = "Classic Italian111", Date = DateTime.UtcNow },
                new Request { Id = 2, UserId = 2, Theme = "Classic Italian222", Description = "Classic Italian222", Date = DateTime.UtcNow },
                new Request { Id = 3, UserId = 3, Theme = "Classic Italian333", Description = "Classic Italian333", Date = DateTime.UtcNow },
                new Request { Id = 4, UserId = 4, Theme = "Classic Italian444", Description = "Classic Italian444", Date = DateTime.UtcNow },
            };
        }

        public static List<Request> GetAll() => Requests;

        public static Request? Get(int id) => Requests.FirstOrDefault(p => p.Id == id);

        public static void Add(Request pizza)
        {
            pizza.Id = nextId++;
            Requests.Add(pizza);
        }

        public static void Delete(int id)
        {
            var pizza = Get(id);
            if (pizza is null)
                return;

            Requests.Remove(pizza);
        }

        public static void Update(Request pizza)
        {
            var index = Requests.FindIndex(p => p.Id == pizza.Id);
            if (index == -1)
                return;

            Requests[index] = pizza;
        }
    }
}
