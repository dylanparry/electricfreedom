using System.Collections.Generic;
using ElectricFreedom.Core.Model.JoinTables;

namespace ElectricFreedom.Core.Model
{
  public class Tag
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public string Url { get; set; }

    public virtual ICollection<ArtistTag> ArtistTags { get; set; } // TODO: Remove this when Entity Framework Core supports Many-to-Many mappings
  }
}
