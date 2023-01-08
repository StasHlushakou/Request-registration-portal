using Microsoft.AspNetCore.Mvc;
using Request_registration_portal.Models;
using Request_registration_portal.Services;

namespace Request_registration_portal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RequestController : ControllerBase
    {
        private readonly ILogger<RequestController> _logger;

        public RequestController(ILogger<RequestController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<List<Request>> GetAll() =>
                RequestService.GetAll();

        [HttpGet("{id}")]
        public ActionResult<Request> Get(int id)
        {
            var req = RequestService.Get(id);

            return req;
        }

        [HttpPost()]
        public void Post(Request request)
        {
            RequestService.Add(request);
        }

        [HttpPut()]
        public void Put(Request request)
        {
            RequestService.Update(request);
        }

        [HttpDelete()]
        public void Delete(int id)
        {
            RequestService.Delete(id);
        }

    }
}
