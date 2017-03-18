using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace ElectricFreedom.Web.Scripts.Tests
{
  public class ScriptsControllerTests
  {
    public class GetScript : IDisposable
    {
      // The DateTime to use for the test file 3rd April, 2015 at 21:32:04
      private readonly DateTime lastUpdate = new DateTime(2015, 4, 3, 21, 32, 4);
      private ScriptController controller;

      public GetScript()
      {
        // Mock the hosting environment
        var hostingEnvironment = new Mock<IHostingEnvironment>();
        hostingEnvironment.Setup(m => m.WebRootPath).Returns(Directory.GetCurrentDirectory());

        // Create the controller instance
        this.controller = new ScriptController(hostingEnvironment.Object);

        // Create a file to test
        File.Open($"{Directory.GetCurrentDirectory()}/test.js", FileMode.OpenOrCreate).Dispose();
        File.SetLastWriteTimeUtc($"{Directory.GetCurrentDirectory()}/test.js", this.lastUpdate);
      }

      public void Dispose()
      {
        // Delete the scripts file that we created in the constructor
        File.Delete($"{Directory.GetCurrentDirectory()}/test.js");
      }

      [Fact]
      public void Returns_A_RedirectResult()
      {
        var result = this.controller.GetScript("test");

        Assert.True(result is RedirectResult);
      }

      [Fact]
      public void Redirects_To_Correct_File()
      {
        RedirectResult result = (RedirectResult)this.controller.GetScript("test");

        Assert.Equal($"/test.js?{this.lastUpdate.ToString("yyyyMMddHHmmss")}", result.Url);
      }
    }
  }
}
