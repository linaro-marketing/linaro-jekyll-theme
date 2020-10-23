# Google Analytics & Cookies

This theme ensures your sites are GDPR compliant by giving users to option to _not_ track their site usage. The jQuery.ihavecookies.js plugin allows us to enable cookies if the user explicitly consents with being tracked.

## Configuration

The following settings are required in the _config.yml file in order to display the Cookies popup correctly.

```yaml
google_analytics:
  enabled: true #Toggle the use of a Cookies popup
  cookies_popup_title: Cookies & Privacy Policy # Your Cookie Popup title
  # A description to display in your cookie popup
  cookies_popup_description: >
    Cookies enable you to use this website to the full extent and to personalize your experience on our sites. They tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches and give us insights into user behavior so we can improve our communications with you.
  privacy_url: /privacy/ #  The URL to your privacy policy
  code: UAXXXXXXB # Your Google Analytics Code
```

## Managing cookies

This theme uses a Jekyll include to allow your users to remove cookies and their consent once it has been set.

When using the flow layout you can use the custom_include format to display the _components/cookie_manager.html_ include inside of a container row.

Example:

```yaml
flow:
    - row: container_row
      sections:
        - format: custom_include
          source: components/cookie_manager.html
```
