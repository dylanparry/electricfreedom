using System.Collections.Generic;
using ElectricFreedom.Core.Entities.JoinTables;

namespace ElectricFreedom.Core.Entities
{
  public class Keyword
  {
    public int Id { get; set; }

    public string Name { get; set; }

    // Relationships:

    public virtual ICollection<ArticleKeyword> ArticleKeywords { get; set; } // TODO: Remove this when Entity Framework Core supports Many-to-Many mappings
  }
}
