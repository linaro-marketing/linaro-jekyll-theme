
### Step 1 - Setup your site if not already setup

__Note: If you're reading these docs for a site that's already using the theme then you can skip this part.__

The first step when using this theme is to create your own Jekyll site based off of this theme.

### Step 2 - Create a new page file

Website pages are added as markdown files usually in a folder with a `README.md` file beneath to keep everything organised and to ensure content renders on GitHub too (e.g `/services/README.md` or `/services.md`). If your page mainly contains HTML then use the `.html` file extension.

### Step 2 - Add Jekyll front matter to your new page

The url/permalink for your page should be added to the `front matter` of your posts/pages (the section at the top of the file between the set of 3 dashes `---`) as the `permalink` so that your page url is exactly as you intended it to be. See below for an example of the front matter to add to your page. 

Each theme layout may have different front matter variables that are required so if in any doubt refer to the [layouts](#available-layouts) section of this documentation.. 

#### Available front matter options

Below is a table of the most common front matter variable to add to your page.

| Front Matter Option | Value | Description  | 
| ------ | ----------- | ----- |
| layout | post | Layout to be used for the page (use `default` if you're unsure) |
| keywords | hikey970, Arm, Linaro, Open Source | Used for the meta keywords tag by jekyll-seo-tag plugin |
| published | false | Set `published` to false if you want to add the page but not show it on the website. |
| title | My Awesome Post | The title of your page/post. Used in the `meta` tags and in layouts to display your page correctly. |
| description | This is an awesome post about your site... | The description of your page used as the `meta` description.|

#### Example front matter

```YAML
---
# Layout of your web page - see below for available layouts.
layout: jumbotron-container
# URL of your page
permalink: /about/
# Title of your page
title: About Us
# Description of your web page.
desc: |-
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
# Keywords that describe your page used as meta keywords.
tags: lorem, ipsum, web, page
jumbotron:
    carousel-images:
        - /assets/images/content/background-image1.jpg
        - /assets/images/content/background-image2.png
        - /assets/images/content/background-image3.jpg
---
Markdown content goes here.
```

### Step 2 - Add content to your page

Now you can add content to your page using `html` of `markdown`. You can find a markdown cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). 