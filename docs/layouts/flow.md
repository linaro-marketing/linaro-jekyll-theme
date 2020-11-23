# Adding Pages to your site

Adding a page to your static website couldn't be simpler with the help of the flow.html Jekyll layout that this theme provides. The layout allows you to choose from multiple content rows/sections built with bootstrap 4. Simplifying the process of building out static pages. This keeps content pages clean from HTML and also means pages are easily edited with a CMS such as NetlifyCMS.

## Page Jumbotron Headers

Custom page headers can be added to pages that using the `flow` layout. You can display one of either a Slider Header (using owl-carousel), a background image header, breadcrumb header or a standard jumbotron header. Complete examples of these are listed below:

### Slider Header

```yaml
jumbotron:
  class: home # Applied to the jumbotron itself
  inner_class: dotted # Applied to the each slides container.
  # List of the slides to display
  slider:
    - title: A feature-packed Jekyll theme # Title displayed as a h1 heading
      inner-image: /assets/images/your-inner-image.png # An image to be added above the main title.
      # Description text to be displayed on the slider
      description: >
        Your slides description
      title-class: big-title # Class applied to the heading
      image: /assets/images/test/background-image1.jpg # The background image to be used for the slider item
      image_alt: Your slider image alt for a11y
      # A list of "call to action" buttons to be displayed on your slide
      buttons:
        - title: View on GitHub
          url: https://github.com/linaro-marketing/jumbo-jekyll-theme
          icon: fa fa-github
    - title: Slide 2
      description: ""
      slide-style: "background-position-y: bottom;"
      # Same as the above slider example...
```

### Background Image Header

```yaml
jumbotron:
  class: text-center # Applied to the jumbotron itself
  inner_class: dotted # Applied to the each slides container.
  title: A feature-packed Jekyll theme # Title displayed as a h1 heading
  # Description text to be displayed on the slider
  description: >
    Your slides description
  image_alt: Your Awesome a11y ready alt tag
  image: /assets/images/test/background-image1.jpg # The background image to be used for your header.
  buttons:
    - title: View on Github
      icon: icon-github
      class: test
      url: https://github.com
```

### Standard Header with no background image

```yaml
jumbotron:
  class: text-center # Applied to the jumbotron itself
  inner_class: dotted # Applied to the each slides container.
  title: A feature-packed Jekyll theme # Title displayed as a h1 heading
  # Description text to be displayed on the slider
  description: >
    Your slides description
  buttons:
    - title: View on Github
      icon: icon-github
      class: test
      url: https://github.com
```

### Breadcrumb Header

For a breadcrumb header simply set breadcrumb: true in your page's front matter.

```yaml
breadcrumb: true
```

## Rows

There are multiple row types that you can utilise when structuring your page.

| Row Types          | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| main_content_row   | Outputs your pages' main content inside of a bootstrap 3 container |
| container_row      | Outputs your sections inside of a bootstrap container              |
| full_width_row     | Outputs your sections in a fluid container                         |
| custom_include_row | Allows you to specify a Jekyll include to be used as a row         |

### main_content_row

This row can be used to output the main content of your markdown file (the page content below the frontmatter ---). Your page content is added to a boostrap container.

```yaml
flow:
  - row: main_content_row
```

The above yaml (frontmatter) will add your page content (page.content) to it's own bootstrap row inside of a bootstrap container.

### container_row

This row type will output your sections inside of a bootstrap 3 container.

```yaml
flow:
  - row: container_row
    sections: ...
```

### full_width_row

This row type will output your sections inside of a `container-fluid` bootstrap container.

```yaml
flow:
  - row: full_width_row
    sections: ...
```

### custom_include_row

This row type allows you to include your own custom section with ease. Your custom include is added to a bootstrap 3 `container-fluid` container

```yaml
flow:
  - row: full_width_row
    sections: ...
```

## Sections

Each row can contain multiple sections. These sections are described below.

