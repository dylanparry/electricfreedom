using System.Threading.Tasks;

namespace ElectricFreedom.Web.Api.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
