using ElectricFreedom.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
  public static partial class Configure
  {
    public static void ConfigureCountries(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Country>(entity =>
      {
        // Table mapping
        entity.ToTable("countries");

        // Primary key
        entity.HasKey(country => country.Id);

        // Name
        entity.Property(country => country.Name)
            .IsRequired()
            .HasMaxLength(100);

        // Demonym
        entity.Property(country => country.Demonym)
            .IsRequired()
            .HasMaxLength(100);

        // Code
        entity.Property(country => country.Code)
            .IsRequired()
            .HasMaxLength(2);

        // PrefixWithThe
        entity.Property(country => country.PrefixWithThe)
            .IsRequired();
      });
    }
  }
}
