---
title: &title "Layout: Showcase Overlay with a light overlay, an Image and metas" # &title is a YAML anchor which can be *referenced later
hide_title: true
showcase:
  title: *title # *title is a YAML reference pointing to the &anchor earlier
  subtitle: "This post should display a showcase with a a light overlay and an image"
  image: /images/unsplash-image-7.jpg
  metas: true
  classes: [
    hero-medium,
    text-light,
    text-small,
    overlay-light
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

This post should display a **showcase with a light overlay color, an image and metas**, if the theme supports it

Non-square images can provide some unique styling issues.

This post tests overlay showcases.

```yaml
showcase:
  title: "Layout: Showcase Overlay with a light overlay, an Image and metas"
    subtitle: "This post should display a showcase with a a light overlay and an image"
  image: /images/unsplash-image-7.jpg
  metas: true
  classes: [
    hero-medium,
    text-light,
    text-small,
    overlay-light
  ]
```
