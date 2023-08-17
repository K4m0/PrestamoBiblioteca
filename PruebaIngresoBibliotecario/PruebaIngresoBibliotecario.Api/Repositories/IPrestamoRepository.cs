using PruebaIngresoBibliotecario.Api.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PruebaIngresoBibliotecario.Api.Repositories
{
    public interface IPrestamoRepository 
    {
        Task<Prestamo> CreatePrestamo(Prestamo prestamo);
        Task<Prestamo> GetPrestamo(Guid idPrestamo);
        Task<List<Prestamo>> GetAllPrestamos();
    }
}
