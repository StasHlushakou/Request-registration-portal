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
        public async Task<ActionResult<List<RequestDTO>>> Get()
        {
            var requestList = await _requestService.GetAllRequestsByUserId(GetUserId());

            var response = requestList.Select(r => new RequestDTO() { 
                Id = r.Id.ToString(),
                Theme = r.Theme,
                Description = r.Description,
            }).ToList();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RequestDTO>> GetById(string id)
        {
            var requestFromDb = await _requestService.GetRequestsById(ParseGuid(id), GetUserId());

            if (requestFromDb == null)
                throw new NotFoundException();

            var response = new RequestDTO()
            {
                Id = requestFromDb.Id.ToString(),
                Theme = requestFromDb.Theme,
                Description = requestFromDb.Description,
            };

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateUpdateRequest request)
        {
            await _requestService.AddRequest(new Request(request.Theme, request.Description, GetUserId()));

            return Ok();
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] CreateUpdateRequest request)
        {
            var requestFromDb = await _requestService.GetRequestsById(ParseGuid(id), GetUserId());

            if (requestFromDb == null) 
                throw new NotFoundException();

            requestFromDb.Theme = request.Theme;
            requestFromDb.Description = request.Description;

            await _requestService.UpdateRequest(requestFromDb);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var requestFromDb = await _requestService.GetRequestsById(ParseGuid(id), GetUserId());

            if (requestFromDb == null)
                throw new NotFoundException();

            await _requestService.DeleteRequest(requestFromDb.Id);

            return Ok();
        }

    }
}
