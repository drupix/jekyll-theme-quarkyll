---
title: Forms
layout: page
classes: title-center-title-h1h2
menus:
  help:
    title: Forms
    weight: 5
    identifier: forms
---

<div class="title-center title-h1h2">
    <h1>Forms</h1>
</div>

<br/>

Forms provide the most common control styles used in forms, including input, textarea, select, checkbox, radio and switch.

## Form input

<div class="docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-label" for="input-example-1">Name</label>
      <input class="form-input" type="text" id="input-example-1" placeholder="Name">
    </div>
    <div class="form-group">
      <label class="form-label" for="input-example-2">Email</label>
      <input class="form-input" id="input-example-2" type="email" placeholder="Email">
    </div>
  </div>
</div>

<br/>

<div class="hl-code">
{% highlight html %}
<!-- form input control -->
<div class="form-group">
  <label class="form-label" for="input-example-1">Name</label>
  <input class="form-input" type="text" id="input-example-1" placeholder="Name">
</div>
{% endhighlight %}
</div>

## Form textarea

<div class="docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-label" for="input-example-3">Message</label>
      <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
    </div>
  </div>
</div>

<br/>

<div class="hl-code">
{% highlight html %}
<!-- form textarea control -->
<div class="form-group">
  <label class="form-label" for="input-example-3">Message</label>
  <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
</div>
{% endhighlight %}
</div>

## Form select

<div class="docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <select class="form-select">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
    <div class="form-group">
      <select class="form-select" multiple="">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
  </div>
</div>

<br/>

<div class="hl-code">
{% highlight html %}
<!-- form select control -->
<div class="form-group">
  <select class="form-select">
    <option>Choose an option</option>
    <option>Slack</option>
    <option>Skype</option>
    <option>Hipchat</option>
  </select>
</div>
{% endhighlight %}
</div>

## Form radio

<div class="docs-demo columns">
  <div class="column col-6 col-xs-12">
    <form>
      <div class="form-group">
        <label class="form-label">Gender</label>
        <label class="form-radio">
          <input type="radio" name="gender" checked=""><i class="form-icon"></i> Male
        </label>
        <label class="form-radio">
          <input type="radio" name="gender"><i class="form-icon"></i> Female
        </label>
      </div>
    </form>
  </div>
</div>

<br/>

<div class="hl-code">
{% highlight html %}
<!-- form radio control -->
<div class="form-group">
  <label class="form-label">Gender</label>
  <label class="form-radio">
    <input type="radio" name="gender" checked>
    <i class="form-icon"></i> Male
  </label>
  <label class="form-radio">
    <input type="radio" name="gender">
    <i class="form-icon"></i> Female
  </label>
</div>
{% endhighlight %}
</div>

## Form switch

<div class="docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-switch">
        <input type="checkbox"><i class="form-icon"></i> Send me emails with news and tips
      </label>
    </div>
    <div class="form-group">
      <label class="form-switch">
        <input type="checkbox" checked=""><i class="form-icon"></i> Send me emails with news and tips
      </label>
    </div>
  </div>
</div>

<br/>

<div class="hl-code">
{% highlight html %}
<!-- form switch control -->
<div class="form-group">
  <label class="form-switch">
    <input type="checkbox">
    <i class="form-icon"></i> Send me emails with news and tips
  </label>
</div>
{% endhighlight %}
</div>

## Form checkbox

<div class="docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox"><i class="form-icon"></i> Remember me
      </label>
    </div>
    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox" checked=""><i class="form-icon"></i> Remember me
      </label>
    </div>
  </div>
</div>

<br/>

<div class="hl-code">
{% highlight html %}
<!-- form checkbox control -->
<div class="form-group">
  <label class="form-checkbox">
    <input type="checkbox">
    <i class="form-icon"></i> Remember me
  </label>
</div>
{% endhighlight %}
</div>

## Horizontal forms

<p>If you want to have a horizontal form, add the <code>form-horizontal</code> class to the &lt;form&gt; container.
  And add the <code>col-&lt;1-12&gt;</code> and <code>col-xs/sm/lg/xl-&lt;1-12&gt;</code> class to the child elements for responsive form row layout.
</p>

<div class="docs-demo columns">
  <div class="column col-9 col-sm-12">
    <form class="form-horizontal" action="#forms">
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="input-example-4">Name</label>
        </div>
        <div class="col-9 col-sm-12">
          <input class="form-input" id="input-example-4" type="text" placeholder="Name">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="input-example-5">Email</label>
        </div>
        <div class="col-9 col-sm-12">
          <input class="form-input" id="input-example-5" type="email" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label">Gender</label>
        </div>
        <div class="col-9 col-sm-12">
          <label class="form-radio">
            <input type="radio" name="gender"><i class="form-icon"></i> Male
          </label>
          <label class="form-radio">
            <input type="radio" name="gender" checked=""><i class="form-icon"></i> Female
          </label>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label">Source</label>
        </div>
        <div class="col-9 col-sm-12">
          <select class="form-select" multiple="">
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-9 col-sm-12 col-ml-auto">
          <label class="form-switch">
            <input type="checkbox"><i class="form-icon"></i> Send me emails with news and tips
          </label>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="input-example-6">Message</label>
        </div>
        <div class="col-9 col-sm-12">
          <textarea class="form-input" id="input-example-6" placeholder="Textarea" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-9 col-sm-12 col-ml-auto">
          <label class="form-checkbox">
            <input type="checkbox"><i class="form-icon"></i> Remember me
          </label>
        </div>
      </div>
    </form>
  </div>
</div>

<br/>

<div class="hl-code">
{% highlight html %}
<form class="form-horizontal">
  <div class="form-group">
    <div class="col-3 col-sm-12">
      <label class="form-label" for="input-example-1">Name</label>
    </div>
    <div class="col-9 col-sm-12">
      <input class="form-input" type="text" id="input-example-1" placeholder="Name">
    </div>
  </div>
  <!-- form structure -->
</form>
{% endhighlight %}
</div>
