<template>
  <div class="c-hero">
    <h1 class="c-hero__header1">{{ $t('Let\'s start a Dojo to help engage young people near you') }}</h1>
    <div class="c-hero__step-cards">
      <div class="c-hero__step-card">
        <img class="c-hero__image" src="~/static/images/doc.svg" />
        <h1 class="c-hero__step-header c-hero__orange">{{ $t('Step 1') }}</h1>
        <p class="c-hero__step-text"><span class="c-hero__step-text-first-word c-hero__orange">{{ $t('Register ') }}</span>{{ $t('with us as a Champion so we can support you as you build your club.') }}</p>
      </div>
      <div class="c-hero__step-card">
        <img class="c-hero__image" src="~/static/images/pin.svg" />
        <h1 class="c-hero__step-header c-hero__purple">{{ $t('Step 2') }}</h1>
        <p class="c-hero__step-text"><span class="c-hero__step-text-first-word c-hero__purple">{{ $t('Find ') }}</span>{{ $t('a public location to hold your Dojo. Libraries, schools, businesses and clubs are often used.') }}</p>
      </div>
      <div class="c-hero__step-card">
        <img class="c-hero__image" src="~/static/images/screen.svg" />
        <h1 class="c-hero__step-header c-hero__teal">{{ $t('Step 3') }}</h1>
        <p class="c-hero__step-text"><span class="c-hero__step-text-first-word c-hero__teal">{{ $t('Create ') }}</span>{{ $t('an event using our events system and use over 200 ready made projects to run a great first event.') }}</p>
      </div>      
    </div>
     <div class="c-hero__cta">
      <a href="#" class="c-button c-button--teal">{{ $t('Start a Dojo') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';
  .c-hero {
    padding: 0 0 80px 0;
    background-image:
      linear-gradient(to bottom, $cd-purple 0%, $cd-purple-gradient 100%);
    &__header1 {
      color: $white;
      font-weight: 300;
      font-size: 40px;
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 20px;
    }
    &__header2 {
      color: $white;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
    }
    &__cta {
      display: flex;
      justify-content: center;
      margin: 40px auto 0;
      max-width: 480px;
      .c-button {
        flex: 1;
        margin: 0 20px;
      }
    }

    &__orange {
      color: $cd-orange;
    }
    &__purple {
      color: $cd-purple;
    }
    &__teal {
      color: $cd-teal;
    } 

    &__step-cards {
      display: flex;
      max-width: 1200px;
      margin: 30px auto 0;
      padding: 0 0 40px;
    }
 
    &__step-card {
      background-color: $white;
      flex: 1;
      justify-content: space-between;
      margin: 0 16px;
      display: flex;
      flex-direction: column;
      padding: 24px 32px;
      border-radius: 3px;
    }

    &__image {
      display: flex;
    }

    &__step-header {
      margin: 20px auto;
      display: flex;           
    }

    &__step-text {
      margin: auto auto 16px;
      align-items: center;
      font-size: 18px;
      &-first-word {
        font-weight: bold;
      }
    }    
  }
  @include media-breakpoint-max(sm) {
    .c-hero {
      background-image:
        linear-gradient(to bottom, $cd-purple 0%, $cd-purple-gradient 100%);
      &__header1 {
        font-size: 22px;
      }
      &__header2 {
        font-size: 12px;
      }
      &__step-cards {
        flex-direction: column;
      }
      &__step-card {
         margin: 20px 40px;
      }      
      &__cta {
        flex-direction: column;
        .c-button {
          margin: 10px 40px;
        }
      }
      &__images {
        flex-direction: column;
      }
      &__image {
        margin: 20px 40px;
        &:first-child {
          display: none;
        }
      }
    }
  }
</style>
