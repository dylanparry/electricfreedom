using System;
using Xunit;

namespace ElectricFreedom.Core.Entities.Tests
{
  public class ArtistTests
  {
    [Fact]
    public void DisplayName_ReturnsCorrectValue_WhenArtistIsGroup()
    {
      var sut = new Artist()
      {
        Name = "King Crimson",
        IsGroup = true
      };

      Assert.Equal("King Crimson", sut.DisplayName);
    }

    [Fact]
    public void DisplayName_ReturnsCorrectValue_WhenArtistIsNotGroup()
    {
      var sut = new Artist()
      {
        Name = "Anderson",
        FirstName = "Jon",
        IsGroup = false
      };

      Assert.Equal("Jon Anderson", sut.DisplayName);
    }

    [Fact]
    public void DisplayName_ReturnsCorrectValue_WhenArtistIsNotGroupAndHasNoFirstName()
    {
      var sut = new Artist()
      {
        Name = "Fish",
        IsGroup = false
      };

      Assert.Equal("Fish", sut.DisplayName);
    }

    [Fact]
    public void IndexName_ReturnsCorrectValue_WhenArtistIsNotGroup()
    {
      var sut = new Artist()
      {
        Name = "Anderson",
        FirstName = "Jon",
        IsGroup = false
      };

      Assert.Equal("Anderson, Jon", sut.IndexName);
    }

    [Fact]
    public void IndexName_ReturnsCorrectValue_WhenArtistIsNotGroupAndHasNoFirstName()
    {
      var sut = new Artist()
      {
        Name = "Fish",
        IsGroup = false
      };

      Assert.Equal("Fish", sut.IndexName);
    }

    [Fact]
    public void IndexName_ReturnsCorrectValue_WhenArtistIsGroup()
    {
      var sut = new Artist()
      {
        Name = "King Crimson",
        IsGroup = true
      };

      Assert.Equal("King Crimson", sut.IndexName);
    }

    [Fact]
    public void IndexName_ReturnsCorrectValue_WhenArtistIsGroupAndNameBeginsWithThe()
    {
      var sut = new Artist()
      {
        Name = "The Beatles",
        IsGroup = true
      };

      Assert.Equal("Beatles, The", sut.IndexName);
    }

    [Fact]
    public void IndexName_ReturnsCorrectValue_WhenArtistIsGroupAndNameBeginsWithLe()
    {
      var sut = new Artist()
      {
        Name = "Le Orme",
        IsGroup = true
      };

      Assert.Equal("Orme, Le", sut.IndexName);
    }

    [Fact]
    public void IndexName_ReturnsCorrectValue_WhenArtistHasAlternativeName()
    {
      var sut = new Artist()
      {
        Name = "Electric Light Orchestra",
        IsGroup = true,
        AlternativeName = "ELO"
      };

      Assert.Equal("Electric Light Orchestra (ELO)", sut.IndexName);
    }

    [Fact]
    public void Age_ReturnsCorrectValue_WhenBirthdayToday()
    {
      var sut = new Artist()
      {
        Born = DateTime.UtcNow.AddYears(-10)
      };

      Assert.Equal(10, sut.Age);
    }

    [Fact]
    public void Age_ReturnsCorrectValue_WhenBirthdayYesterday()
    {
      var sut = new Artist()
      {
        Born = DateTime.UtcNow.AddYears(-10).AddDays(-1)
      };

      Assert.Equal(10, sut.Age);
    }

    [Fact]
    public void Age_ReturnsCorrectValue_WhenBirthdayTomorrow()
    {
      var sut = new Artist()
      {
        Born = DateTime.UtcNow.AddYears(-10).AddDays(1)
      };

      Assert.Equal(9, sut.Age);
    }

    [Fact]
    public void Age_ReturnsNull_WhenBirthdayNotSpecified()
    {
      var sut = new Artist();

      Assert.Null(sut.Age);
    }

    [Fact]
    public void Age_ReturnsCorrectValue_WhenArtistDiedOnBirthday()
    {
      var sut = new Artist()
      {
        Born = new DateTime(1950, 06, 01),
        Died = new DateTime(2000, 06, 01)
      };

      Assert.Equal(50, sut.Age);
    }

    [Fact]
    public void Age_Returns_CorrectValue_WhenArtistDiedBeforeBirthday()
    {
      var sut = new Artist()
      {
        Born = new DateTime(1950, 6, 1),
        Died = new DateTime(2000, 5, 31)
      };

      Assert.Equal(49, sut.Age);
    }

    [Fact]
    public void Age_Returns_CorrectValue_WhenArtistDiedAfterBirthday()
    {
      var sut = new Artist()
      {
        Born = new DateTime(1950, 6, 1),
        Died = new DateTime(2000, 6, 2)
      };

      Assert.Equal(50, sut.Age);
    }
  }
}
