# Site Settings

This page will list out any site settings that can/should be modified when using this Jekyll theme in the `_config.yml` file.

## Google Analytics

Google analytics can be added to your site by modifying the google->analytics section of the `_data/settings.yml` file. See the example below:

```YAML
google:
    analytics:
      production: UA-XXXXXXX-1
      staging: UA-XXXXXXX-1
```

The YAML above can be added to the `settings.yml` Jekyll data file. If you don't have a staging environment then omit and just add the value for production. When your site builds Jekyll will check to see if the site.production boolean is set to true

## Favicon's

Favicon's are an integral part of any site. Simple add the full path to your favicon in the `_data/settings.yml` file.

```YAML
favicon: /assets/images/favicon.png
```

## breadcrumb_schema

If this value is set to `true`, BreadcrumbList json schema will be added to the `<head>` of all pages (apart from /).

```yaml
breadcrumb_schema: true
```

## Tags

Tags can be enabled for posts by providing a default in the `_config.yml`. E.g:

```yaml
defaults:
  - scope:
      path: "_posts/blog"
    values:
      # Enable tags
      tags_enabled: true
```

Adding a default like the above will ensure that the tags are added to the display_latest_posts.html include (post index page) and the post layout.

You can also change the default number of tags to show in post index cards and the post layout with this setting in `_config.yml`:

```yaml
tag_limit: 10
```
