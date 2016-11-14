using System.Threading.Tasks;

namespace ElectricFreedom.Web.Public.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
