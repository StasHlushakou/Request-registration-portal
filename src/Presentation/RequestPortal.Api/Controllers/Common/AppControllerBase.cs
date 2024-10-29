using Microsoft.AspNetCore.Mvc;
using RequestPortal.Application.Common;

namespace RequestPortal.Api.Controllers.Common
{
    public class AppControllerBase : ControllerBase
    {
        protected Guid GetUserId()
        {
            var id = HttpContext.Items["UserId"];

            return id != null ? (Guid)id : throw new UnauthorizedException(); ;
        }
        
        protected Guid ParseGuid(string id)
        {
            if (string.IsNullOrEmpty(id)) throw new InvalidInputDataException();

            if (!Guid.TryParse(id, out var guid)) throw new InvalidInputDataException();

            return guid;
        }

    }
}
