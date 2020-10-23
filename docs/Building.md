# Linaro Static Websites

It is not 100% neccessary to build to site on your computer to submit updates but it's helpful if you want to see the updates to big changes before your submit your pull request. You can also trigger a staging build of the site by submititng a pull request to the [develop] branch of [this repo].

To build the site, you will need Docker installed on your computer. With that in place, go into the repository directory and run build-site.sh. More information about how to use this feature and the options available can be found on the build container's wiki.

# External end-users

To build your Jekyll site then please refer to the [official jekyll documentation](https://jekyllrb.com/docs/). Internally, we're using Docker to control our build environment. You can use our build container by following the guide on the jekyll-build-container [repo](https://github.com/linaro-its/jekyll-build-container) [wiki](https://github.com/linaro-its/jekyll-build-container/wiki). You will also need the build-site.sh script which can be found in any of the Linaro static website repositories on GitHub (example [here](https://github.com/Linaro/website/blob/develop/build-site.sh)).