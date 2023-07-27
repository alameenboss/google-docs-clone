using Google.Docs.Clone.Repository.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace Google.Docs.Clone.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                var host = CreateHostBuilder(args).Build();

                IWebHostEnvironment env = host.Services.GetRequiredService<IWebHostEnvironment>();
                var config = new ConfigurationBuilder()
                        .SetBasePath(env.ContentRootPath)
                        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                        .AddEnvironmentVariables()
                        .Build();

                using (var client = new SQLiteDbContext(config))
                    client.Database.Migrate();

                host.Run();
            }
            catch (Exception ex)
            {
            }
            finally
            {
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}