<template>
  <div class="c-testimonials">
    <h1 class="c-testimonials__header center-text">{{ $t('What does it mean to volunteer at a Dojo?') }}</h1>
    <div class="c-testimonials__content">
      <div class="c-testimonials__text c-testimonials__individual-content">
        <p>{{ $t('There are {number} Volunteers in {dojonumber} Dojos and they come in many forms.', { number: 100, dojonumber: 1000 }) }}</p>
        <p>{{ $t('You do not have to be a coder to mentor at a Dojo. Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo youth (Ninjas) and general volunteers who focus on organising the events. A lot of mentors are parents of attendees with no technical experience at all. The easiest way to see if you might want to volunteer is to check out our videos above and then find a Dojo event to turn up to and see how a Dojo session works! ') }}</p>
      </div>    
      <div class="c-testimonials__individual-content">
        <div class="c-testimonials__quote-card">
          <p class="c-testimonials__quote">{{ $t('CoderDojo isn\'t primarily about code. It\'s about providing a place where children can be inquisitive and create things without fear of failure. They can be themselves') }}</p>
          <div class="c-testimonials__quote-attr">
            <img class="c-testimonials__quote-attr-image" src="https://picsum.photos/36/36?image=2" />
            <span class="c-testimonials__quote-attr-text">Yohei Yasukawa - CoderDojo Tokyo</span>
          </div>
        </div>
      </div>      
    </div>
    <div class="c-testimonials__cta">
      <a href="https://zen.coderdojo.com/" class="c-button c-button--orange c-button--search">{{ $t('Find a Dojo to volunteer at') }}</a>
    </div>

  </div>      
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-testimonials {
    max-width: $content-width;
    margin: 0 auto;
    padding: 40px 0;

    &__content {
      display: flex;
      max-width: $content-width;
      margin: 60px auto 0 auto;
    }
    &__individual-content {
      flex: 1;
      justify-content: space-between;
    }
    &__text {
      max-width: 65%;
      margin: 0 16px;

      p {
        margin: 40px 0;
      }
    }    

    &__illustration {
      display: block;
      margin: 40px auto 0 auto;
      width: calc(100% - 80px);
    }

    &__quote-card {
      flex: 1;
      margin: 40px 16px;
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
      margin: 16px auto;
    }
  }

  @include media-breakpoint-max(sm) {
    .c-testimonials {
      &__header {
        margin: 0 40px;
      }      
      &__content {
        margin-top: 0;
        flex-direction: column;
      }
      &__text {
        max-width: 100%;
        margin: 0 40px;
      }
      &__cta {
        flex-direction: column;

        .c-button {
          margin: 10px 40px;
        }
      }         
    }
  }
</style>
