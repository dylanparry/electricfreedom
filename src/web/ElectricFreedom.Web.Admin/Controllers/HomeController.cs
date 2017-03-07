using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Admin.Controllers
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
