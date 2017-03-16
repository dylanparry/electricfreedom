using ElectricFreedom.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
  public static partial class Configure
  {
    public static void ConfigureArtists(ModelBuilder modelBuilder)
    {
      // Table mapping
      modelBuilder.Entity<Artist>(entity =>
      {
        // Table mapping
        entity.ToTable("artists");

        // Primary key
        entity.HasKey(artist => artist.Id);

        // Alternative key
        entity.HasAlternateKey(artist => artist.Url);

        // Shadow properties
        entity.Property<int>("countryId")
            .IsRequired();

        // Url
        entity.Property(artist => artist.Url)
            .IsRequired()
            .HasMaxLength(100);

        // OrderingKey
        entity.Property(artist => artist.OrderingKey)
            .IsRequired()
            .HasMaxLength(100);

        // IsGroup
        entity.Property(artist => artist.IsGroup)
            .IsRequired();

        // FirstName
        entity.Property(artist => artist.FirstName)
            .HasMaxLength(50);

        // Name
        entity.Property(artist => artist.Name)
            .IsRequired()
            .HasMaxLength(50);

        // MBID
        entity.Property(artist => artist.Mbid)
            .HasMaxLength(36);

        // Created
        entity.Property(artist => artist.Created)
            .IsRequired();

        // AlternativeName
        entity.Property(artist => artist.AlternativeName)
            .HasMaxLength(50);

        // HasImage
        entity.Property(artist => artist.HasImage)
            .IsRequired();

        // Image relationship
        entity.HasOne(artist => artist.Image)
            .WithOne()
            .HasForeignKey<ArtistImage>(artistImage => artistImage.Id);
      });
    }

  }
}
