using System.Threading.Tasks;

namespace ElectricFreedom.Web.Scripts.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
