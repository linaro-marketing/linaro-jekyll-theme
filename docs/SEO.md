# SEO

## Meta

### Keywords

Keywords will be added to the keywords meta tag in the head of the document if you specify the tags front matter key like the following:

```yaml
tags:
  - jekyll
  - note
  - theme
  - linaro-jekyll-theme
```

or

```yaml
tags: jekyll note theme linaro-jekyll-theme
```

### Description

You can add a page description which will be used for the description meta tag. If you don't provide a description for a page/post then the site description, located in the `_config.yml` file will be used. Since Google and other search engines limit the number of characters for your descriptions, keep your descriptions to around 160 characters.

Add a description to your page/post with:

```yaml
description: >
  Your page description goes here..
```

### Titles

Your page title will show in the tab of your browser. If you provide a page title then the format your page title will use is:

**Page Title - Site Title**

If you don't provide a page title, your title provided in `_config.yml` will be used.

In `_config.yml`:

```yaml
# Site Title
title: Linaro.org
```

In a page:

```yaml
title: About Us
```

The above would output a title of:

**About Us - Linaro.org**
