# CHANGELOG

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep a Changelog](http://keepachangelog.com/).



## Unreleased
---

### New

### Changes

### Fixes

### Breaks


## 5.1.0 - (2022-01-07)
---

### New
* Javascript to automtically switch users to the browser language if the user has not already set a preference


## 5.0.0 - (2022-01-05)

---

### New

- i18n multi-lingual support using the jekyll-polyglot plugin


## 4.3.0 - (2020-12-15)

---

### New

- Added OFI.js polyfill for object-fit css property
- Added new universal nav design
  - Social media icons can be included in the nav now.
  -

### Fixes

- Fixed object-fit issues in IE

## 4.2.0 - (2020-11-23)

---

### New

- Added a documentation layout. This will predominantly be used by the 96boards documentation
- Added the ability to simply provide a path to the navbar brand image and also specifiy an alt tag
- Added support for the use of a sticky tab bar. Provides per page sub navigation as a tabbed navbar row.
- Added breadcrumb background image support by setting `breadcrumb_banner` in your `_config.yml`.
- Added inner-image support to jumbotron header
- Added animated dropdown menu feature. The first dropdowns will show on hover.

### Fixes

- Added missing image alt text and aria labels

## 4.1.6 - (2020-11-16)

---

### Changes

- Adds custom_include support for feature blocks.

---

## 4.1.5 - (2020-11-10)

---

### Changes

- Include the meta tag for a posts image if strap_image is not used.

## 4.1.4 - (2020-11-01)

---

### Changes

- Fixed issues with breadcrumb rich snippets (schema.org)
- Added WebPage as the base schema type
- Fixed issues with blocks flow include
- Fixed issues with the members.html flow include

## 4.1.3 - (2020-11-01)

---

### Changes

- Removed limit on tags from the post.html layout. All tags now display (if enabled) on the post itself.
- Updated footer brand to better support custom URLs/alt text
- Updated docs

## 4.1.3 - (2020-11-01)

---

### Changes

- Added ability to toggle post tags output and limit the number of tags visible.

## 4.1.1 - (2020-11-01)

---

### Changes

- Tags bug fix for spaced/accented tags

## 4.1.0 - (2020-11-01)

---

### New

- Added tags support for posts! Can also manage multiple post categories.

## 4.1.0 - (2020-11-01)

---

### Changes

- Fixes issue with jumbotron include that means an empty array still renders a slider.
- Added truncate filter to featured post description in the display_latest_posts.html include.
