using Microsoft.EntityFrameworkCore;
using PruebaIngresoBibliotecario.Api.Models;
using PruebaIngresoBibliotecario.Infrastructure;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaIngresoBibliotecario.Api.Repositories
{
    public class PrestamoRepository : IPrestamoRepository
    {
        private readonly PersistenceContext _persistenceContext;
        public PrestamoRepository(PersistenceContext persistenceContext)
        {
            _persistenceContext = persistenceContext;
        }
        public async Task<Prestamo> CreatePrestamo(Prestamo prestamo)
        {
            if (prestamo.tipoUsuario == TipoUsuarioPrestamo.INVITADO)
            {
                if(await _persistenceContext.Prestamo.AnyAsync(p => p.identificacionUsuario == prestamo.identificacionUsuario))
                {
                    return null;
                }
            }
            var dbResponse = await _persistenceContext.Prestamo.AddAsync(prestamo);
            await _persistenceContext.SaveChangesAsync();

            return dbResponse.Entity;
        }

        public async Task<Prestamo> GetPrestamo(Guid idPrestamo)
        {
            var prestamo = await _persistenceContext.Prestamo.Where(p => p.id == idPrestamo).FirstOrDefaultAsync();

            return prestamo;
        }

        

    }
}
