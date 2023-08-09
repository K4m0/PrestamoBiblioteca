using PruebaIngresoBibliotecario.Api.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace PruebaIngresoBibliotecario.Api.ViewModels
{
    public class PrestamoViewModel
    {
        public Guid isbn { get; set; }
        public string identificacionUsuario { get; set; }
        [EnumDataType(typeof(TipoUsuarioPrestamo))]
        public TipoUsuarioPrestamo tipoUsuario { get; set; }
    }
}
