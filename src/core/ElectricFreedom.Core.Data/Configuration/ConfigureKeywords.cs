using ElectricFreedom.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
  public static partial class Configure
  {
    public static void ConfigureKeywords(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Keyword>(entity =>
      {
        // Table mapping
        entity.ToTable("keywords");

        // Primary key
        entity.HasKey(keyword => keyword.Id);

        // Name
        entity.Property(keyword => keyword.Name)
            .IsRequired()
            .HasMaxLength(50);
      });
    }
  }
}
