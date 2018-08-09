<template>
  <div class="c-volunteer" id="volunteer">
    <div class="c-volunteer__content">
      <div class="c-volunteer__illustration">
        <img src="~/static/images/index/volunteer.png" />
      </div>
      <div class="c-volunteer__text">
        <h2>{{ $t('Volunteer at a Dojo') }}</h2>
        <h3>{{ $t('Join us and meet 6742 like-minded volunteers') }}</h3>
        <p>{{ $t('Whether or not you can code, you can help a local club in just a few hours a month! Dojos need general volunteers, and mentors for sessions. Even mentors don’t have to have technical skills, because they help the young people mainly by encouraging them to discover their own way forward.') }}</p>
        <div class="c-volunteer__quote">
          <p class="c-volunteer__quote-text">{{ $t('When I see them doing things on their own, getting their ideas out there, and seeing creativity spur out of the moment, really gives me so much joy') }}</p>
          <div class="c-volunteer__quote-attr">
            <img class="c-volunteer__quote-attr-image" src="~/static/images/index/Ekaterina.png" />
            <span class="c-volunteer__quote-attr-text">Ekaterina, Dojo volunteer in Bulgaria</span>
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
          font-size: $subtext;
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
          font-size: $mobile-h2-size;
        }
      }
      &__quote {

      &-text {
        font-size: $mobile-p-size;
      }

      &-attr {
        &-text {
          font-size: $subtext;
        }
      }
    }     
    }
  }
</style>
