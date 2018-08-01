<template>
  <div class="c-hero">
    <div class="c-hero__content center-text">
      <h1 class="c-hero__header">{{ $t('Resources') }}</h1>
      <h2 class="c-hero__text">{{ $t('We have collected resources, produced by community members, partners and the Foundation itself, that can help you in setting up and running your Dojo.') }}</h2>
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
      font-size: 41px;
      font-family: Libre Franklin;
      font-weight: 300;
    }

    &__text {
      max-width: 735px;
      margin: 40px auto 80px auto;
      font-size: 18px;
    }
  }
  @include media-breakpoint-max(sm) {
  .c-hero {
    background-color: $cd-purple;

    &__content {
      margin: auto 8px;
    }

    &__header {
      font-size: 22px;
      font-weight: $mobile-header-weight;
    }

    &__text {
      font-size: 12px;
    }
  }
}
</style>
