<template>
  <div class="c-questions">
    <div class="c-questions__illustration">
      <img src="~/static/images/help.svg" />
    </div>
    <div class="c-questions__content">
      <h1 class="c-questions__header">{{ $t('Have more questions?') }}</h1>
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('We\'ve created a course for people who want a structured way to start a Dojo') }}</p>
        <a href="#" class="c-questions__link">{{ $t('View our help articles') }}</a>  
      </div>
      <hr class="c-questions__divider">
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('Here\'s a help centre of great articles to answer your questions or ask us new ones!') }}</p>
        <a href="#" class="c-questions__link">{{ $t('CoderDojo Help Center') }}<img class="c-questions__arrow" src="~/static/images/right-arrow-orange.svg" /></a>  
      </div>  
      <hr class="c-questions__divider">
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('No need to worry about projects!') }}</p>
        <a href="#" class="c-questions__link">{{ $t('200+ lessons built for you') }}</a>  
      </div>
      <hr class="c-questions__divider">
      <div class="c-questions__wrapper">
        <p class="c-questions__text">{{ $t('Think you need to see it live?') }}</p>
        <a href="#" class="c-questions__link">{{ $t('Find a Dojo event near you') }}</a>  
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
      text-align: center;
    }
    &__header {
      font-size: 28px;
      margin: 10px 0;
    }
    &__wrapper {
       display: flex;
       justify-content: space-between;
    }  
    &__text {
       display: flex;
       align-items: flex-start;
       margin: 48px 0;
       padding: 24px 0;
       max-width: 50%;
    }       
    &__link {
      align-items: flex-end;
      display: block;
      color: $cd-orange;
      margin: 48px 0;
      padding: 24px 0;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &__divider {
      background-color: #D3D3D3; 
      height: 2px; 
      border: 0; 
    }
    &__arrow {
      height: 16px;
    }    
  }
</style>