# coderdojo.com

> CoderDojo Main Site

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate


For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
```
## Translations

Translations are pulled regularly from crowdin and commited in this repo. Please be aware that locales other than en_US will be overwritten in production.

### Building

`docker build -f crowdin.dockerfile . -t crowdin-cd-com`

### Testing

`docker run --entrypoint "/bin/bash" -it -e GITHUB_AUTH_TOKEN=xxxx -e CROWDIN_API_KEY=xxxx crowdin-cd-com`

### Publishing

`docker tag crowdin-cd-com coderdojo/crowdin-cd-com`
`docker push coderdojo/crowdin-cd-com`

### Getting CORS to work on /resources

```
sudo iptables -t nat -A OUTPUT -o lo -p tcp --dport 80 -j REDIRECT --to-port 3000
sudo su
echo "127.0.0.1  coderdojo.com" >> /etc/hosts

```
