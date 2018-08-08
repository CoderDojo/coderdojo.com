<template>
  <div class="c-helpdesk" id="helpdesk">
    <div class="c-helpdesk__image">
      <img src="~/static/images/help.svg" />
    </div>
    <h2 class="center-text">{{ $t('Our Helpdesk') }}</h2>
    <p class="c-helpdesk__text center-text">{{ $t('We provide lots of in-depth articles on running your Dojo in our help desk section. This is your go-to place for answers to all your Dojo-related questions, and it also has a chat box for you to contact us if you need anything else.') }}</p>
    <div class="c-helpdesk__cta">
      <a class="c-button c-button--orange" href="https://help.coderdojo.com/">{{ $t('Visit our help desk') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-helpdesk {
    background: $grey-bg;
    padding: 40px 0;

    &__image {
      text-align: center;

      img {
        margin-top: -100px;
      }
    }

    &__text {
      max-width: 605px;
      margin: 20px auto 40px auto;
    }

    &__cta {
      text-align: center;
      margin: 40px 0 40px 0;
    }
  }
</style>
