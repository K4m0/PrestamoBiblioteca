﻿using PruebaIngresoBibliotecario.Api.Models;
using System;
using System.Threading.Tasks;

namespace PruebaIngresoBibliotecario.Api.Services
{
    public interface IPrestamoService
    {
        Task<Prestamo> CreatePrestamoAsync(Prestamo prestamo);
        Task<Prestamo> GetPrestamoAsync(Guid idPrestamo);
    }
}
