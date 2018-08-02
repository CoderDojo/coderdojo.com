<template>
  <div class="c-hero">
    <div class="c-hero__content center-text">
      <h1 class="c-hero__header">{{ $t('Resources') }}</h1>
      <h3 class="c-hero__text">{{ $t('To help you with setting up and running your Dojo, we\'ve collected many useful resources created by community members, partners, and our team.') }}</h3>
      <Projects />
    </div>
  </div>
</template>

<script>
  import Projects from './Projects';

  export default {
    components: {
      Projects,
    },
  };
</script>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-hero {
    background-color: $cd-purple;
    padding: 10px 0 40px 0;
    color: $white;

    &__content {
      max-width: $content-width;
      margin: 0 auto;
    }

    &__header {
      font-family: Libre Franklin;
      font-weight: bold;
    }

    &__text {
      max-width: 735px;
      margin: 40px auto 80px auto;
      font-weight: normal;

    }
  }
  @include media-breakpoint-max(sm) {
  .c-hero {
    background-color: $cd-purple;

    &__content {
      margin: auto 8px;
    }

    &__header {
      font-size: $mobile-h1-size;
      font-weight: $mobile-h1-weight;
    }

    &__text {
      font-size: $mobile-h2-size;
      font-weight: $mobile-h2-weight;
    }
  }
}
</style>
