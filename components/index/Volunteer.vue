<template>
  <div class="c-volunteer">
    <div class="c-volunteer__content">
      <div class="c-volunteer__illustration">
        <img src="~/static/images/index/volunteer.png" />
      </div>
      <div class="c-volunteer__text">
        <h1>{{ $t('Volunteer at a Dojo') }}</h1>
        <h2>{{ $t('Join us and meet like 6742 like minded mentors') }}</h2>
        <p>{{ $t('Whether you can code or not you can help a local club with just a few hours a month! Clubs need general volunteers and mentors. Even mentors don’t have to be technical, they help mainly by encouraging young people to discover their own way forward.') }}</p>
        <div class="c-volunteer__quote">
          <p class="c-volunteer__quote-text">I have to say that it has been one of the most interesting and rewarding things I’ve been involved in in my career.</p>
          <div class="c-volunteer__quote-attr">
            <img class="c-volunteer__quote-attr-image" src="~/static/images/index/lauren.png" />
            <span class="c-volunteer__quote-attr-text">Lauren - CoderDojo Dun Laoghaire, Ireland</span>
          </div>
        </div>
        <a href="/volunteer" class="c-button c-button--orange">{{ $t('See how easy it is to try out') }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-volunteer {
    background: #F4F4F4;

    &__content {
      max-width: $content-width;
      margin: 0 auto;
      padding-top: 80px;
      display: flex;
    }

    &__illustration {
      max-width: 500px;
      text-align: center;
      padding: 0 90px;

      img {
        width: 100%;
      }
    }

    &__text {
      flex: 1;
      padding-right: 20px;

      h1, h2 {
        text-align: left;
      }

      > p {
        margin: 40px 0;
      }
    }

    &__quote {
      margin: 40px 0;

      &-text {
        font-size: 15px;
        font-style: italic;
      }

      &-attr {
        display: flex;
        margin: 10px 0;
        align-items: center;

        &-image {
          width: 36px;
          border-radius: 100%;
        }

        &-text {
          font-size: 13px;
          margin-left: 10px;
        }
      }
    }
  }

  @include media-breakpoint-max(md) {
    .c-volunteer {
      &__illustration {
        max-width: 350px;
        padding: 0 40px;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-volunteer {
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
      &__quote {

      &-text {
        font-size: 18px;
      }

      &-attr {
        &-text {
          font-size: 14px;
        }
      }
    }     
    }
  }
</style>
