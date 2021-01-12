---
title: &title "Layout: Showcase Overlay with a dark overlay and an Image" # &title is a YAML anchor which can be *referenced later
hide_title: true
showcase:
  title: *title # *title is a YAML reference pointing to the &anchor earlier
  subtitle: "This post should display a showcase with a a dark overlay and an image"
  image: /images/unsplash-image-6.jpg
  #overlay_color: "#501e78"
  classes: [
    hero-medium,
    text-light,
    text-small,
    overlay-dark
  ]
categories:
  - Layout
  - Uncategorized
tags:
  - edge case
  - image
  - layout
  - showcase
---

This post should display a **showcase with a dark overlay color and an image**, if the theme supports it

Non-square images can provide some unique styling issues.

This post tests overlay showcases.

```yaml
showcase:
  title: "Layout: Showcase Overlay with a dark overlay and an Image"
  subtitle: "This post should display a showcase with a a dark overlay and an image"
  image: /images/unsplash-image-6.jpg
  classes: [
    hero-medium,
    text-light,
    text-small,
    overlay-dark
  ]
```
