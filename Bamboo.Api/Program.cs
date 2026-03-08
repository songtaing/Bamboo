
using Bamboo.Shared.Transformers;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Scalar.AspNetCore;

namespace Bamboo.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers(opts =>
        {
            opts.Conventions.Add(new RouteTokenTransformerConvention(new KebabCaseParameterTransformer()));
        });

        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApi();
        builder.Services.AddEndpointsApiExplorer();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
            app.MapScalarApiReference();

        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
