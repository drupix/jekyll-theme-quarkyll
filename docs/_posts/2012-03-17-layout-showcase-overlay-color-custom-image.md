---
title: &title "Layout: Showcase Overlay with custom transparent Background Fill" # &title is a YAML anchor which can be *referenced later
hide_title: true
showcase:
  title: *title # *title is a YAML reference pointing to the &anchor earlier
  subtitle: "This post should display a showcase with a custom transparent background color"
  overlay_color: "#05c800"
  overlay_opacity: 0.6
  image: /images/unsplash-image-6.jpg
  classes: [
    hero-medium,
    text-light,
    text-small,
    overlay-custom
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

This post should display a **showcase with a custom transparent background color**, if the theme supports it.

Non-square images can provide some unique styling issues.

This post tests overlay showcases.

```yaml
showcase:
  title: "Layout: Showcase Overlay with custom transparent Background Fill"
  subtitle: "This post should display a showcase with a custom transparent background color"
  overlay_color: "#05c800"
  overlay_opacity: 0.6
  image: /images/unsplash-image-6.jpg
  classes: [
    hero-medium,
    text-light,
    text-small,
    overlay-custom
  ]
```
