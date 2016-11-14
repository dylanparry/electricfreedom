using System.ComponentModel.DataAnnotations;

namespace ElectricFreedom.Web.Public.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
