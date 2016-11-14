using System.ComponentModel.DataAnnotations;

namespace ElectricFreedom.Web.Admin.Models.AccountViewModels
{
    public class ExternalLoginConfirmationViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
