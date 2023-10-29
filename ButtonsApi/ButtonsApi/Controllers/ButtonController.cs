using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ButtonsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ButtonController : ControllerBase
    {

        [HttpGet]
        public string Get()
        {
            return "hola";
        }
    }
}
