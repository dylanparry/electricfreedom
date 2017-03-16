using ElectricFreedom.Core.Entities;

using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
  public static partial class Configure
  {
    public static void ConfigureArticles(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Article>(entity =>
      {
        // Table mapping
        entity.ToTable("articles");

        // Primary key
        entity.HasKey(article => article.Id);

        // Alternative key
        entity.HasAlternateKey(article => new { article.Month, article.Year, article.Url });

        // Url
        entity.Property(article => article.Url)
            .IsRequired()
            .HasMaxLength(100);

        // Created
        entity.Property(article => article.Created)
            .IsRequired();

        // Month
        entity.Property(article => article.Month)
            .IsRequired();

        // Year
        entity.Property(article => article.Year)
            .IsRequired();

        // Title
        entity.Property(article => article.Title)
            .IsRequired()
            .HasMaxLength(100);

        // Text
        entity.Property(article => article.Text)
            .IsRequired();

        // Type
        entity.Property(article => article.Type)
            .IsRequired();

        // IsPublished
        entity.Property(article => article.IsPublished)
            .IsRequired();

        // HasImage
        entity.Property(article => article.HasImage)
            .IsRequired();

        // TODO: This should be a shadow property with a User property instead
        // UserId
        entity.Property(article => article.UserId)
            .IsRequired();

        // Image relationship
        entity.HasOne(article => article.Image)
            .WithOne()
            .HasForeignKey<ArticleImage>(articleImage => articleImage.Id);
      });
    }
  }
}
