<template>
  <div>
    <hr class="c-how__divider">
    <div class="c-how__section"> 
      <div class="c-how__individual c-how__led">
        <h1>{{ $t('How can I help?') }}</h1>
        <p>{{ $t('You can attend your Dojo\'s meetings and help out for a couple of hours, whether that’s weekly, fortnightly or monthly.') }}</p>
      </div>
      <div class="c-how__individual c-how__rpi">
        <h1>{{ $t('How much technical expertise do I need?') }}</h1>
        <p>{{ $t('No problem! We need awesome people to help with registration, updating social media, producing fliers etc. Any help is appreciated!') }}</p>
      </div>  
    </div>    
   </div>
</template>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-how {
    &__divider { 
      background-color: #CAC4CE; 
      height: 1px; 
      border: 0; 
    }

    &__section {
      padding: 48px 0;
      margin: 48px auto;
      max-width: $content-width;
      display: flex;
    }

    &__individual {
      display: flex;
      flex-direction: column;
      padding: 0px 64px;
      h1 {
        text-align: left;
      }
    }

    &__led {
      padding-left: 72px;
      background-image: url('~/static/images/leds.svg');
      background-repeat: no-repeat;
      background-position: 0 25%;    
    } 

    &__rpi {
      padding-left: 72px;
      background-image: url('~/static/images/rpi.svg');
      background-repeat: no-repeat;
      background-position: 0 25%;  
    }       
  }

  @include media-breakpoint-max(sm) {
    .c-how {
      &__section {
        flex-direction: column;
      }
      &__images {
        padding: 20px 0 0;
      }      
    }
  }
</style>
