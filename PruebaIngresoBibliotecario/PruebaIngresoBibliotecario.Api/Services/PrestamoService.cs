using AutoMapper;
using PruebaIngresoBibliotecario.Api.Models;
using PruebaIngresoBibliotecario.Api.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PruebaIngresoBibliotecario.Api.Services
{
    public class PrestamoService : IPrestamoService
    {
        private readonly IPrestamoRepository _prestamoRepository;
        public PrestamoService(IPrestamoRepository prestamoRepository)
        {
            _prestamoRepository = prestamoRepository;
        }
        public async Task<Prestamo> CreatePrestamoAsync(Prestamo prestamo)
        {
            CalculateFechaMaximaDevolucion(prestamo);
            return await _prestamoRepository.CreatePrestamo(prestamo);
        }

        public async Task<Prestamo> GetPrestamoAsync(Guid idPrestamo)
        {
            return await _prestamoRepository.GetPrestamo(idPrestamo);
        }

        public async Task<List<Prestamo>> GetAllPrestamosAsync( )
        {
            return await _prestamoRepository.GetAllPrestamos();
        }

        private void CalculateFechaMaximaDevolucion(Prestamo prestamo)
        {
            switch (prestamo.tipoUsuario){
                case TipoUsuarioPrestamo.AFILIADO:
                    {
                        prestamo.fechaMaximaDevolucion = GenerateDate(10);
                        break;
                    }

                case TipoUsuarioPrestamo.EMPLEADO:
                    {
                        prestamo.fechaMaximaDevolucion = GenerateDate(8);
                        break;
                    }

                case TipoUsuarioPrestamo.INVITADO:
                    {
                        prestamo.fechaMaximaDevolucion = GenerateDate(7);
                        break;
                    }
                default:
                    {
                        break;
                    }

            }
        }

        private DateTime GenerateDate(int daysToAdd)
        {
            DateTime today = DateTime.Today;
            //add 2 day per 5 days
            DateTime result = today.AddDays(daysToAdd + (daysToAdd / 5 * 2));
            
            if (result.DayOfWeek == DayOfWeek.Saturday)
            {
                result = result.AddDays(2);
            }
            else if (result.DayOfWeek == DayOfWeek.Sunday)
            {
                result = result.AddDays(1);
            }

            return result;
        }
    }
}