| Section Type   | Description                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title          | Outputs a `title` section.                                                                                                                                                                              |
| members        | Outputs a typical `members` section.                                                                                                                                                                    |
| block          | Outputs a block row. Closest core bootstrap 3 element is a `panel`. Closest Bootstrap 4 element would be a `card` element                                                                               |
| image          | Used to add a content image. Images are optimized for web using the jekyll_picture_tag plugin.                                                                                                          |
| buttons        | Outputs the array of bootstrap 3 `buttons` provided. A custom `icon/title/url` can also be provided.                                                                                                    |
| text           | Outputs a text column for a block of text in a section.                                                                                                                                                 |
| custom_include | Takes `source` which is the filename of a jekyll include.                                                                                                                                               |
| slider         | Outputs an owlCarousel based slider based on either a source \_data file or an array of items in the slider.                                                                                            |
| feature_block  | Outputs a text/image or slider feature block. The image/slider is placed inside of a col-sm-7 bootstrap 3 column and can pe positioned either to the left or right using the push/pull utility classes. |
| tabs           | Outputs a bootstrap 4 tab panel                                                                                                                                                                         |
| collapse       | Outputs a bootstrap 4 collapse panel - ideal for FAQ etc                                                                                                                                                |

Each section is rendered inside it's own bootstrap col-xs-12 column (with the exception of the custom section as it depends on the content of your custom jekyll include). The order your sections are added to the row's **items"** array is the order they are displayed on your page. Below is a break down of each section type with an example of the frontmatter options you can utilise.

### title

This section simplifies the addition of a title in your content row. Provide a size, text content and an optional css class (css classes are applied to the bootstrap column).

```yaml
sections:
  - format: title
    style: text-center # class to be applied to the surrounding column
    title_content:
      style: display-3 # class to be applied to the heading tag
      size: h2 # Size of the heading e.g h1, h2, h3, h4, h5
      text: Your Centered Heading
```

### members

This section adds an inline image row. Usually good for displaying current clients/members or your organisation/service.

Below is an example of a members section.

| Settings                   | Example                 | Limitations                                                                                                                                       |
| -------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| style                      | zoom grayscale          | The `zoom` style adds a css transformation on hover adding a zoom effect. `grayscale` adds a grayscale filter and on hover the filter is removed. |
| members_content.items      | see below               | Contains an array of members (see below for an example)                                                                                           |
| members_content.item_width | 3                       | This value is used to determine the `col-sm-` size. You can use any of the bootstrap defaults and `5ths`                                          |
| data_source                | members-section-example | Takes the name of a Jekyll data file and requires the same format as under content (shown below in example)                                       |

