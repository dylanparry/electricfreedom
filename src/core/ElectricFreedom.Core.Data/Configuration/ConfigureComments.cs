using ElectricFreedom.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace ElectricFreedom.Core.Data.Configuration
{
    public static partial class Configure
    {
        public static void ConfigureComments(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comment>(entity =>
            {
                // Table mapping
                entity.ToTable("comments");

                // Primary key
                entity.HasKey(comment => comment.Id);

                // Shadow properties
                entity.Property<int>("articleId");
                entity.Property<int>("parentId");

                // Text
                entity.Property(comment => comment.Text)
                    .IsRequired();

                // TODO: This should be a shadow property with a User property instead
                // UserId
                entity.Property(comment => comment.UserId)
                    .IsRequired()
                    .HasMaxLength(450);

                // Created
                entity.Property(comment => comment.Created)
                    .IsRequired();

                // IsFlagged
                entity.Property(comment => comment.IsFlagged)
                    .IsRequired();
            });
        }
    }
}
