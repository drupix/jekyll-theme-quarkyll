---
title: "Post: Image (Caption)"
categories:
  - Post Formats
tags:
  - image
  - Post Formats
  - Spectre.css
---

**This image is in a `<figure>` tag with `<figcaption>` inside.**

The optionnal `{: .img-responsive}` class is also added.

{% include base_path %}

{% capture fig_img %}
![Foo]({{ base_path }}/images/post-gallery/unsplash-gallery-image-3.jpg){: .img-responsive }
{% endcapture %}

<figure class="figure">
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption class="figure-caption">Photo from Unsplash.</figcaption>
</figure>
