# Jumbo Jekyll Theme (v5.7.x)

This is an open source Jekyll theme built for use on the Linaro Jekyll static websites. This project aims to unify the styles and components of Linaro static websites and make it easier to replicate and deploy a new static site with enterprise features and quality.

## Demo Sites

__Websites using the theme__:

* [96Boards.org](https://www.96boards.org)
* [Linaro.org](https://www.linaro.org)
* [OP-TEE.org](https://www.op-tee.org)
* [DeviceTree.org](https://www.devicetree.org)
* [TrustedFirmware.org](https://www.trustedfirmware.org/)
* [Connect.linaro.org](https://connect.linaro.org)

## Features

A few of the main features that this theme offers:

* __Lazy loading__ of images using the [lazysizes.js/ls.unveilhook.js](https://github.com/aFarkas/lazysizes) libraries
* Diverse page header options including options for a _video_ background, lazy loaded  _responsive background image_ or _breadcrumb_ header
* _Nav.yml_ data file for navigation bar setup
* _footer.yml_ data file for page footer setup
* Optional _"Edit me on GitHub"_ buttons (useful for OSS projects)
* _Universal Navbar_ (useful feature for a group of related websites)
*  _jekyll-picture-tag_ plugin for generating responsive compressed images to improve end-user experience on slower connections.
* _flow_ layout - the simplest way to create responsive and awesome static website pages without knowing any code (works well with NetlifyCMS)
* SASS support from the [built-in sass](https://jekyllrb.com/docs/assets/) support from Jekyll
* Open links to an external website in a new tab (javascript snippet)
* _Copy to clipboard_ javascript snippet for blog post code blocks
* Netlify CMS support for the "flow" layout and website config files i.e settings.yml, nav.yml, footer.yml

### CSS / Fonts

* [Bootstrap 4](https://getbootstrap.com/docs/)
* [SASS](https://sass-lang.com/) based styles
* Page/Layout specific css bundles (you can specify the name of a `css-package` in the frontmatter of page)
* [Lato](https://fonts.google.com/specimen/Lato) Google font statically included
* [Fontello](http://fontello.com/) - Custom Icon fonts builder for static sites

### Javascript

* [jQuery JavaScript Library](https://jquery.com/)
* Popper JS - popup plugin used by Bootstrap 4
* Bootstrap 4 JS
* [clipboard.min.js](https://clipboardjs.com/)
* GDPR Compliant Cookie pop up with jquery.ihavecookies.js/jquery.cookie.js
* Clipboard.min.js for enabling users to copy code snippets from blog posts easily
* simple-jekyll-search for searching posts easily
* Owl Carousel for cross-platform content carousels
* [lazysizes.js / ls.unveilhook.js](https://github.com/aFarkas/lazysizes) (lazyloading of image/picture elements and css background images)
* [featherlight.js](https://noelboss.github.io/featherlight/) (ultra-lightweight lightbox)

## Contributions

We happy to consider any contributions that you may have whether bug fixes/features. Please submit a pull request with your changes and we will take a look.
