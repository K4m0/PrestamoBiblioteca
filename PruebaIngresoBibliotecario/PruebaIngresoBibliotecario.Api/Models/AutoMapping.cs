using AutoMapper;
using PruebaIngresoBibliotecario.Api.ViewModels;

namespace PruebaIngresoBibliotecario.Api.Models
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<Prestamo, PrestamoViewModel>().ReverseMap();
            CreateMap<Prestamo, PrestamoResponseViewModel>();
        }
    }
}
