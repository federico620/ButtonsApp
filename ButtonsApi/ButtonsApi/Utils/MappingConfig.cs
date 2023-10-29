using AutoMapper;
using ButtonsApi.Models;
using ButtonsApi.Models.Dtos;

namespace ButtonsApi.Utils
{
    public class MappingConfig : Profile
    {
        public MappingConfig()
        {
            CreateMap<Button, ButtonDto>().ReverseMap();
            CreateMap<Button, ButtonCreateDto>().ReverseMap();
        }
    }
}
