using ElectricFreedom.Core.Model.JoinTables;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
    public static partial class Configure
    {
        public static void ConfigureJoinTables(ModelBuilder modelBuilder)
        {
            // Artist <-> Tag
            modelBuilder.Entity<ArtistTag>(entity =>
            {
                // Table mapping
                entity.ToTable("artistTags");

                // Primary key
                entity.HasKey(artistTag => new { artistTag.ArtistId, artistTag.TagId });

                // ArtistTag -> Artist
                entity.HasOne(artistTag => artistTag.Artist)
                    .WithMany(artist => artist.ArtistTags)
                    .HasForeignKey(artistTag => artistTag.ArtistId);

                // ArtistTag -> Tag
                entity.HasOne(artistTag => artistTag.Tag)
                    .WithMany(tag => tag.ArtistTags)
                    .HasForeignKey(ArtistTag => ArtistTag.TagId);
            });

            // Article <-> Keyword
            modelBuilder.Entity<ArticleKeyword>(entity =>
            {
                // Table mapping
                entity.ToTable("articleKeywords");

                // Primary key
                entity.HasKey(articleKeyword => new { articleKeyword.ArticleId, articleKeyword.KeywordId });

                // ArticleKeyword -> Article
                entity.HasOne(articleKeyword => articleKeyword.Article)
                    .WithMany(article => article.ArticleKeywords)
                    .HasForeignKey(articleKeyword => articleKeyword.ArticleId);

                // ArticleKeyword -> Keyword
                entity.HasOne(articleKeyword => articleKeyword.Keyword)
                    .WithMany(keyword => keyword.ArticleKeywords)
                    .HasForeignKey(articleKeyword => articleKeyword.KeywordId);
            });
        }
    }
}
