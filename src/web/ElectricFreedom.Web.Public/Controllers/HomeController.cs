using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Public.Controllers
{
  public class HomeController : Controller
  {
    [Route("{*catchall}")]
    public IActionResult Index()
    {
      return View();
    }
  }
}
