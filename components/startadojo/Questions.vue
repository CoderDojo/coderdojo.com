<template>
  <div class="c-questions" id="questions">
    <div class="c-questions__illustration">
      <img src="~/static/images/help.svg" />
    </div>
    <div class="c-questions__content">
      <h2 class="c-questions__header center-text">{{ $t('Have more questions?') }}</h2>
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('We offer a free online course for people who\'d like a structured way to start a Dojo') }}</p>
        <a href="https://www.futurelearn.com/courses/start-a-coder-dojo" class="c-questions__link">{{ $t('Start a Dojo course') }}</a>  
      </div>
      <hr class="c-questions__divider">
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('In our help section, you\'ll find great articles to answer your questions, and you can ask us for advice directly!') }}</p>
        <a href="https://help.coderdojo.com" class="c-questions__link">{{ $t('Help desk') }}</a>  
      </div>  
      <hr class="c-questions__divider">
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('There\'s no need to worry about projects or content for your Dojo') }}</p>
        <a href="https://projects.raspberrypi.org/en/coderdojo" class="c-questions__link">{{ $t('200+ coding lessons built for you') }}</a>  
      </div>
      <hr class="c-questions__divider">
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('Want to see it all in person?') }}</p>
        <a href="https://zen.coderdojo.com" class="c-questions__link">{{ $t('Find a Dojo event near you to visit') }}</a>  
      </div>                   
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';
  .c-questions {
    background: $white;
    &__illustration {
      text-align: center;
    }
    &__content {
      padding: 96px 100px 40px;
      margin-top: -50px;
      background: $grey-bg;
    }
    &__header {
      margin: 10px 0;
    }
    &__wrapper {
      display: flex;
      margin: 0px auto;
      max-width: $content-width;
      justify-content: space-between;
    }  
    &__text {
       display: flex;
       align-items: flex-start;
       margin: 16px 0;
       padding: 24px 0;
       max-width: 50%;
    }       
    &__link {
      align-items: flex-end;
      display: block;
      color: $cd-orange;
      margin: 16px 0;
      padding: 24px 0;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      &:hover {
        text-decoration: underline;       
      }
    }
    &__divider {
      display: flex;
      margin: 0px auto;
      max-width: $content-width;
      background-color: #CAC4CE; 
      height: 1px; 
      border: 0; 
    }   
  }

  @include media-breakpoint-max(sm) {
    .c-questions {   
      &__header {
        text-align: left;
      } 
      &__wrapper {
        margin: 0;
        flex-direction: column;
      }
      &__text {
        max-width: 100%;
        margin: 16px 0;
        padding: 0;
      }
      &__link {
        margin: 16px 0;
        padding: 0;
      }
      &__divider {
        margin: 0;
      }
      &__arrow {
        display: none;
      }                       
    }
  }
</style>
