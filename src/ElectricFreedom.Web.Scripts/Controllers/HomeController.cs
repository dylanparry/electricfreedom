using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Scripts.Controllers
{
    public class HomeController : Controller
    {
        public string Index()
        {
            return "Hello from the scripts project";
        }
    }
}
