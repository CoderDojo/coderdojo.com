<template>
  <div>
    <hr class="c-how__divider">
    <div class="c-how">
      <div class="c-how__section">
        <img class="c-how__images" src="~/static/images/leds.svg" />
        <div class="c-how__individual">
          <h1>{{ $t('How can I help?') }}</h1>
          <p>{{ $t('You can attend your Dojo\'s meetings and help out for a couple of hours, whether that’s weekly, fortnightly or monthly.') }}</p>
        </div>
        <img class="c-how__images" src="~/static/images/rpi.svg" />
        <div class="c-how__individual">
          <h1>{{ $t('How much technical expertise do I need?') }}</h1>
          <p>{{ $t('No problem! We need awesome people to help with registration, updating social media, producing fliers etc. Any help is appreciated!') }}</p>
        </div>  
      </div>    
    </div>
   </div>
</template>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-how {
    padding: 48px 0;

    &__divider { 
      background-color: #D3D3D3; 
      height: 1px; 
      border: 0; 
    }

    &__section {
      margin: 48px auto;
      max-width: $content-width;
      display: flex;
    }

    &__individual {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      padding: 0px 64px;
    }

    &__images {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
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
