<template>
  <div class="c-resources">
    <div class="c-resources__content">
      <img class="c-resources__images" src="~/static/images/doc.svg" />
      <div class="c-resources__individual">
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
      padding: 0px 64px;
      justify-content: center;

      &-link {
        margin-top: 86px;
      }
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
