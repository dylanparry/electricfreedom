using System.Threading.Tasks;

namespace ElectricFreedom.Web.Admin.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
