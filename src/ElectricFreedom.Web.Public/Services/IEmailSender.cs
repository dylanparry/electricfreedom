using System.Threading.Tasks;

namespace ElectricFreedom.Web.Public.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
