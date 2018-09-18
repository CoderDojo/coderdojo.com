<template>
  <div class="c-testimonials" id="testimonials">
    <h2 class="c-testimonials__header center-text">{{ $t('Dojos are relaxed and fun programming clubs!') }}</h2>
    <img class="c-testimonials__illustration" src="~/static/images/index/dojo.png" />
    <div class="c-testimonials__quote-cards">
      <div class="c-testimonials__quote-card">
        <p class="c-testimonials__quote">“{{ $t('When I started to attend the CoderDojo courses, I only knew how to copy/paste. Now, I can build websites and I even experiment with game development.') }}”</p>
        <div class="c-testimonials__quote-attr">
          <img class="c-testimonials__quote-attr-image" src="~/static/images/index/daniel.jpg" />
          <span class="c-testimonials__quote-attr-text">Daniel, 14, Moldova</span>
        </div>
      </div>
      <div class="c-testimonials__quote-card">
        <p class="c-testimonials__quote">“{{ $t('It’s a place to go to learn really cool coding activities and make friends. I’ve got a chance to try things from scratch to drones and even how to live code music with sonic pi!') }}”</p>
        <div class="c-testimonials__quote-attr">
          <img class="c-testimonials__quote-attr-image" src="~/static/images/index/Aoibheann.jpg" />
          <span class="c-testimonials__quote-attr-text">Aoibheann, 11, Ireland</span>
        </div>
      </div>
    </div>
    <div class="c-testimonials__cta">
      <a href="https://zen.coderdojo.com/find" class="c-button c-button--teal c-button--search">{{ $t('Find a Dojo to attend') }}</a>
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
      &-attr {
        display: flex;
        margin-top: 24px;
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
