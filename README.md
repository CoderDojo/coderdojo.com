# coderdojo.com

> CoderDojo Main Site 

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate


For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
```
## Translations

If you like to translate, please do so on [crowdin].
Translations are pulled regularly from [crowdin] and commited in this repo. Please be aware that locales other than en_US will be overwritten in production.

[crowdin]: https://crowdin.com/project/coderdojo-com

If a new language is added on crowdin, you will need to add it into the [update-trads.sh](./update-trads.sh) script, get that reviewed, merge it, then build and publish the container as below.  There is a regular Cron job run on the Zen Kubernetes platform which triggers the above pull from crowdin and commit to this repo.

When the cron runs and adds any new languages to the repository, (look in the [locales](./locales) folder), you will need to edit [nuxt.config.js](./nuxt.config.js) to add this to the 'nuxt-i18n' locales section.

If the language is also right-to-left, you will need to update [typography.scss](./assets/typography.scss) to set the text alignment for the language.  Add another selector, e.g. `html[lang="ar-SA"]` to this rule:

```css
html[lang="ar-SA"] {
  direction: rtl;
}
```

### Building

`docker build -f crowdin.dockerfile . -t crowdin-cd-com`

### Testing

`docker run --entrypoint "/bin/bash" -it -e GITHUB_AUTH_TOKEN=xxxx -e CROWDIN_API_KEY=xxxx crowdin-cd-com`

GITHUB_AUTH_TOKEN - generate one of these in https://github.com/settings/tokens and use that.

CROWDIN_API_KEY - get it from here: https://crowdin.com/project/coderdojo-com/settings#api

In the console, run something like the following to test:
`crowdin download -l it --verbose;`

Watch the output (It does something like create a new directory called coderdojo.com and save a zipfile for the lang in there).

### Publishing 

`docker tag crowdin-cd-com coderdojo/crowdin-cd-com`
`docker push coderdojo/crowdin-cd-com`

### Getting CORS to work on /resources

```
sudo iptables -t nat -A OUTPUT -o lo -p tcp --dport 80 -j REDIRECT --to-port 3000
sudo su
echo "127.0.0.1  coderdojo.com" >> /etc/hosts


```
