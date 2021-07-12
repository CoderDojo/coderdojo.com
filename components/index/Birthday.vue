<template>
  <div class="c-birthday" id="birthday">
    <div class="c-birthday__content">
      <div class="c-birthday__photo">
        <img src="~/static/images/index/birthday.png" />
      </div>
      <div class="c-birthday__text">
        <h2 class="c-birthday__header">{{ $t('Celebrating ten years of CoderDojo') }}</h2>
        <p>{{ $t('This year we’re celebrating ten years of CoderDojo. Discover how CoderDojo started and how you can get involved in the exciting activities we have planned!') }}</p>
        <div class="c-birthday__text-link">
          <a href="/">{{ $t('Click link') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-birthday {
    padding: 40px 0;

    &__content {
      background: $foam;
      max-width: $content-width;
      margin: 40px auto;
      display: flex;
    }

    &__photo {
      flex: 1;
      margin-right: 20px;

      img {
        width: 100%;
        border-radius: 5px;
      }
    }

    &__text {
      flex: 1;
      margin-left: 20px;

      p {
        margin: 10px 0;
      }

      &-link {
        margin: 25px 0;
        a {
          color: $cd-orange;
          font-weight: bold;
        }
      }
    }

    &__header {
      margin-top: 0;
    }
  }

  @include media-breakpoint-max(sm) {
    .c-birthday {
      &__content {
        flex-direction: column-reverse;
      }

      &__photo {
        margin: 0;
      }

      &__text {
        margin: 0 20px;
      }
    }
  }
</style>
