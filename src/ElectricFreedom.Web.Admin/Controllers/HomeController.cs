using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Admin.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
