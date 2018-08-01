<template>
  <div class="c-start">
    <div class="c-start__content">
      <div class="c-start__text">
        <h1>{{ $t('Want to start a Dojo?') }}</h1>
        <h2>{{ $t('It\'s just 3 steps!') }}</h2>
        <p>{{ $t('CoderDojo Champions are passionate, driven (not always techie!) volunteers who take charge of setting up, running and maintaining a Dojo.') }}</p>
        <div class="c-start__steps">
          <div class="c-start__step">
            <span class="c-start__step-number">1</span>
            <span class="c-start__step-text">{{ $t('Register with us as a Champion so we can support you as you build your club.') }}</span>
          </div>
          <div class="c-start__step">
            <span class="c-start__step-number">2</span>
            <span class="c-start__step-text">{{ $t('Find a public location to hold your Dojo. Libraries, schools, businesses and clubs are often used.') }}</span>
          </div>
          <div class="c-start__step">
            <span class="c-start__step-number">3</span>
            <span class="c-start__step-text">{{ $t('Create an event using our events system and use over 200 ready made projects to run a great first event.') }}</span>
          </div>
        </div>
        <a href="/start-dojo" class="c-button c-button--teal">{{ $t('Start a Dojo') }}</a>
      </div>
      <div class="c-start__illustration">
        <img src="~/static/images/index/start-a-dojo.png" />
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
      padding: 80px 0 60px 0;
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

      p {
        margin: 40px 0;
      }
    }

    &__steps {
      margin: 40px 0;
    }

    &__step {
      display: flex;

      &-number {
        background: #fff;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-weight: 900;
        font-size: 21px;
        flex: 1 50px 50px;
      }

      &-text {
        flex: 1;
        margin: 5px 20px 20px 20px;
        font-size: 18px;
      }

      &:nth-child(1) &-number {
        color: $cd-orange;
      }

      &:nth-child(2) &-number {
        color: $cd-purple;
      }

      &:nth-child(3) &-number {
        color: $cd-teal;
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
        h2 {
          font-size: 18px;
        }
      }
    }
  }
</style>
