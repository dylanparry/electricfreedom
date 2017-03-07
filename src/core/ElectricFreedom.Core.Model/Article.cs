using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Xml;
using ElectricFreedom.Core.Model.JoinTables;

namespace ElectricFreedom.Core.Model
{
  public class Article
  {
    public int Id { get; set; }

    public string Url { get; set; }

    public DateTimeOffset Created { get; set; }

    public int Month { get; set; }

    public int Year { get; set; }

    public string Title { get; set; }

    public string Text { get; set; }

    public string Type { get; set; }

    public bool HasImage { get; set; }

    public bool IsPublished { get; set; }

    public string UserId { get; set; } // TODO: Replace this with a User property

    /// <summary>
    /// Returns a summary of the article with the specified number of words
    /// </summary>
    /// <param name="count">The number of words to include in the summary</param>
    /// <returns>A String containing the article summary</returns>
    public string Summary(int count)
    {
      // Create an XML document from the review text with a dummy root element
      XmlDocument xml = new XmlDocument();
      xml.LoadXml(@"<root>" + this.Text + "</root>");

      // Get an array of words with all HTML tags stripped, split by whitespace with extra whitespace removed
      string[] words = xml.InnerText.Split(new char[0], StringSplitOptions.RemoveEmptyEntries);

      // The original length of the words array
      int length = words.Length;

      // Start the summary with a <p> tag
      StringBuilder sb = new StringBuilder("<p>");

      // Limit the length of the array
      if (words.Length > count)
      {
        Array.Resize(ref words, count);
      }

      // Join the words back together
      string summary = String.Join(" ", words);

      // End early if the array was shorter than the word count
      if (length <= count)
      {
        sb.Append(summary);
        sb.Append("</p>");

        return sb.ToString();
      }

      // Remove any punctuation from the end of the string
      summary = Regex.Replace(summary, @"\p{P}*$", String.Empty);

      // Append summary, an ellipsis, and close the <p> tag
      sb.Append(summary);
      sb.Append("…</p>");

      return sb.ToString();
    }

    // Relationships:

    public virtual ArticleImage Image { get; set; }
    public virtual ICollection<Comment> Comments { get; set; }
    public virtual ICollection<ArticleKeyword> ArticleKeywords { get; set; } // TODO: Remove this when Entity Framework Core supports Many-to-Many mappings
  }
}
