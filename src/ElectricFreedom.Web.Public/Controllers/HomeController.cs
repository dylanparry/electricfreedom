using Microsoft.AspNetCore.Mvc;

namespace ElectricFreedom.Web.Public.Controllers
{
    public class HomeController : Controller
    {
        public string Index()
        {
            return "Hello from the Public project";
        }
    }
}
