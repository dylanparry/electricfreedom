using System;
using System.Collections.Generic;
using System.Text;
using ElectricFreedom.Core.Model.JoinTables;

namespace ElectricFreedom.Core.Model
{
    public class Artist
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string OrderingKey { get; set; }

        public int? Formed { get; set; }

        public string Members { get; set; }

        public string PastMembers { get; set; }

        public string FirstName { get; set; }

        public DateTimeOffset? Born { get; set; }

        public DateTimeOffset? Died { get; set; }

        public string MemberOf { get; set; }

        public string PastMemberOf { get; set; }

        public bool IsGroup { get; set; }

        public string Name { get; set; }

        public string Biography { get; set; }

        public string Mbid { get; set; }

        public string LastfmSimilarArtists { get; set; }

        public DateTimeOffset? LastfmDate { get; set; }

        public DateTimeOffset Created { get; set; }

        public string AlternativeName { get; set; }

        public bool HasImage { get; set; }

        public string DisplayName
        {
            get
            {
                return $"{this.FirstName} {this.Name}".Trim();
            }
        }

        public string IndexName
        {
            get
            {
                StringBuilder result = new StringBuilder();

                if (this.IsGroup)
                {
                    // Handle group names

                    if (this.Name.StartsWith("The "))
                    {

                        result.Append(this.Name.Substring(4, this.Name.Length - 4));
                        result.Append(", The");
                    }
                    else if (this.Name.StartsWith("Le ")) // Italian for "the"
                    {
                        result.Append(this.Name.Substring(3, this.Name.Length - 3));
                        result.Append(", Le");
                    }
                    else
                    {
                        result.Append(this.Name);
                    }
                }
                else
                {
                    // Handle solo names

                    result.Append(this.Name);

                    if (!String.IsNullOrEmpty(this.FirstName))
                    {
                        result.Append(", ");
                        result.Append(this.FirstName);
                    }
                }

                // Adds alternative name if there is one
                if (!String.IsNullOrEmpty(this.AlternativeName))
                {
                    result.Append(" (");
                    result.Append(this.AlternativeName);
                    result.Append(")");
                }

                return result.ToString();
            }
        }

        public int? Age
        {
            get
            {
                if (!this.Born.HasValue)
                    return null;

                DateTimeOffset limit = this.Died ?? DateTimeOffset.UtcNow;
                int age = limit.Year - this.Born.Value.Year;
                if (limit < this.Born.Value.AddYears(age)) age--;
                return age;
            }
        }

        // Relationships:

        public virtual ICollection<ArtistTag> ArtistTags { get; set; } // TODO: Remove this when Entity Framework Core supports Many-to-Many mappings
    }
}
