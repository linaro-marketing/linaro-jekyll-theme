# Adding a blog post

In order to add a blog post to your site copy an existing post from the `_posts` folder if one exists otherwise **create** a new `_posts` folder. Posts are best organised by `_posts/YEAR/MONTH` so add folders based on the year/month you are posting it in and if the folder doesn't exist create one.

- [Example Posts folder used on Linaro.org](https://github.com/Linaro/website/tree/master/_posts)

-----------

_Useful Links_:

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Rich Text to Markdown (Useful when writing a post as a Google Doc)](http://markitdown.medusis.com/)
- [CloudCannon Blogging Guide](https://learn.cloudcannon.com/jekyll/introduction-to-blogging/)

-----------

## Step 1 - Modify the post file name

The url(permalink) for your blog is based on the _title_ provided in the _filename_ e.g `2018-06-07-i2s-in-dragonboard410c.md` will have a url of `/blog/i2s-in-dragonboard410c/`. Separate the words in your title by **dashes** and _modify the date_ at the start of the filename as neccessary.

## Step 2 - Modify the post front matter

Modify the post's _frontmatter_. Values to modify are listed in the table below:

| Frontmatter Option | Description |
| ------------------ | ----------- |
| author | Set the username for the author of your blog post. If you have not already set up your blog's authors then see [this guide](AddingAuthors). |
| image | Set an image for use as the thumbnail/featured image. This value will also be used for the social media share image (when sharing a link to your post on social media (jekyll-seo-tag plugin takes care of this based on the image path) |
| tags (Optional) | Tags can be set on a post. These allow readers to filter posts down to a specific topic. This can also be useful when trying to pull posts of a specific topic into another website/service via JSON. |
| description (Optional) | Optional - Jekyll will automatically grab a post excerpt to use for the description. |

### Author

Enter an author's username. If you haven't already setup your blog authors then do so by following [this guide](AddingAuthors).

## Image

This value is used for the featured image displayed on your blog post and the image that is used when sharing the blog post on social media sites. The Jeyll theme comes with a responsive image plugin for generating/optimising resized versions of your image. A thumbnail is generated and used for the post index page.

> TL;DR - Provide a high resolution image (1920x1080) and try to keep the size as low as possible.

```yaml
image:
    path: /assets/images/blog/DragonBoard-UpdatedImages-front.png
    alt: Alt title for your image
```

Make sure that the image you add in this section of front matter is placed in the [/assets/images/](https://github.com/Linaro/website/tree/master/assets/images) folder. You can add to any folder suits but ensure the _path to your image is correct_.

> _Note:_ Please ensure that the file extension of your image is either PNG or JPG.

## Tags

Add your tags based on the post content.

```yaml
tags:
    - python
    - automation
    - selenium
    - scraper
    - bot
```

## Description

This is generated automatically by Jekyll but it's useful if that start of your post doesn't contain text useful for a meta description.

```yaml
description: >
    Your awesome description that will show up in search engine results. This is added to the meta description tag in the head of the HTML document.
```

## Step 3 - Add your post content

Write your post in Markdown; specifically the [Kramdown](https://kramdown.gettalong.org/) Markdown flavour.

### Adding images

Please use the following code snipppet to add an image to your blog post. Make sure to add the images that you include to [/assets/images/blog folder](https://github.com/96boards/website/tree/master/assets/images/blog).

```liquid
{% include image.html name="name-of-your-image.png" alt="The Alt text for your image" %}
```

You also align/scale your image using the following css classes.

|Class|Details|
|-----|-------|
|small-inline|Small image aligned to the left|
|small-inline right| Small image aligned to the right|
|medium-inline|Medium image aligned to the left|
|medium-inline right|Medium image aligned to the right|
|large-inline|Large image aligned to the left|
|large-inline right|Large image aligned to the right|

```liquid
{% include image.html name="name-of-your-image.png"  class="medium-inline" alt="The Alt text for your image" %}
```

Using this Jekyll include will allow your images to be lazy loaded and format the image HTML correctly.

### Adding code

We are using the rouge syntax highlighter to highlight your glorious code.

See the full list of languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).

### Adding Media/YouTube videos

To add a media element / YouTube video use the following Jekyll include.

```liquid
{% include media.html media_url="https://youtu.be/GFzJd0hXI0c" %}
```
