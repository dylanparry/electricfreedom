using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Xml;

namespace ElectricFreedom.Core.Model
{
    public class Review
    {
        public int Id { get; set; }

        public string UserId { get; set; } // TODO: Is the user ID necessary? Can we have a User property instead?

        public int Rating { get; set; }

        public string Text { get; set; }

        public DateTimeOffset Created { get; set; }

        public bool IsFlagged { get; set; }

        /// <summary>
        /// Returns a summary of the review with the specified number of words
        /// </summary>
        /// <param name="count">The number of words to include in the summary</param>
        /// <returns>A String containing the review summary</returns>
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

        public virtual Album Album { get; set; }
    }
}
