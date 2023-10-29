using AutoMapper;
using ButtonsApi.Models;
using ButtonsApi.Models.Dtos;
using ButtonsApi.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace ButtonsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ButtonController : ControllerBase
    {
        private readonly IButtonRepository _buttonRepository;
        private readonly IMapper _mapper;
        protected ApiResponse _response;

        public ButtonController(IButtonRepository buttonRepository, IMapper mapper)
        {
            _buttonRepository = buttonRepository;
            _mapper = mapper;
            _response = new ApiResponse();
        }

        [HttpGet]
        public async Task<ActionResult<ApiResponse>> GetAll()
        {
            try
            {
                IEnumerable<Button> buttons = await _buttonRepository.GetAll();
                _response.Result = _mapper.Map<IEnumerable<ButtonDto>>(buttons);
                _response.StatusCode = System.Net.HttpStatusCode.OK;
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Errors = new List<string>() { ex.ToString() };
                _response.Sucess = false;
            }
            return _response;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApiResponse>> Get(int id)
        {
            try 
            {
                if(id <= 0)
                {
                    _response.Sucess = false;
                    _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    return BadRequest(_response);
                }
                var button = await _buttonRepository.Get(x => x.Id == id);
                if(button == null)
                {
                    _response.Sucess = false;
                    _response.StatusCode = System.Net.HttpStatusCode.NotFound; 
                    return NotFound(_response);
                }
                else 
                {
                    _response.Result = _mapper.Map<ButtonDto>(button);
                    _response.StatusCode = System.Net.HttpStatusCode.OK;
                    return Ok(_response);
                }

            } 
            catch (Exception ex) 
            {
                _response.Errors = new List<string>() { ex.ToString() };
                _response.Sucess = false;
            }
            return _response;
        }

        [HttpPost]
        public async Task<ActionResult<ApiResponse>> Create()
        {
            try
            {
                var buttonCreate = new ButtonCreateDto() { Count = 0 };
                var button = _mapper.Map<Button>(buttonCreate);
                await _buttonRepository.Create(button);
                _response.StatusCode = System.Net.HttpStatusCode.OK;
                _response.Result = button; 
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Errors = new List<string>() { ex.ToString() };
                _response.Sucess = false;
            }
            return _response;
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<ApiResponse>> Update(int id)
        {
            try
            {
                if (id <= 0)
                {
                    _response.Sucess = false;
                    _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    return BadRequest(_response);
                }
                var button = await _buttonRepository.Get(x => x.Id == id);
                if (button == null)
                {
                    _response.Sucess = false;
                    _response.StatusCode = System.Net.HttpStatusCode.NotFound;
                    return NotFound(_response);
                }
                else
                {
                    button.Count++;
                    await _buttonRepository.Update(button);
                    _response.Result = _mapper.Map<ButtonDto>(button);
                    _response.StatusCode = System.Net.HttpStatusCode.OK;
                    return Ok(_response);
                }
            }
            catch (Exception ex)
            {
                _response.Errors = new List<string>() { ex.ToString() };
                _response.Sucess = false;
            }
            return _response;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ApiResponse>> Delete(int id)
        {
            try
            {
                if (id <= 0)
                {
                    _response.Sucess = false;
                    _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    return BadRequest(_response);
                }
                var button = await _buttonRepository.Get(x => x.Id == id);
                if (button == null)
                {
                    _response.Sucess = false;
                    _response.StatusCode = System.Net.HttpStatusCode.NotFound;
                    return NotFound(_response);
                }
                else
                {
                    await _buttonRepository.Delete(button);
                    _response.StatusCode = System.Net.HttpStatusCode.OK;
                    _response.Result = _mapper.Map<ButtonDto>(button);
                    return Ok(_response);
                }
            }
            catch (Exception ex)
            {
                _response.Errors = new List<string>() { ex.ToString() };
                _response.Sucess = false;
            }
            return _response;
        }
    }
}
