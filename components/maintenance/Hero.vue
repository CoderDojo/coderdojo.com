<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">Under maintenance</h1>
    <div class="c-hero__intro">
      <p>The CoderDojo website is undergoing maintenance. We'll be back as soon as we can!</p>
      <p>For any urgent queries, please contact <a href="mailto:info@coderdojo.org">info@coderdojo.org</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.c-hero {
  padding: 0 0 70px 0;
  background-color: $cd-purple;
  &__header1 {
    color: $white;
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 20px;
    font-weight: bold;
  }

  &__intro,
  &__outro {
    max-width: $content-width;
    margin: 0 auto;
    color: $white;
    text-align: center;

    p:not(:last-child) {
      padding-bottom: 1em;
    }

    a, a:link, a:visited {
      color: #ffffff;
    }
  }

  &__outro {
    max-width: $content-width;
    margin: 2em auto 0 auto;
    color: $white;
    text-align: center;

    a {
      color: $white;
      text-decoration: underline;
      font-weight: bold;
    }
  }
}
@include media-breakpoint-max(sm) {
  .c-hero {
    background-color: $cd-purple;
    &__header1 {
      font-size: $mobile-h1-size;
      font-weight: $mobile-h1-weight;
    }
  }
}
</style>
