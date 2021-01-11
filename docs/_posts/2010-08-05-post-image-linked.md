---
title: "Post: Image (with Link)"
categories:
  - Post Formats
tags:
  - image
  - Post Formats
  - Spectre.css
---

{% capture fig_img %}
![Foo](https://images.unsplash.com/photo-1527084605513-4bb2459c68f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1080&q=80)
{% endcapture %}

{% capture fig_caption %}
Photo by [T. Q.](https://unsplash.com/@tq_photos) on [Unsplash](https://unsplash.com/collections/1006365/animals)
{% endcapture %}

<figure class="figure">
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption class="figure-caption">{{ fig_caption | markdownify | remove: "<p>" | remove: "</p>" }}</figcaption>
</figure>
