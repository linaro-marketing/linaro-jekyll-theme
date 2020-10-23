
### Jumbotron Layout

If you are using a layout that contains `jumbotron` then you can choose to display an image carousel header, standard background image header or a simple breadcrumb.

#### Jumbotron Settings

With the jumbotron layouts you can add a title, sub title and buttons to your header through changing your pages' front matter. 

The jumbotron `title` can be modified by changing the title value in the page front matter:

```yaml
---
title: Your Page Title (and jumbotron title)
...
---
```

The jumbotron `sub title`/`description` can be modified by changing the description value in the page front matter:

```yaml
---
...
description: >-
    Your Page description (and jumbotron description/sub title)
...
---
```

The jumbotron `buttons` can be added with the following front matter:

```yaml
---
...
jumbotron:
    ...
    buttons:
        - title: Learn More
          url: /about/
          icon: fa fa-github
          ...
...
---
```
The above should hopefully be fairly self explanatory other than the icon value which should be the icon class for a Font Awesome 4.7 Icon. For all available icons [click here](https://fontawesome.com/v4.7.0/icons/). 


#### Background Image Carousel

If you would like to display an image carousel for your page then add the following front matter to your page:

```yaml
---
...
jumbotron:
    ...
    carousel-images:
        - /assets/images/content/background-image1.jpg
        - /assets/images/content/background-image2.png
        - /assets/images/content/background-image3.jpg
    ...
...
---
```
Add as many images here as you would like. Even though these images are loaded lazily, try and make sure the images have been optimized as large images will increase the page load time. Also try to ensure the resolution of these images are fairly high.


#### Background Image

```yaml
---
...
jumbotron:
    ...
    background-image: /assets/images/content/background-image1.jpg
    ...
...
---
```
Here you can add image to be used an the background image of the jumbotron. Try and make sure the image has been compressed/optimized as large images will increase the page load time. Also try to ensure the resolution of these images are fairly high.


#### Slider Jumbotron

You can add an owl carousel based jumbotron using the following front matter settings:

```yaml
---
jumbotron:
    slider:
        slides:
            # Title of your Slide
            - title: Accelerating deployment of Arm-based solutions
            # CSS class for your slide title - not required.
              title-class: big-title
            # Slide inline style="" settings - useful for setting background positions
              slide-style: "background-position-y: bottom;"
            # Adds the overlay class to slide
              darken: true
            # The path to the image you'd like to use for the slide
              image: https://www.linaro.org/assets/images/content/hkg18-tech-banner.jpg
            - title: Industry leaders to present Open Source on Arm insights at Linaro Connect Bangkok 2019
              description: Linaro Ltd, the open source collaborative engineering organization developing software for the Arm® ecosystem, announced today the keynote speakers for Linaro Connect Bangkok 2019.
              darken: true
              slide-style: "background-position-y: bottom;"
              image: https://staging.linaro.org/assets/images/content/bkk19-website-banner.png
              # Adds buttons as <a href="URL" class="btn btn-primary">TITLE</a> after the description
              buttons:
                - title: Learn more
                  url: https://www.linaro.org/news/industry-leaders-to-present-open-source-on-arm-insights-at-linaro-connect-bangkok-2019/
---
```

__Note__: The /assets/js/app/main.js theme file must be included since this instantiates the owl carousel if it exists.

