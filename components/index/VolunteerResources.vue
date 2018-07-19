<template>
  <div class="c-resources">
    <div class="c-resources__content">
      <div class="c-resources__individual">
        <h1>{{ $t('Ready-made resources for you') }}</h1>
        <p>{{ $t('We have loads of resources to get you started as a volunteer, and you can always create and share your own.') }}</p>
      </div>
<!--       <div class="c-how__individual">
        <p>{{ $t('Find out more on the resources page') }}</p>
      </div>  --> 
    </div> 
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-resources {
    background: $cd-purple;
    padding: 40px 0;
    color: #fff;

    &__content {
      display: flex;
      max-width: $content-width;
      margin: 40px auto;  
    }

    &__individual {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 0 40px;
    }

  }

  @include media-breakpoint-max(sm) {
    .c-resources {
      &__content {
        flex-direction: column;
      }

      &__individual {
        margin: 20px 40px;
        max-width: 100%;
        padding: 0 20px;
      }
    }
  }
</style>
