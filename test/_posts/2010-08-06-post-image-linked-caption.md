---
title: "Post: Image (Linked with Caption)"
categories:
  - Post Formats
tags:
  - image
  - Post Formats
  - Spectre.css
---

**This image is in a `<figure>` tag with `<figcaption>` inside.**

The optionnal `{: .img-responsive}` class is also added.

<!-- {% capture fig_img %}
[![Foo](https://images.unsplash.com/photo-1513183084702-407ba711540d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1080&q=80)](https://unsplash.com/)
{% endcapture %} -->

{% capture img_resp %}
![Foo](https://images.unsplash.com/photo-1513183084702-407ba711540d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1080&q=80){: .img-responsive}
{% endcapture %}

{% capture fig_img %}
[{{ img_resp }}](https://unsplash.com/)
{% endcapture %}

{% capture fig_caption %}
Image with a caption.
{% endcapture %}

<figure class="figure">
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption class="figure-caption">{{ fig_caption | markdownify | remove: "<p>" | remove: "</p>" }}</figcaption>
</figure>
