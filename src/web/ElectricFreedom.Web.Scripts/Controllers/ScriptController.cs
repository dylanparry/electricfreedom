using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Scripts
{
  public class ScriptController : Controller
  {
    private IHostingEnvironment hostingEnvironment;

    public ScriptController(IHostingEnvironment hostingEnvironment)
    {
      this.hostingEnvironment = hostingEnvironment;
    }

    [Route("~/{scriptName}")]
    public IActionResult GetScript(string scriptName)
    {
      FileInfo fileInfo = new FileInfo(this.hostingEnvironment.WebRootPath + $"/{scriptName}.js");

      if (fileInfo.Exists)
      {
        // Get the last updated time for the .js file
        DateTime lastUpdated = fileInfo.LastWriteTimeUtc;

        return Redirect($"/{scriptName}.js?" + lastUpdated.ToString("yyyyMMddHHmmss"));
      }

      return new NotFoundResult();
    }
  }
}
