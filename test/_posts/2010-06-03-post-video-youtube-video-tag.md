---
title: "Post: Video (YouTube) video tag"
categories:
  - Post Formats
tags:
  - Post Formats
  - video
---

## Using `include` tag with custom `video` template

**Input:**

```liquid
{% raw %}
{% include video id="lDi9uFcD7XI" provider="youtube" %}
{% endraw %}
```

**Output:**

```html
<div class="video-responsive">
  <iframe ...>...</iframe>
</div>
```

{% include video id="lDi9uFcD7XI" provider="youtube" %}
