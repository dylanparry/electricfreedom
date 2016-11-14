using System.Threading.Tasks;

namespace ElectricFreedom.Web.Scripts.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
