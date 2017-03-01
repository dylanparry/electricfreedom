using ElectricFreedom.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
    public static partial class Configure
    {
        public static void ConfigureTags(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tag>(entity =>
            {
                // Table mapping
                entity.ToTable("tags");

                // Primary key
                entity.HasKey(tag => tag.Id);

                // Alternative key
                entity.HasAlternateKey(tag => tag.Url);

                // Name
                entity.Property(tag => tag.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                // Url
                entity.Property(tag => tag.Url)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}
