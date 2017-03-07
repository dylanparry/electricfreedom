using ElectricFreedom.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
  public static partial class Configure
  {
    public static void ConfigureReviews(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Review>(entity =>
      {
        // Table mapping
        entity.ToTable("reviews");

        // Primary key
        entity.HasKey(review => review.Id);

        // Shadow properties
        entity.Property<int>("albumId");

        // TODO: This should be a shadow property with a User property instead
        // UserId
        entity.Property(review => review.UserId)
            .IsRequired()
            .HasMaxLength(450);

        // Rating
        entity.Property(review => review.Rating)
            .IsRequired();

        // Text
        entity.Property(review => review.Text)
            .IsRequired();

        // Created
        entity.Property(review => review.Created)
            .IsRequired();

        // IsFlagged
        entity.Property(review => review.IsFlagged)
            .IsRequired();
      });
    }
  }
}
