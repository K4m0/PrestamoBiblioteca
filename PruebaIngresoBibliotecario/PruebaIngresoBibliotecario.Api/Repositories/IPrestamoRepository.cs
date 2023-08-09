using PruebaIngresoBibliotecario.Api.Models;
using System;
using System.Threading.Tasks;

namespace PruebaIngresoBibliotecario.Api.Repositories
{
    public interface IPrestamoRepository 
    {
        Task<Prestamo> CreatePrestamo(Prestamo prestamo);
        Task<Prestamo> GetPrestamo(Guid idPrestamo);
    }
}
