using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Admin.Controllers
{
    public class HomeController : Controller
    {
        public string Index()
        {
            return "Hello from the Admin project";
        }
    }
}
