﻿using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace ElectricFreedom.Web.Scripts
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var host = new WebHostBuilder()
        .UseUrls("http://*:5003")
        .UseKestrel()
        .UseContentRoot(Directory.GetCurrentDirectory())
        .UseIISIntegration()
        .UseStartup<Startup>()
        .Build();

      host.Run();
    }
  }
}
