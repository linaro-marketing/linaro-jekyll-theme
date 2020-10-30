Below is a table showing the available includes:

| Layout                                    | Description                                                                                                                                                                                                           |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ascii-art                                 | This is an optional include that includes the Linaro Sprinkle as Ascii art                                                                                                                                            |
| author-posts                              | The author-posts include outputs an author's posts based on page.username included in the \_authors/username.md collection objects.                                                                                   |
| breadcrumb                                | Includes a breadcrumb that's generated from the page path.                                                                                                                                                            |
| carousel-header                           | Includes a carousel background image header.                                                                                                                                                                          |
| css                                       | The css include adds the links to css packages which are currently compiled from the sass partials using the jekyll-assets plugin.                                                                                    |
| \_includes/blog/display_latest_posts.html | Displays the specified posts using the theme bootstrap 4 cards                                                                                                                                                        |
| disqus-comments                           | This include adds disqus comments to a page. site.data.settings.disqus.shortname should be customized to include the correct shortname for disqus.                                                                    |
| footer                                    | Includes the bootstrap footer which uses the footer.yml jekyll data file for adding content.                                                                                                                          |
| github-edit                               | Adds GitHub Edit buttons to a page based on data.settings.edit-on-github in jekyll settings.yml data file.                                                                                                            |
| google-analytics-script                   | Adds the Google Analytics javascript to the head of the web pages. To modify change the site.data.settings.google.analytics or site.data.settings.google.tag_manager value to the your analytics code e.g.            |
| google-analytics-script                   | Adds the Google Analytics javascript to the head of the web pages. To modify change the site.data.settings.google.analytics value to the your analytics code e.g.                                                     |
| gtm-script                                | Adds the Google Tag Manager javascript to the head of the web pages. To modify change the site.data.settings.google.tag_manager value to the your analytics code e.g.                                                 |
| gtm-no-script                             | Used in the base.html layout to add the noscript iframe for the Google Tag Manager                                                                                                                                    |
| head                                      | Includes the <head> code for the website.                                                                                                                                                                             |
| http2                                     | Adds http2 preload/prefetch links to resources based on page specific resources/resources set in the site.data.settings.http2 value.                                                                                  |
| image                                     | Used to include lazy loaded images in the markdown of your blog posts/pages. Currently used jekyll-assets to find the path of an image based on an image name. Will be moving to use the full image path soon.        |
| javascript                                | Includes the compressed/uglified js packages which are compliled using jekyll-assets                                                                                                                                  |
| jumbotron                                 | Adds the bootstrap jumbotron html to a page. Options for a carousel image header/video background header/breadcrumb/background image are available when using this include.                                           |
| linaro-404                                | Adds the Linaro 404 SVG                                                                                                                                                                                               |
| linaro-svg                                | Linaro logo as an SVG                                                                                                                                                                                                 |
| media                                     | Includes a responsive media embed. Useful for including YouTube videos in posts/pages                                                                                                                                 |
| nav                                       | Adds the Bootstrap navbar to a page. This include uses the nav.yml data file to add specified pages to the nav items. The universal nav is also include inside this jekyll include.                                   |
| pagination                                | Adds the pagination html for paginated jekyll collections/pages. Takes a path as a parameter e.g /news/:num/ where num is the paginated page number.                                                                  |
| post-series                               | Adds the post-series html to a blog post for linking to posts in the same series. Simply tag all posts in the same series with a series: value.                                                                       |
| post-sidebar                              | The sidebar which is included to the right of post. Gets the most recent/ random other blog posts.                                                                                                                    |
| post-tags                                 | Includes the post's tags in the sidebar.                                                                                                                                                                              |
| read_time                                 | Calculates a posts read time based on the length of the content.                                                                                                                                                      |
| responsive-image                          | Adds a responsive picture element utilising the jekyll-responsive-image plugin to regenerate images on site build                                                                                                     |
| schema                                    | Adds schema json-ld to the head of the page.                                                                                                                                                                          |
| sidebar                                   | Adds a sidebar using the Bootstrap stacked nav. This include uses the sidebar-nav.yml data file to build out the stacked nav's                                                                                        |
| sticky-tab-bar                            | Adds an affixed Bootstrap tab bar to a page. This looks for settings in the page frontmatter or the sticky-tab-bar.yml Jekyll data file.                                                                              |
| thumb                                     | Adds a responsive thumbnail image using the jekyll-repsonsive-image plugin.                                                                                                                                           |
| thumbnail_image                           | Adds a responsive thumbnail image using the jekyll-repsonsive-image plugin.                                                                                                                                           |
| universal-nav                             | Adds a universal navbar. We used this feature to link between our main static sites.                                                                                                                                  |
| \_includes/blog/tags.html                 | Renders a tag cloud and related posts.                                                                                                                                                                                |
| youtube                                   | Adds a lazy loaded youtube video.                                                                                                                                                                                     |
| flow                                      | Contains the logic for include content specified in the flow frontmatter section of a page that uses the flow layout. Basically just contains a bunch of `if` statements that include the relevant `jekyll _includes` |

## \_includes/blog/display_latest_posts.html

This include will render a list of posts based on the Jekyll category specified and optionally provide a post limit. You can use this include with the flow layout in the following way:

```yaml
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/display_latest_posts.html
        limit: 4 #Optionally provide a total number of posts to display. For this to render well use an even number.
        category: blog # Provide a post category to disp
```

You can also use this include to display an array of posts from within your own includes/layouts:

```liquid
{% include blog/display_latest_posts.html posts=my_posts_array %}
```

## \_includes/blog/tags.html

This include is used to render a tag cloud and the related posts for each tag. You can specify a post category and only the tags for that category will render. Useful for sites that have a `News` and `Blog` section.

An example of how to use this include with the flow layout.

```yaml
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/tags.html
        category: blog
```

And an example page using this:

```yaml
---
title: Tagged Blog Posts
permalink: /blog/tags/
description: >
  Filter blog posts by tag.
jumbotron:
  title: Tagged Posts
  description: >
    Find tagged posts here.
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/tags.html
        category: blog
---

```
