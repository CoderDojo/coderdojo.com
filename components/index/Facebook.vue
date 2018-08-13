<template>
  <div class="c-facebook">
    <div class="c-facebook__illustration">
      <img src="~/static/images/index/globe.png" />
    </div>
    <div class="c-facebook__content center-text">
      <h2 class="c-facebook__header">{{ $t('Talk to our community') }}</h2>
      <a href="https://facebook.com/groups/coderdojo" class="c-facebook__link">{{ $t('Say hello in our Facebook Group') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-facebook {
    background: $grey-bg;

    &__illustration {
      text-align: center;

      img {
        max-width: 250px;
      }
    }

    &__content {
      padding-top: 96px;
      margin-top: -96px;
      background: $cd-orange;
      padding-bottom: 40px;
    }

    &__header {
      margin: 10px 0;
    }

    &__link {
      display: block;
      color: $white;
      margin: 20px 0;
      padding: 20px 0;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
