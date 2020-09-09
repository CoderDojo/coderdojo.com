FROM node:10-buster-slim as base
WORKDIR /app
ENV TZ='Europe/London'

FROM base AS builder
ENV NODE_MODULES_BIN_PATH="/node_modules/.bin"
ENV PATH="$PATH:$WEBPACKER_NODE_MODULES_BIN_PATH"
RUN apt-get update \
  && apt-get install --no-install-recommends --yes \
     build-essential python-dev libsass-dev 
COPY package.json yarn.lock /app/
COPY .yarnrc-docker /app/.yarnrc
RUN yarn install
COPY . /app/

CMD yarn run dev
EXPOSE 3000

