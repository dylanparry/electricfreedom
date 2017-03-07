namespace ElectricFreedom.Core.Model.JoinTables
{
  public class ArtistTag
  {
    public int ArtistId { get; set; }
    public virtual Artist Artist { get; set; }

    public int TagId { get; set; }
    public virtual Tag Tag { get; set; }
  }
}
