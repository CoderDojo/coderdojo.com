<template>
  <div class="c-questions">
    <div class="c-questions__illustration">
      <img src="~/static/images/help.svg" />
    </div>
    <div class="c-questions__content">
      <h1 class="c-questions__header">{{ $t('Have more questions?') }}</h1>
      <a href="#" class="c-questions__link">{{ $t('View our help articles') }}</a>
      <hr class="c-questions__divider">
      <a href="#" class="c-questions__link">{{ $t('Or ask us directly') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-questions {
    background: $cd-purple;

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

    &__link {
      display: block;
      color: $cd-orange;
      margin: 20px 0;
      padding: 20px 0;
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
  }
</style>
