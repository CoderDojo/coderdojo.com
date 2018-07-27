<template>
  <div class="c-resources">
    <div class="c-resources__illustration">
      <img src="~/static/images/help.svg" />
    </div>
    <div class="c-resources__content">
      <h1 class="c-resources__header">{{ $t('Resources to help you mentor') }}</h1>
      <a href="#" class="c-resources__link">{{ $t('View our help articles') }}</a>
      <hr class="c-resources__divider">
      <a href="#" class="c-resources__link">{{ $t('View our other resources for mentors') }}</a>
      <hr class="c-resources__divider">
      <a href="#" class="c-resources__link">{{ $t('Or ask us directly') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-resources {
    background: $white;

    &__illustration {
      text-align: center;
    }

    &__content {
      padding: 80px 80px 40px;
      margin-top: -50px;
      background: $grey-bg;
      text-align: center;
    }

    &__header {
      font-size: 28px;
      margin: 10px 0;
    }

    &__link {
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
      max-width: $content-width;
      margin: 48px auto;
      background-color: #CAC4CE; 
      height: 1px; 
      border: 0; 
    }
  }
</style>
