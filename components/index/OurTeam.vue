<template>
  <div class="c-our-team">
    <div class="c-our-team__content">
      <div class="c-our-team__photo">
        <img src="~/static/images/index/team.jpg" />
      </div>
      <div class="c-our-team__text">
        <h2 class="c-our-team__header">{{ $t('Our team & history') }}</h2>
        <p>{{ $t('We\’re a 7-year-old foundation with amazing growth and an eventful story.') }}</p>
        <a href="/team">{{ $t('Find out more about us!') }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-our-team {
    background: $grey-bg;
    padding: 40px 0;

    &__content {
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
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      p {
        flex: 1;
        margin: 10px 0;
      }

      a {
        color: $cd-orange;
        margin: 25px 0;
        font-weight: bold;
      }
    }

    &__header {
      margin-top: 0;
    }
  }

  @include media-breakpoint-max(sm) {
    .c-our-team {
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
