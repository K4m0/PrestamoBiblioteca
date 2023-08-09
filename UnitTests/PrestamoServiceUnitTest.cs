using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using PruebaIngresoBibliotecario.Api.Models;
using PruebaIngresoBibliotecario.Api.Repositories;
using PruebaIngresoBibliotecario.Api.Services;
using PruebaIngresoBibliotecario.Infrastructure;
using System;
using System.Threading.Tasks;

namespace UnitTests
{
    [TestFixture]
    public class Tests
    {
        private ServiceProvider _serviceProvider { get; set; }
        private IPrestamoService _prestamoService { get; set; }

        [SetUp]
        public void Setup()
        {
            var services = new ServiceCollection();
            services.AddTransient<IConfiguration>(sp =>
            {
                IConfigurationBuilder configurationBuilder = new ConfigurationBuilder();
                configurationBuilder.AddJsonFile("appsettings.json");
                return configurationBuilder.Build();
            });
            services.AddTransient<IPrestamoService, PrestamoService>();
            services.AddTransient<IPrestamoRepository, PrestamoRepository>();
            services.AddDbContext<PersistenceContext>(opt =>
            {
                opt.UseInMemoryDatabase("PruebaIngreso");
            });
            _serviceProvider = services.BuildServiceProvider();
            _prestamoService = _serviceProvider.GetService<IPrestamoService>();
            
        }

        [Test]
        public async Task CreatePrestamo()
        {
            Prestamo prestamo = new Prestamo()
            {
                identificacionUsuario = "5566223344",
                isbn = Guid.NewGuid(),
                tipoUsuario = TipoUsuarioPrestamo.AFILIADO
            };
            var createPrestamoResponse = await _prestamoService.CreatePrestamoAsync(prestamo);
            Assert.IsNotNull(createPrestamoResponse);
            Assert.Pass();
        }

        [Test]
        public async Task GetPrestamoById()
        {
            Prestamo prestamo = new Prestamo()
            {
                identificacionUsuario = "8855226644",
                isbn = Guid.NewGuid(),
                tipoUsuario = TipoUsuarioPrestamo.AFILIADO
            };
            var createPrestamoResponse = await _prestamoService.CreatePrestamoAsync(prestamo);
            Assert.IsNotNull(createPrestamoResponse);

            var prestamoResponse = await _prestamoService.GetPrestamoAsync(createPrestamoResponse.id);
            Assert.IsNotNull(prestamoResponse);
            Assert.Pass();
        }
    }
}