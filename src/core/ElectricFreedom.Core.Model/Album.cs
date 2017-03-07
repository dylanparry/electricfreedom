using System;
using System.Collections.Generic;

namespace ElectricFreedom.Core.Model
{
  public class Album
  {
    public int Id { get; set; }

    public string Url { get; set; }

    public string Title { get; set; }

    public DateTimeOffset ReleaseDate { get; set; }

    public bool IsAccurateDay { get; set; }

    public bool IsAccurateMonth { get; set; }

    public string Type { get; set; }

    public string Tracks { get; set; }

    public string MainCredits { get; set; }

    public string SupportingCredits { get; set; }

    public string Description { get; set; }

    public bool HasImage { get; set; }

    public DateTimeOffset Created { get; set; }

    // Relationships:

    public virtual Artist Artist { get; set; }
    public virtual AlbumImage Image { get; set; }
    public virtual ICollection<Review> Reviews { get; set; }
  }
}
