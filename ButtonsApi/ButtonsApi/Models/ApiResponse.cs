using System.Net;

namespace ButtonsApi.Models
{
    public class ApiResponse
    {
        public HttpStatusCode StatusCode { get; set; }
        public bool Sucess { get; set; } = true;
        public List<string>? Errors { get; set; }
        public object? Result { get; set; } 
    }
}
