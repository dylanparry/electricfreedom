using System.Collections.Generic;
using ElectricFreedom.Core.Entities.JoinTables;

namespace ElectricFreedom.Core.Entities
{
  public class Tag
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public string Url { get; set; }

    public virtual ICollection<ArtistTag> ArtistTags { get; set; } // TODO: Remove this when Entity Framework Core supports Many-to-Many mappings
  }
}
