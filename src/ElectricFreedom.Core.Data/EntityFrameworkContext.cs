using ElectricFreedom.Core.Data.Configuration;
using ElectricFreedom.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data
{
    public class EntityFrameworkContext : DbContext
    {
        public EntityFrameworkContext(DbContextOptions<EntityFrameworkContext> options) : base(options) { }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Keyword> Keywords { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Tag> Tags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure entities
            Configure.ConfigureAlbums(modelBuilder);
            Configure.ConfigureArticles(modelBuilder);
            Configure.ConfigureArtists(modelBuilder);
            Configure.ConfigureComments(modelBuilder);
            Configure.ConfigureCountries(modelBuilder);
            Configure.ConfigureKeywords(modelBuilder);
            Configure.ConfigureReviews(modelBuilder);
        }
    }
}