![members_Section](https://user-images.githubusercontent.com/4564433/60330874-4e058800-998b-11e9-90e5-daee449a2da8.png)

```yaml
- format: members
  #data_source: members-section-example
  style: zoom grayscale
  members_content:
    item_width: "3" #bootstrap col-sm- value e.g 3, 4, 5ths etc
    items:
      - name: Arm
        image:
          path: https://event.linaro.org/assets/images/sponsors/arm.jpg
          alt: Arm Logo
        url: https://github.com/linaro-marketing/jumbo-jekyll-theme
      - name: Packet
        image:
          path: https://event.linaro.org/assets/images/sponsors/packet.png
          alt: Packet Logo
        url: https://github.com/linaro-marketing/jumbo-jekyll-theme
      - name: Qualcomm Logo
        image:
          path: https://event.linaro.org/assets/images/sponsors/qualcomm.jpg
          alt: Qualcomm Logo Logo
        url: https://github.com/linaro-marketing/jumbo-jekyll-theme
      - name: Cannonical
        image:
          path: https://event.linaro.org/assets/images/sponsors/canonical.png
          alt: Cannonical Logo
        url: https://github.com/linaro-marketing/jumbo-jekyll-theme
```

### block

This section allows you to add content blocks to list out key features / items as you wish. You can specify a custom width for your blocks, background image, url and more.

![full_width_block_row](https://user-images.githubusercontent.com/4564433/60331519-c15bc980-998c-11e9-881b-5d646696ed86.png)
![block-row](https://user-images.githubusercontent.com/4564433/60331521-c15bc980-998c-11e9-8c32-2c4b9286abc1.png)

| Settings                         | Example        | Limitations                                                                                              |
| -------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------- |
| style                            | zoom grayscale | Add a css class to your block section                                                                    |
| block_section_content.blocks     | see below      | Contains an array of blocks (see below for an example)                                                   |
| block_section_content.item_width | 3              | This value is used to determine the `col-sm-` size. You can use any of the bootstrap defaults and `5ths` |

```yaml
sections:
  - format: block
    style: text-center text-white
    block_section_content:
      item_width: "4"
      blocks:
        # Repeat this section for each of your blocks
        # Title for your block element
        - title:
            # Size of your title
            size: "h3"
            # Text content for your title
            text: Block 1
          # Optional - Url used for anchor tag wrapping block.
          url: /about/
          # Optional - background image to be used for your block
          background_image: /assets/images/content/background-image1.jpg
          # Optional - text for your block element.
          text_content:
            text: >
              See our photos from event.
          # Optional - add bootstrap buttons to your block.
          buttons:
            # Repeat this section for each of your buttons if you have more than one.
            - title: More Details # Required - button title (text) .
              url: /flow/ # Required - button url
              icon: fa fa-arrow-right # Optional - add an icon element to your button this is the css class used.
              style: btn-primary # Optional - specifiy a class for your button. Defaults to btn-primary
```

### image

The image section allows you to add a single content image to your page using the jekyll_picture_tag plugin to output web optimized picture tags with webp image format support.

```yaml
sections:
  - format: image
    #style: #optional style for your image section
    alt: Your Image alt tag # required - alt tag for your image.
    size: 8 # optional - column size (centered) e.g a size of 8 will add your image to a col-sm-8 div with an offset of 2 to ensure it's centered.
    path: /assets/images/breadcrumb-image.jpg #requried - the full path to your image.
```

### buttons

This section adds a bootstrap column with the buttons you provide. Great channeling users to another page (call to action etc).

```yaml
sections:
  - format: buttons
    style: text-center # specify custom css classes to use
    buttons_content:
      # Repeat this section for each of your buttons if you have more than one.
      - title: More Details # Required - button title (text) .
        url: /about/ # Required - button url
        icon: fa fa-arrow-right # Optional - add an icon element to your button this is the css class used.
        # Optional - specifiy a class for your button. Defaults to btn-primary
        class: btn-danger
```

### text

Adds the specified text to a bootstrap column. Your text content can use markdown formatting as the `markdownfiy` Jekyll filter is applied to text content.

```yaml
sections:
  - format: text
    style: text-center # Optional css class to applied to section
    text_content:
      text: Some block of text to describe _something_ about such and such...
```

### custom_include

This section adds your custom Jekyll include to a boostrap container.

![custom_include_section](https://user-images.githubusercontent.com/4564433/60332457-c6ba1380-998e-11e9-95cd-ea4a6921b492.png)

```yaml
sections:
  - format: custom_include
    source: custom_include.html
```

### slider

This section allows you to easily add a slider (or carousel) to your page. The following settings can be used to add a new slider.

![slider_row](https://user-images.githubusercontent.com/4564433/60332447-c02b9c00-998e-11e9-809a-80424f823d56.png)

```yaml
sections:
  - format: slider
    style: newSlider #optional css class to apply to the encapsulating bootstrap column
    slider_content:
      lightbox_enabled: true
      seconds_per_slide: 5
      nav: true
      dots: false
      xs_items: 1
      sm_items: 3
      md_items: 6
      lg_items: 9
      # Content for the slider
      # Optional name of the data file to use for the slider source
      # data_source: example-carousel-data-source
      # A list of slider items
      items:
        # Image for the slider item
        - image: /assets/images/content/background-image1.jpg
          # Alt tag to use on the img element
          alt: Background Image
          # Title to use in conjunction with the slider item
          # This will add a bootstrap tooltip to the slider item containing the specified title.
          title: Background Image 1
        - image: /assets/images/content/background-image2.png
          alt: Background Image
          title: Background Image 1
        - image: /assets/images/content/background-image3.jpg
          alt: Background Image
          title: Background Image 1
```

### feature_block

The `feature_block` section adds unique content section divided into 7 (image or slider )/ 5 (text content) column widths. You can also toggle the position of the media (image/video) to alternate the position for repeated feature_blocks. See below for an example of a feature_block.

![feature_block_container](https://user-images.githubusercontent.com/4564433/60332425-b1dd8000-998e-11e9-9ee0-a7f57796a732.png)
![feature_block_full_width](https://user-images.githubusercontent.com/4564433/60332426-b1dd8000-998e-11e9-8ebb-b00e597f4244.png)

Below is a commented example of the feature*block section of your flow page \_frontmatter*.

```yaml
sections:
  - format: feature_block
    style: text-center text-white
    feature_block_content:
      # Position of your featured content. "left" or "right"
      position: "left"
      # Optional - specify a youtube video url to be used as featured content
      # type: "youtube_video"
      # video_content_url: https://www.youtube.com/watch?v=QH2-TGUlwu4
      # Optional - specify an image to be used as featured content
      # type: "image"
      # image_content_path: /assets/images/content/background-image1.jpg
      # Add a custom Jekyll include to the end of your feature block's content.
      custom_include: test/test_feature_block.html 
      # Optional - add an images slider to be used as featured content
      type: "slider"
      # Slider content - see the slider section details for more information on adding slider's
      slider_content:
        lightbox_enabled: true
        seconds_per_slide: 5
        nav: true
        dots: false
        xs_items: 1
        sm_items: 1
        md_items: 1
        lg_items: 1
        items:
          - image: /assets/images/content/background-image1.jpg
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image2.png
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image3.jpg
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image1.jpg
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image2.png
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image3.jpg
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image1.jpg
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image2.png
            alt: Background Image
            title: Background Image 1
          - image: /assets/images/content/background-image3.jpg
            alt: Background Image
            title: Background Image 1
      title: Feature Block
      text: >
        A feature block with a youtube video.
      buttons:
        - title: Button 1
          url: /about/
          style: btn-primary
        - title: Button 2
          url: /about/
          style: btn-primary
```

### tabs

```yaml
sections:
  - format: tabs
    style: #
    tabs:
      - title: Test
        content: |
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis > nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore > eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          - Test
          - Test
          - Test

          This is some more [content](/).
      - title: Test 2
        content: |
          This is some test tab content. 2

          - Test

          - Test

          - Test

          This is some more [content](/).
      - title: Test 3
        content: |
          This is some test tab content. 3

          - Test
          - Test
          - Test

          This is some more [content](/). 3
```

### collapse

```yaml
sections:
  - format: collapse
    style: #
    panels:
      - title: Test Panel Title
        content: |
          ## Test Panel Content

          Some other text

          - Bullet 1
          - Bullet 2
          - Bullet 3
      - title: Test Panel Title 2
        content: |
          ## Test Panel Content 2

          Some other text

          - Bullet 1
          - Bullet 2
          - Bullet 3
```
## Sticky Tab Bar

The sticky tab bar allows you to add sub navigation to a page. This was originally design for the 96Boards.org site which needed additional links on a per page basis.

To add the sticky tab bar to a page simply set this front matter in a flow layout based page.

```yaml
sticky_tab_bar_enabled: true
```
In order to define the tabs for a given page or section of your websites, add to either the page front matter directly or to a `_data/sticky_tab_bar.yml` Jekyll data file.


To you page front matter directly:

```yaml
sticky_tab_bar:
  - title: Home
    url: /
    #active: false toggle the active class 
  - title: Get Started
    url: /get-started/
```

or with the `_data/sticky_tab_bar.yml` data file:

```yaml
pages:
  - list:
      - title: Blog
        url: /blog/
        sub-pages: true
      - title: Flow Layout
        url: /flow/
        right: true
    urls: [/, /flow/]

```