<template>
  <div class="c-testimonials">
    <h1 class="c-testimonials__header">{{ $t('Dojos are relaxed and fun!') }}</h1>
    <img class="c-testimonials__illustration" src="~/static/images/dojo.svg" />
    <div class="c-testimonials__quote-cards">
      <div class="c-testimonials__quote-card">
        <p class="c-testimonials__quote">{{ $t('“Learning to code is done in a relaxed friendly atmosphere. I really like being creative and coding gives me an opportunity to put my ideas into a digital world.”') }}</p>
        <div class="c-testimonials__quote-attr">
          <img class="c-testimonials__quote-attr-image" src="https://picsum.photos/36/36?image=1" />
          <span class="c-testimonials__quote-attr-text">Lauren - CoderDojo Dun Laoghaire, Ireland</span>
        </div>
      </div>
      <div class="c-testimonials__quote-card">
        <p class="c-testimonials__quote">{{ $t('"I met a lot of new friends in our CoderDojo club, I met a lot of new friends in our CoderDojo club"') }}</p>
        <div class="c-testimonials__quote-attr">
          <img class="c-testimonials__quote-attr-image" src="https://picsum.photos/36/36?image=1" />
          <span class="c-testimonials__quote-attr-text">Lauren - CoderDojo Dun Laoghaire, Ireland</span>
        </div>
      </div>
    </div>
    <div class="c-testimonials__cta">
      <a href="#" class="c-button c-button--teal c-button--search">{{ $t('Find a Dojo Event') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-testimonials {
    max-width: $content-width;
    margin: 0 auto;
    padding: 40px 0;

    &__illustration {
      display: block;
      margin: 40px auto 0 auto;
      width: calc(100% - 80px);
    }

    &__quote-cards {
      display: flex;
    }

    &__quote-card {
      flex: 1;
      margin: 0 16px;
      box-shadow: #F1E7F6 12px 9px 40px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px 32px;
      border-radius: 5px;
    }

    &__quote {
      font-size: 18px;

      &-attr {
        display: flex;
        margin-top: 24px;
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

    &__cta {
      text-align: center;
      margin: 40px 0;
    }
  }

  @include media-breakpoint-max(sm) {
    .c-testimonials {
      &__quote-cards {
        flex-direction: column;
      }
    }
  }
</style>
