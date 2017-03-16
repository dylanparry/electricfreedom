using Xunit;
using System;

namespace ElectricFreedom.Core.Entities.Tests
{
  public class ReviewTests
  {
    [Fact]
    public void Summary_ReturnsCorrectValue_WhenTextIsLongerThanRequestedLength()
    {
      var sut = new Review()
      {
        Text = "<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>"
      };

      string summary = sut.Summary(5);

      Assert.Equal("<p>Vestibulum proin faucibus inceptos a…</p>", summary);
    }

    [Fact]
    public void Summary_ReturnsCorrectValue_WhenTextIsSameLengthAsRequestedLength()
    {
      var sut = new Review()
      {
        Text = "<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>"
      };

      string summary = sut.Summary(10);

      Assert.Equal("<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>", summary);
    }

    [Fact]
    public void Summary_ReturnsCorrectValue_WhenTextIsShorterThanRequestedLength()
    {
      var sut = new Review()
      {
        Text = "<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>"
      };

      string summary = sut.Summary(20);

      Assert.Equal("<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>", summary);
    }

    [Fact]
    public void Summary_RemovesAllHtmlElementsExceptParagraphs()
    {
      var sut = new Review()
      {
        Text = "<p>Vestibulum <b>proin</b> faucibus <i>inceptos</i> a parturient penatibus a id nam.</p>"
      };

      string summary = sut.Summary(Int32.MaxValue);

      Assert.Equal("<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>", summary);
    }

    [Fact]
    public void Summary_RemovesTrailingPunctuation_WhenTextIsLongerThanRequestedLength()
    {
      var sut = new Review()
      {
        Text = "<p>Vestibulum proin faucibus inceptos, a parturient penatibus a id nam.</p>"
      };

      string summary = sut.Summary(4);

      Assert.Equal("<p>Vestibulum proin faucibus inceptos…</p>", summary);
    }

    [Fact]
    public void Summary_RemovesExcessWhitespace()
    {
      var sut = new Review()
      {
        Text = "<p>Vestibulum proin   faucibus inceptos a parturient penatibus a id nam.</p>"
      };

      string summary = sut.Summary(Int32.MaxValue);

      Assert.Equal("<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>", summary);
    }

    [Fact]
    public void Summary_RemovesTabCharacters()
    {
      var sut = new Review()
      {
        Text = "<p>Vestibulum proin \tfaucibus inceptos a parturient penatibus a id nam.</p>"
      };

      string summary = sut.Summary(Int32.MaxValue);

      Assert.Equal("<p>Vestibulum proin faucibus inceptos a parturient penatibus a id nam.</p>", summary);
    }
  }
}
