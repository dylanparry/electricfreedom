using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Scripts
{
    public class ScriptsController : Controller
    {
        private IHostingEnvironment hostingEnvironment;

        public ScriptsController(IHostingEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment;
        }

        [Route("scripts/{scriptName}")]
        public IActionResult GetScript(string scriptName)
        {
            // Get the last updated time for the map.js file
            FileInfo fileInfo = new FileInfo(this.hostingEnvironment.WebRootPath + $"/scripts/{scriptName}.js");
            DateTime lastUpdated = fileInfo.LastWriteTimeUtc;

            return Redirect($"/scripts/{scriptName}.js?" + lastUpdated.ToString("yyyyMMddHHmmss"));
        }
    }
}
