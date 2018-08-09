<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">{{ $t('Let\'s start a Dojo for young people near you') }}</h1>
    <div class="c-hero__step-cards">
      <div class="c-hero__step-card">
        <img class="c-hero__step-image" src="~/static/images/doc.svg" />
        <h2 class="c-hero__step-header">
          <span class="c-hero__step-number">{{ $t('1') }}</span>
          <span class="c-hero__step-name">{{ $t('Register') }}</span>
        </h2>
        <p class="c-hero__step-text">{{ $t('Register with us as a champion so we can support you as you build and grow your Dojo.') }}</p>
      </div>
      <div class="c-hero__step-card">
        <img class="c-hero__step-image" src="~/static/images/pin.svg" />
        <h2 class="c-hero__step-header">
          <span class="c-hero__step-number">{{ $t('2') }}</span>
          <span class="c-hero__step-name">{{ $t('Find') }}</span>
        </h2>
        <p class="c-hero__step-text">{{ $t('Find a public venue to hold your Dojo events. Libraries, offices and community centres are often used.') }}</p>
      </div>
      <div class="c-hero__step-card">
        <img class="c-hero__step-image" src="~/static/images/screen.svg" />
        <h2 class="c-hero__step-header">
          <span class="c-hero__step-number">{{ $t('3') }}</span>
          <span class="c-hero__step-name">{{ $t('Start') }}</span>
        </h2>
        <p class="c-hero__step-text">{{ $t('Schedule your first event using our events system, and use some of over 200 projects to run a great first Dojo session.') }}</p>
      </div>      
    </div>
     <div class="c-hero__cta">
      <a href="https://zen.coderdojo.com/dashboard/start-dojo" class="c-button c-button--teal">{{ $t('Start a Dojo') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';
  .c-hero {
    padding: 0 0 80px 0;
    background-color: $cd-purple;
    &__header1 {
      color: $white;
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 20px;
      font-weight: bold;
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
      &:nth-child(1) .c-hero__step-number {
        background: $cd-orange;
      }
      &:nth-child(2) .c-hero__step-number{
        background: $cd-purple;
      }
      &:nth-child(3) .c-hero__step-number{
        background: $cd-teal;
      }
      &:nth-child(1) .c-hero__step-name {
        color: $cd-orange;
      }
      &:nth-child(2) .c-hero__step-name{
        color: $cd-purple;
      }
      &:nth-child(3) .c-hero__step-name{
        color: $cd-teal;
      }              
    }

    &__step {

      &-image {
        display: flex;
        margin-top: 16px;
      }

      &-header {
        margin: 20px auto;
        display: flex;                        
      }

      &-number {
        color: #fff;
        border-radius: 100%;
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-weight: 900;
        font-size: 20px;
        flex: 1 50px 50px;
        margin-top: 12px;                  
      }

      &-name {
        margin-top: 8px;
        padding-left: 16px;
      }

      &-text {
        margin: auto auto 16px;
        align-items: center;
        font-size: 18px;
        &-first-word {
          font-weight: bold;
        }
      }
    }
   
  }
  @include media-breakpoint-max(sm) {
    .c-hero {
      background-color: $cd-purple;
      &__header1 {
        font-size: $mobile-h1-size;
        font-weight: $mobile-h1-weight;
      }
      &__step-cards {
        flex-direction: column;
      }
      &__step-card {
         margin: 20px 40px;
      }
      &__step-name {
         margin-top: 16px;
      }              
      &__cta {
        flex-direction: column;
        .c-button {
          margin: 10px 40px;
        }
      }
      &__step-image {
        margin: 20px 40px;
        &:first-child {
          display: none;
        }
      }
    }
  }
</style>
