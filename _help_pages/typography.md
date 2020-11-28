---
title: Typography
layout: page
classes: title-center-title-h1h2
menus:
  help:
    title: Typography
    weight: 2
    identifier: typography
---

<!-- ! Details on the full capabilities of Spectre.css can be found in the [Official Spectre Documentation](https://picturepan2.github.io/spectre/elements.html) -->

<div class="title-center title-h1h2">
    <h1>Typography</h1>
</div>

{% comment %}
{% notices :color => 'yellow' %}
Details on the full capabilities of Spectre.css can be found in the [Official Spectre Documentation](https://picturepan2.github.io/spectre/elements.html)
{% endnotices %}
{% endcomment %}

<div class="notices">
<p>Details on the full capabilities of Spectre.css can be found in the <a rel="noreferrer" href="https://picturepan2.github.io/spectre/elements.html">Official Spectre Documentation</a></p>
</div>

### Headings

# H1 Heading `40px`

## H2 Heading `32px`

### H3 Heading `28px`

#### H4 Heading `24px`

##### H5 Heading `20px`

###### H6 Heading `16px`

### Paragraphs

Lorem ipsum dolor sit amet, consectetur [adipiscing elit. Praesent risus leo, dictum in vehicula sit amet](#), feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.

Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.

<span class="dropcap">D</span>ropcaps are great to tell a story. Once upon a time, lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec risus neque, eget sagittis est. Nulla eget libero ligula, ac scelerisque sapien. Donec sit amet sapien purus, sit amet tristique nisi.<br>
You have also available emphasis classes like <span class="text-warning">**warning text**</span>, <span class="text-error">**error text**</span> and <span class="text-info">**information text**</span>. You can also use <em>emphasised text</em>, <strong>strong text</strong>, <abbr title="This is an abbr">abbreviations</abbr>, <del>deleted text</del> and obviously <a href="#">links</a>.

### Code

Cum sociis natoque penatibus et magnis dis `code element` montes, nascetur ridiculus mus.

<div class="hl-code">
{% highlight js %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}
</div>

Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.

### Markdown Semantic Text Elements

**Bold** `**Bold**`

_Italic_ `_Italic_`

~~Deleted~~ `~~Deleted~~`

`Inline Code` `` `Inline Code` ``

### HTML Semantic Text Elements

<abbr>I18N</abbr> `<abbr>`

<cite>Citation</cite> `<cite>`

<kbd>Ctrl + S</kbd> `<kbd>`

Text<sup>Superscripted</sup> `<sup>`

Text<sub>Subscxripted</sub> `<sub>`

<u>Underlined</u> `<u>`

<mark>Highlighted</mark> `<mark>`

<time>20:14</time> `<time>`

<var>x = y + 2</var> `<var>`

### Blockquote

> The advance of technology is based on making it fit in so that you don't really even notice it,
> so it's part of everyday life.
>
> <cite>- Bill Gates</cite>

### Unordered List

* list item 1
* list item 2
  * list item 2.1
  * list item 2.2
  * list item 2.3
* list item 3

### Ordered List

1. list item 1
1. list item 2
    1. list item 2.1
    1. list item 2.2
    1. list item 2.3
1. list item 3

### Table

| Name                        | Genre                         | Release date         |
| :-------------------------- | :---------------------------: | -------------------: |
| The Shawshank Redemption    | Crime, Drama                  | 14 October 1994      |
| The Godfather               | Crime, Drama                  | 24 March 1972        |
| Schindler's List            | Biography, Drama, History     | 4 February 1994      |
| Se7en                       | Crime, Drama, Mystery         | 22 September 1995    |

### Notices

The notices styles are actually provided by the `Quarkyll` plugin (module ??) but are useful enough to include here:

{% comment %}
{% notices %}
This is a warning notification without color parameter
{% endnotices %}

{% notices :color => 'yellow' %}
This is a warning notification
{% endnotices %}

{% notices :color => 'red' %}
This is a error notification
{% endnotices %}

{% notices :color => 'blue' %}
This is a default notification
{% endnotices %}

{% notices :color => 'green' %}
This is a success notification
{% endnotices %}
{% endcomment %}

<div class="notices">
<p>This is a default notification</p>
</div>

<div class="notices success">
<p>This is a success notification</p>
</div>

<div class="notices warning">
<p>This is a warning notification</p>
</div>

<div class="notices error">
<p>This is an error notification</p>
</div>
