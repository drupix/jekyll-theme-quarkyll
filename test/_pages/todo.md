---
title: "To Do"
layout: single
classes:  title-center title-h1h2
permalink: /todo/
toc: true
toc_sticky: true
---

## Unreleased

### Global

---

* Remove duplicate project `quarkyll` from [github](https://github.com/drupix/quarkyll)
* Try to add colors options
  * Add a color switcher
* Check css naming convention:
  * [freeCodeCamp.org](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/) - CSS Naming Conventions that Will Save You Hours of Debugging
  * [Get BEM](http://getbem.com) -  Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development
* Improve *Icon Tweaks* colors in `_typography.scss`
* Make a graph/map with all `_layouts` and `_includes` to have a global vision of the structure
* Check all code containing `site.data.ui-text`
* Check if remove `_sass/theme/_filters.scss`, no more used as spectre filters are not used
* ~~Test [SSL with localhost with Jekyll](https://remotesynthesis.com/blog/running-ssl-localhost#ssl-with-localhost-with-jekyll)~~
* ~~Fix `notices` in `_sass/theme/_typography.scss` when the first line contains a title tag like `h1`, `h2`, `h3`, etc.~~
  * ~~Check also with other tags/class who can have margin/padding top~~
* ~~Replace everywhere **Header Image** with **Showcase** -> `showcase:image`~~
  * ~~see an example in [Layout: Showcase Image (External URL)]({% post_url 2012-03-15-layout-showcase-image-external %})~~
* ~~Fix colors if transparent header is set and there is no showcase image~~
* ~~Improve `blockquote` with a plugin ??? (see [Post: Quote]({% post_url 2010-02-05-post-quote %}))~~
* ~~Improve `img` by adding `photo-credit` (see [Post: Image (with Link)]({% post_url 2010-08-05-post-image-linked %}))~~
* ~~Replace all images on site/test site with custom ones~~
* ~~Add more test with both sidebars, see in [Layout: Sidebar Custom]({% post_url 2012-04-16-layout-sidebar-custom %})~~
* ~~Improve [Stylesheets for syntax highlighting](https://jekyllrb.com/docs/liquid/tags/#stylesheets-for-syntax-highlighting)~~
* ~~Replace html tag `<br />` with a backslash (`\`) at the end of a line to create a line break~~
* ~~Add a lightbox for images~~

### Theme scss

---

* Replace all html element with the class `.alert` with appropriate `.notices`
* Remove alert class (and file ?) in `_sasss/theme/_alert.scss`
* Check for `.alert` in `_help_pages/elements.html`

### Include Cache

---

* Replace appropriate `include filename.html` with `include_cached filename.html`, see [Jekyll Include Cache](https://github.com/benbalter/jekyll-include-cache)

### Layouts

---

* Try to manage sidebars in `_layouts/default.html`, now they are in both `_layouts/single.html` and `_layouts/archive.html`
* Check `_layouts/single.html` vs. `_layouts/post.html` that seems not used...

### Main menu

---

* Add more menu items, it will break the Header layout.

### Footer &nbsp;

---

* Check links in footer

### Home page

---

* Prepare text for Quarkyll Theme, Docs site and Test site

### Forms

---

* Improve `forms` display, see [Markup: HTML Tags and Formatting]({% post_url 2013-01-11-markup-html-tags-and-formatting %})

### Posts comments

---

* Check `include comments.html`   in `_layouts/single.html`
  * Includes `_includes/comments` and `_includes/comment` files are already prepared

### SEO `_includes/seo.html`

---

* Check and improve SEO, see in `_includes/seo.html`
* ~~Add `author` information...~~
* Check for `paginator.previous_page` and `paginator.next_page`
  * See here: [SEOs Are Breaking Pagination After Google Changed Rel=Prev/Next — Here’s How to Get It Right](https://ahrefs.com/blog/rel-prev-next-pagination/)

### Documentation

---

* Talk about Showcase trick, see above under **Showcase**
  * overlay: color, background, gradient, opacity
  * caption: color, background, opacity

## Done

### ~~Showcase~~

---

* ~~Check to add a caption in the showcase, (see [Layout: Showcase Image (Horizontal)]({% post_url 2012-03-15-layout-showcase-image-horizontal %}))~~
* ~~Add caption color and background as options, (see [Layout: Showcase Image (Horizontal)]({% post_url 2012-03-15-layout-showcase-image-horizontal %}))~~
* ~~Rename showcase -> content_items to showcase -> showcase_items~~

{: .notices .warning}
~~**WARNING** Showcase is used as `id` for the `showcase` section!~~

* ~~If an element has `showcase` has **id** it will display a background image (exactly like this)~~
  * ~~Could be fixed in `_config.yml` with Markdown Processing `kramdown:auto_ids:false`~~
    * ~~but if `kramdown:input:auto_ids` is set to `false` then **TOC (Auto generated table of contents)** will not works anymore... **MAKE A CHOICE !**~~

  **Fixed in `_sass/theme/_showcase.scss` by removing the hard coded `background-image` property**

### Posts

---

* ~~See [Post excerpts](https://jekyllrb.com/docs/posts/#post-excerpts)~~
* ~~Check css for page meta in `_includes/page__meta.html`~~
* ~~Add site variables for Social Share, see `_includes/social-share.html`~~
* ~~Video problems, see [Layout: Showcase Video]({% post_url 2017-01-23-layout-showcase-video %})~~
  * ~~see also in `_layouts/default.html` and `_includes/showcase_video.html`~~
* ~~Improve `figure` and `figcaption`, margin when floats, see [Markup: Image Alignment]({% post_url 2013-01-10-markup-image-alignment %})~~
* ~~Add styles for posts `footnotes`, see at bottom of [Layout: Showcase Image and Text Readability]({% post_url 2012-03-15-layout-showcase-image-text-readability %})~~

### ~~Author profile~~

---

* ~~Show/hide **Author profile links** as drop down depending on screen size, see [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes/blob/master/assets/js/_main.js) `// Follow menu drop down`~~
* ~~Check to remove `_includes/author-profile-custom-links.html` as it ihas been removed from `_includes/author-profile-author-urls.html`~~

### ~~Posts by Category~~

---

* ~~Check `back to top` link in `_layouts/categories.html`~~
* ~~Check for `grid` display~~
  * ~~defined in `_layouts/categories.html` as `items_layout`~~
  * ~~used in `_includes/archive-single.html` and `_includes/page__meta.html`~~

### ~~Posts by Tags~~

---

* ~~Check `back to top` link in `_layouts/tags.html`~~
* ~~Check for `grid` display~~
  * ~~defined in `_layouts/tags.html` as `items_layout`~~
  * ~~used in `_includes/archive-single.html` and `_includes/page__meta.html`~~

<!--
### Pages

Check...

### Tests

Check...
-->
