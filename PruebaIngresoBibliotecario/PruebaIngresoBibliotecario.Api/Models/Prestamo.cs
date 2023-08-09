using System;
using System.ComponentModel.DataAnnotations;

namespace PruebaIngresoBibliotecario.Api.Models
{
    public enum TipoUsuarioPrestamo { AFILIADO = 1, EMPLEADO = 2, INVITADO = 3}
    public class Prestamo
    {
        [Key]
        public Guid id { get; set; }
        public Guid isbn { get; set; }
        public string identificacionUsuario { get; set; }
        public TipoUsuarioPrestamo tipoUsuario { get; set; }
        public DateTime fechaMaximaDevolucion { get; set; }
    }
}
