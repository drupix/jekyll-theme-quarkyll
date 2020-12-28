---
title: "Post: Notices"
categories:
  - Post Formats
tags:
  - Post Formats
  - notices
---

A notice displays information that explains nearby content. Often used to call attention to a particular detail.

When using Kramdown `{: .notices}` can be added after a sentence to assign the `.notices` to the `<p></p>` element.

**Code:**

```markdown
{% raw %}**Changes in Service:** We just updated our [privacy policy](#) here to better service our customers. We recommend reviewing the changes.
{: .notices .warning}{% endraw %}
```

**Results:**

**Changes in Service:** We just updated our [privacy policy](#) here to better service our customers. We recommend reviewing the changes.
{: .notices .warning}

**More example:**

**Primary Notice:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. [Praesent libero](#). Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notices .primary}

<div class="notices" markdown="1">
**Primary Notice with code block:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. [Praesent libero](#). Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.

```html
<html>
  <body>Some body.<body>
</html>
```
</div>

**Info Notice:** Lorem ipsum dolor sit amet, [consectetur adipiscing elit](#). Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notices .info}

**Warning Notice:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Integer nec odio](#). Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notices .warning}

**Danger Notice:** Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notices .danger}

**Error Notice:** Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notices .error}

**Success Notice:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at [nibh elementum](#) imperdiet.
{: .notices .success}

Want to wrap several paragraphs or other elements in a notice? Using Liquid to capture the content and then filter it with `markdownify` is a good way to go.

```html
{% raw %}{% capture notice-2 %}
#### New Site Features

* You can now have cover images on blog pages
* Drafts will now auto-save while writing
{% endcapture %}{% endraw %}

<div class="notices">{% raw %}{{ notice-2 | markdownify }}{% endraw %}</div>
```

{% capture notice-2 %}
#### New Site Features - H4

* You can now have cover images on blog pages
* Drafts will now auto-save while writing
{% endcapture %}

<div class="notices">
  {{ notice-2 | markdownify }}
</div>

Or you could skip the capture and stick with straight HTML.

```html
<div class="notices">
  <h4>Message - H4</h4>
  <p>A basic message.</p>
</div>
```

<div class="notices">
  <h4>Message - H4</h4>
  <p>A basic message.</p>
</div>

Testing `Hn` title tags inside notices.

<div class="notices">
  <h1>Test h1 second title</h1>
  <p>A basic message.</p>
  <h2>Test h2 second title</h2>
  <p>A basic message.</p>
  <h3>Test h3 second title</h3>
  <p>A basic message.</p>
  <h4>Test h4 second title</h4>
  <p>A basic message.</p>
  <h5>Test h5 second title</h5>
  <p>A basic message.</p>
  <h6>Test h6 second title</h6>
  <p>A basic message.</p>
</div>
