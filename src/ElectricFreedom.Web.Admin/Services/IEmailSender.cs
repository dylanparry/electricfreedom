using System.Threading.Tasks;

namespace ElectricFreedom.Web.Admin.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
