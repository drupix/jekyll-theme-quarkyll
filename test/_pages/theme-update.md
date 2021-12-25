---
title: "Theme update"
layout: single
classes:  title-center title-h1h2
permalink: /theme-update/
toc: true
toc_sticky: true
---

### Step 1 - Update files

---

* Update **theme version**:
  * at top of `_layout/default.html` and `docs/_layout/default.html` files
  * in `showcase.showcase_items` markdown of `test/index.md` files
  * in `_includes/footer.html` file
  * in `README.md` file
    * **if necessary update other stuff in this file**
* Update the **CHANGELOG.md** file
  * add **Bug Fixes** and **Enhancements** for the new version
  * update the **Unreleased** section
* If necessary update the **LICENSE.txt**

### Step 2 - Update git

---

#### On GitHub.com

* Improve `forms` display, see [Markup: HTML Tags and Formatting]({% post_url 2013-01-11-markup-html-tags-and-formatting %})

### Step 3 - Update gem

---

* Update version in jekyll-theme-quark.gemspec file

#### On RubyGems.org

<i class="las la-hand-point-right"></i> See documentation on [Publishing to RubyGems.org](https://guides.rubygems.org/publishing/#publishing-to-rubygemsorg){: target="blank"}
{: .notices .info}

The simplest way to distribute a gem for public consumption is to use [RubyGems.org](https://rubygems.org/){: target="blank"}. Gems that are published to [RubyGems.org](https://rubygems.org/){: target="blank"} can be installed via the `gem install` command or through the use of tools such as Isolate or Bundler.

To begin, you’ll need to create an account on RubyGems.org. Visit the [sign up](https://rubygems.org/users/new){: target="blank"} page and supply an email address that you control, a handle (username) and a password.

After creating the account, use your email and password when pushing the gem. (RubyGems saves the credentials in ~/.gem/credentials for you so you only need to log in once.)

To publish version 0.1.0 of a new gem named ‘jekyll-theme-quarkyll’:

```plaintext
$ gem push jekyll-theme-quarkyll-0.1.0.gem
Enter your RubyGems.org credentials.
Don't have an account yet? Create one at https://rubygems.org/sign_up
   Email:   gem_author@example
Password:
Signed in.
Pushing gem to RubyGems.org...
Successfully registered gem: jekyll-theme-quarkyll (0.1.0)
```

### Step 4 - Test

---

#### Locally

<i class="las la-hand-point-right"></i> See documentation on [Publishing to RubyGems.org](https://guides.rubygems.org/publishing/#publishing-to-rubygemsorg){: target="blank"}
{: .notices .info}

The simplest way to distribute a gem for public consumption is to use...

#### Remote

The simplest way to distribute a gem for public consumption is to use...
