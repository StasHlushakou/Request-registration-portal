using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RequestPortal.Api.Controllers.Common;
using RequestPortal.Application.Common;
using RequestPortal.Contracts.Request;
using RequestPortal.Domain.Entities;

namespace RequestPortal.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : AppControllerBase
    {

        private readonly IRequestService _requestService;

        public RequestController(
            IRequestService requestService)
        {
            _requestService = requestService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userId = GetUserId();

            return Ok(await _requestService.GetAllRequestsByUserId(userId));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            return Ok(await _requestService.GetRequestsById(ParseGuid(id)));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateRequestRequest request)
        {
            await _requestService.AddRequest(new Request(request.Theme, request.Description, GetUserId()));

            return Ok();
        }

        /*
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateRequestRequest request)
        {
            await _requestService.AddRequest(new Request(request.Theme, request.Description, GetUserId()));

            return Ok();
        }*/

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _requestService.DeleteRequest(ParseGuid(id));

            return Ok();
        }

    }
}
