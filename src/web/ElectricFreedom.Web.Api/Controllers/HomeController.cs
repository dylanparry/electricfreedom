using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Api.Controllers
{
  public class HomeController : Controller
  {
    public string Index()
    {
      return "Hello from the API project";
    }
  }
}
