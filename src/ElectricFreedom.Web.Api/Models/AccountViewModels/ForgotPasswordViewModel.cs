using System.ComponentModel.DataAnnotations;

namespace ElectricFreedom.Web.Api.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
