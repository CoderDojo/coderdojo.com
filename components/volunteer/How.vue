<template>
  <div class="c-how">
    <div class="c-how__section"> 
      <div class="c-how__individual c-how__led">
        <h2>{{ $t('How can I help?') }}</h2>
        <p>{{ $t('You can attend your Dojo\'s meetings and help out for a couple of hours, whether that’s weekly, fortnightly or monthly.') }}</p>
      </div>
      <div class="c-how__individual c-how__rpi">
        <h2>{{ $t('How much technical expertise do I need?') }}</h2>
        <p>{{ $t('No problem! We need awesome people to help with registration, updating social media, producing fliers etc. Any help is appreciated!') }}</p>
      </div>  
    </div>    
   </div>
</template>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-how {
    &__section {
      padding: 0 0 40px;
      margin: auto auto 40px;
      max-width: $content-width;
      display: flex;
    }

    &__individual {
      display: flex;
      flex-direction: column;
      padding: 0px 64px;
      h2 {
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
      &__individual {
        text-align: center;
        h2 {
          text-align: center;
        }
      }      
      &__led {
        background-position: 10% 25%;    
      } 

      &__rpi {
        background-position: 10% 25%;  
      }       
    }
  }
</style>
