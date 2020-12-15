The `universal navbar` was a feature we added to the theme to provide a simple way for users to jump between are static websites. It's useful for companies that have multiple projects or departments that maintain their own website.

Add a `_data/universal_nav.yml` data file to get started. Toggle the display of the universal navbar in the main `_data/nav.yml` file.

```yaml
universal_nav: true
```
The contents of your 

```yaml
items:
  - active: true # Setting an item to active will ensure it is highlighted.
    title: Linaro
    url: "https://www.linaro.org/"
  - title: Connect
    url: "https://connect.linaro.org"
  - title: 96Boards
    url: "https://www.96boards.org"
    # Items that contain an icon will be used for the social media icons.
    # Icons are pulled from the themes fontello font.
  - title: Twitter
    icon: icon-twitter
    url: "https://twitter.com/LinaroOrg"
  - title: Facebook
    icon: icon-facebook
    url: "http://facebook.com/LinaroOrg"
  - title: LinkedIn
    icon: icon-linkedin
    url: "https://www.linkedin.com/company/1026961"
  - title: YouTube
    icon: icon-youtube
    url: "https://www.youtube.com/LinaroOrg"
    # Add a dropdown
  - options:
      - title: 96Boards.ai
        url: "https://www.96boards.ai"
      - title: Developer Cloud
        url: "https://linaro.cloud"
      - title: devicetree.org
        url: "https://www.devicetree.org"
      - title: OpenAMP
        url: "https://www.openampproject.org"
      - title: OP-TEE
        url: "https://www.op-tee.org"
      - title: Trusted Firmware
        url: "https://www.trustedfirmware.org/"
    hamburger_toggle: true
    title: Projects
```

Here are the related `sass` variables that should be added to `assets/css/app/overrides.scss`:

```sass
// Universal Navbar
$universal_navbar_height_padding: 0px;
$universal_navbar_text_color: #000;
$universal_navbar_active_text_hover_color: #fff;
$universal_navbar_icon_color: #fff;
$universal_navbar_bg_color: $primary;
$universal_navbar_active_text_color: #fff;
$universal_navbar_active_bg_color: #000;
```