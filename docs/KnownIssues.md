# Known Issues

This page contains the details on any known issues or bugs that we are aware of.

## Rendering Liquid syntax on a post/page

On very rare occasions you may need render/output Liquid (or code that uses the same syntax as Liquid) to a post/page. If you need to do this make sure you escape the opening Liquid tag like shown below:

```liquid
{{ "{{ "{{" }} .... }}" }}
```

```liquid
{{ "{{ "{%" }}... %}" }}
```
