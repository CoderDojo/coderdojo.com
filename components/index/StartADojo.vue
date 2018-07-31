<template>
  <div class="c-start">
    <div class="c-start__content">
      <div class="c-start__text">
        <h1>{{ $t('Want to start a Dojo?') }}</h1>
        <h2>{{ $t('It\'s just 3 steps!') }}</h2>
        <p>{{ $t('CoderDojo Champions are passionate, driven (not always techie!) volunteers who take charge of setting up, running and maintaining a Dojo.') }}</p>
        <a href="/start-dojo" class="c-button c-button--teal">{{ $t('Start a Dojo') }}</a>
      </div>
      <div class="c-start__illustration">
        <img src="~/static/images/start-a-dojo.svg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-start {
    background: $grey-bg;

    &__content {
      max-width: $content-width;
      margin: 0 auto;
      padding-top: 80px;
      display: flex;
    }

    &__illustration {
      max-width: 500px;
      padding: 0 40px;

      img {
        width: 100%;
      }
    }

    &__text {
      flex: 1;
      padding-left: 20px;

      h1, h2 {
        text-align: left;
      }

      p {
        margin: 40px 0;
      }
    }
  }

  @include media-breakpoint-max(md) {
    .c-start {
      &__illustration {
        max-width: 350px;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-start {
      &__content {
        flex-direction: column;
      }

      &__illustration {
        margin: 0 auto;
      }

      &__text {
        padding: 0 20px;
      }
    }
  }
</style>
