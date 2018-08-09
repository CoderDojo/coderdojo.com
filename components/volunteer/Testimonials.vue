<template>
  <div class="c-testimonials">
    <h2 class="c-testimonials__header center-text">{{ $t('What does it mean to volunteer at a Dojo?') }}</h2>
    <div class="c-testimonials__content">
      <div class="c-testimonials__text c-testimonials__individual-content">

        <p>{{ $t('There are {number} volunteers in {dojonumber} Dojos, and they do all sorts of things to help their clubs.', { number: volunteers, dojonumber: numOfDojos}) }}</p>
        <p>{{ $t('You do not need to be a programmer to mentor at a Dojo! A lot of mentors are attendees\' parents who have no technical experience at all when they start. Dojos benefit from having mentors with different skills, backgrounds, and levels of knowledge who provide support and encouragement to CoderDojo youth (Ninjas). The clubs also need general volunteers who focus on organising the events. The easiest way to see what volunteering is like: watch our video, and find a Dojo event to drop by to discover in person how a Dojo works!') }}</p>
      </div>    
      <div class="c-testimonials__individual-content">
        <div class="c-testimonials__quote-card">
          <p class="c-testimonials__quote">“{{ $t('When I see them do things on their own, getting their ideas out there. It really gives me so much enjoyment.') }}”</p>
          <div class="c-testimonials__quote-attr">
            <img class="c-testimonials__quote-attr-image" src="https://picsum.photos/36/36?image=2" />
            <span class="c-testimonials__quote-attr-text">Ekaterina, Bulgaria</span>
          </div>
        </div>
      </div>      
    </div>
    <div class="c-testimonials__cta">
      <a href="https://zen.coderdojo.com/" class="c-button c-button--orange c-button--search">{{ $t('Find a Dojo to volunteer at') }}</a>
    </div>

  </div>      
</template>
<script>
  import CDFNumbers from '~/data/numbers';
  export default {
    props: ['dojos'],
    data() {
      return {...CDFNumbers};
    },
    computed: {
      numOfDojos() {
        return this.dojos.length;
      },
    },
  };
</script>
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
