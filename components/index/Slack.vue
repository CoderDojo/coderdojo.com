<template>
  <div class="c-slack">
    <div class="c-slack__illustration">
      <img src="~/static/images/index/globe.png" />
    </div>
    <div class="c-slack__content center-text">
      <h1 class="c-slack__header">{{ $t('Talk to our community') }}</h1>
      <a href="#" class="c-slack__link">{{ $t('Join our Slack community') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-slack {
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
      font-size: 28px;
      margin: 10px 0;
    }

    &__link {
      display: block;
      color: $white;
      margin: 20px 0;
      padding: 20px 0;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
