using System;

namespace ElectricFreedom.Core.Model
{
    public class Comment
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public string UserId { get; set; } // TODO: Replace this with a User property

        public DateTimeOffset Created { get; set; }

        public bool IsFlagged { get; set; }
    }
}
