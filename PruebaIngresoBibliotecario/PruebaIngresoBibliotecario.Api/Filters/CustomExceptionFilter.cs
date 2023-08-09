using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace PruebaIngresoBibliotecario.Api.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            if (context.Exception is FormatException)
            {
                context.Result = new BadRequestObjectResult(new { Error = context.Exception.Message });
                context.ExceptionHandled = true;
            }
        }
    }
}
