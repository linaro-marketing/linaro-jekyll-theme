
# Site Settings

This page will list out any site settings that can/should be modified when using this Jekyll theme.

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

