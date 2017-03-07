using ElectricFreedom.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
  public static partial class Configure
  {
    public static void ConfigureAlbums(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Album>(entity =>
      {
        // Table mapping
        entity.ToTable("albums");

        // Primary Key
        entity.HasKey(album => album.Id);

        // Alternative Key
        entity.HasAlternateKey("url", "artistId");

        // Shadow properties
        entity.Property<int>("artistId")
            .IsRequired();

        // Url
        entity.Property(album => album.Url)
            .IsRequired()
            .HasMaxLength(100);

        // Title
        entity.Property(album => album.Title)
            .IsRequired()
            .HasMaxLength(100);

        // ReleaseDate
        entity.Property(album => album.ReleaseDate)
            .IsRequired();

        // IsAccurateDay
        entity.Property(album => album.IsAccurateDay)
            .IsRequired();

        // IsAccurateMonth
        entity.Property(album => album.IsAccurateMonth)
            .IsRequired();

        // Type
        entity.Property(album => album.Type)
            .IsRequired();

        // Tracks
        entity.Property(album => album.Tracks)
            .IsRequired();

        // Created
        entity.Property(album => album.Created)
            .IsRequired();

        // HasImage
        entity.Property(album => album.HasImage)
            .IsRequired();

        // Image relationship
        entity.HasOne(album => album.Image)
            .WithOne()
            .HasForeignKey<AlbumImage>(albumImage => albumImage.Id);
      });
    }
  }
}
