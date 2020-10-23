The navigation bar is built using the `nav.yml` Jekyll data file. The entire website navigation bar is maintained via this data file. Add your brand logo, pages, dropdowns and more to this file. I've added the current nav.yml file below with comments explaining which each section does.

```yaml
# Search Config
# Used for Linaro's static sites toggle the navigation search bar feature.
# You can use this feature and 
search:
    enabled: true
    label: Linaro
universal-nav: false
# Nav Brand Config
brand:
    text: Jumbo Jekyll Theme
    image: 
        enabled: false
        name: Linaro-Logo.svg
    url: /
# Navigation pages
pages:
    - title: Flow
      url: /flow/
    - title: Jekyll
      active_paths:
        - /new/
      options:
          - text: Includes
            url: /jekyll/includes/
    - title: Layouts
      options:
          - text: Default
            url: /layouts/default/
    - title: About
      options:
          - text: Overview
            url: /about/
          - text: Collaborate
            url: /collaborate/
          - text: Jekyll
    
    - title: CSS
      options:
          - text: Bootstrap
            url: /css/bootstrap/ 
    - title: JS
      options:
          - text: JQuery
            url: /js/jquery/
          - text: Bootstrap
            url: /js/bootstrap/
            
    - title: Blog
      url: /blog/
      active_paths:
        - /new/
    - title: Download
      url: /download/
```