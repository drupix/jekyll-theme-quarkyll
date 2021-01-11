---
title: "Post: Image (Caption)"
categories:
  - Post Formats
tags:
  - image
  - Post Formats
  - Spectre.css
---

**This image is in a `<figure>` tag with `<figcaption>` inside.** GOGO

The optionnal `{: .img-responsive}` class is also added.

{% capture fig_img %}
![Foo]({{ "/images/post-gallery/unsplash-gallery-image-3.jpg" | relative_url }}){: .img-responsive }
{% endcapture %}

<figure class="figure">
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption class="figure-caption">Photo from Unsplash.</figcaption>
</figure>
