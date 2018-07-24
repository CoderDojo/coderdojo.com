<template>
  <div class="c-resources">
    <div class="c-resources__content">
      <div class="c-resources__individual c-resources__doc">
        <h1>{{ $t('Ready-made resources') }}</h1>
        <p>{{ $t('We have loads of resources to get you started as a volunteer, and you can always create and share your own.') }}</p>
      </div>
      <div class="c-resources__individual">
        <a href="#" class="c-resources__link">{{ $t('Find out more on the resources page') }}</a>        
      </div>      
    </div> 
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-resources {
    background: $cd-purple;
    padding: 48px 0 24px;
    color: #fff;

    &__content {
      margin: 48px auto;
      max-width: $content-width;
      display: flex;
    }

    &__individual {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-link {
        margin-top: 86px;
      }
    }

    &__doc {
      padding-left: 48px;
      background-image: url('~/static/images/doc.svg');
      background-repeat: no-repeat;
      background-position: 0 50%;    
    }        

    &__images {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    } 

    &__link {
      display: block;
      color: white;
      margin: 48px 0;
      padding: 24px 0;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }        
  }

  @include media-breakpoint-max(sm) {
    .c-resources {
      &__content {
        flex-direction: column;
      }

      &__link {
      color: $cd-orange;
      text-decoration: underline;
      }           
    }
  }
</style>
