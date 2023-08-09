using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using PruebaIngresoBibliotecario.Api.Filters;
using PruebaIngresoBibliotecario.Api.Models;
using PruebaIngresoBibliotecario.Api.Services;
using PruebaIngresoBibliotecario.Api.ViewModels;
using PruebaIngresoBibliotecario.Infrastructure;
using System;
using System.Threading.Tasks;

namespace PruebaIngresoBibliotecario.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrestamoController : ControllerBase
    {
        private readonly IPrestamoService _prestamoService;
        private readonly IMapper _mapper;
        public PrestamoController(IPrestamoService prestamoService, IMapper mapper)
        {
            _prestamoService = prestamoService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> PostPrestamo(PrestamoViewModel prestamoViewModel)
        {
            try
            {
                var prestamo = _mapper.Map<Prestamo>(prestamoViewModel);

                var prestamoResponse = await _prestamoService.CreatePrestamoAsync(prestamo);

                if (prestamoResponse != null)
                {
                    return Ok(_mapper.Map<PrestamoResponseViewModel>(prestamoResponse));
                }

                return BadRequest(new { mensaje = string.Format("El usuario con identificacion {0} ya tiene un libro prestado por lo cual no se le puede realizar otro prestamo", prestamo.identificacionUsuario) });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{idPrestamo}")]
        public async Task<IActionResult> GetPrestamo(Guid idPrestamo)
        {
            try
            {
                var prestamoResponse = await _prestamoService.GetPrestamoAsync(idPrestamo);

                if (prestamoResponse == null)
                    return NotFound(new { mensaje = string.Format("El prestamo con id {0} no existe", idPrestamo )});

                return Ok(prestamoResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }


}
