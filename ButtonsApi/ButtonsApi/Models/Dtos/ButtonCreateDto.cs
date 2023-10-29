using System.ComponentModel.DataAnnotations;

namespace ButtonsApi.Models.Dtos
{
    public class ButtonCreateDto
    {
        [Required]
        public int Count { get; set; } = 0;
    }
}
