---
title: "Layout: Author Override"
author: John Frusciante
excerpt: "A post to test author overrides using a data file."
last_modified_at: 2020-12-10T14:39:21-04:00
---

Sites that may have content authored from various individuals can be accommodated by using [data files](https://jekyllrb.com/docs/datafiles/).

To attribute an author to a post or page that is different from the site author specified in `_config.yml`:

**Step 1.** Create `_data/authors.yml` and add authors using the following format. Anything variables found under `author` in `_config.yml` can be used (e.g. `name`, `bio`, `avatar`, `location`, social media profiles, etc.).

```yaml
# /_data/authors.yml

John Frusciante:
  name        : "John Frusciante"
  bio         : "How do you pronounce Frusciante?"
  location    : "Los Angeles, CA"
  avatar      : "/assets/images/bio-photo-jf.jpg"
  twitter     : "@JohnFrusciante" # used for meta twitter:creator
  links:
    - label: "Facebook"
      icon: "lab la-facebook-f"
      url: "https://www.facebook.com/Johnfrusciante"
    - label: "Twitter"
      icon: "lab la-twitter"
      url: "https://twitter.com/johnfrusciante"
    - label: "Tumblr"
      icon: "lab la-tumblr"
      url: "https://jfrusciantesite.tumblr.com/"
    - label: "Soundcloud"
      icon: "lab la-soundcloud"
      url: "https://soundcloud.com/johnfrusciante-music"

Jack White:
  name        : "Jack White"
  bio         : "What do you want, jewels? I am a very extravagant man."
  avatar      : "/assets/images/bio-photo-jw.jpg"
  links:
    - label: "Website"
      icon: "las la-link"
      url: "https://jackwhiteiii.com/"
    - label: "Facebook"
      icon: "lab la-facebook-f"
      url: "https://facebook.com/jackwhite"
    - label: "Twitter"
      icon: "lab la-twitter"
      url: "https://twitter.com/thirdmanrecords"
```

**Step 2.** Assign one of the authors in `authors.yml` to a post or page you wish to override the `site.author` with.

Example: To assign `John Frusciante` as an author for a post the following YAML Front Matter would be applied:

```yaml
---
author: John Frusciante
---
```
