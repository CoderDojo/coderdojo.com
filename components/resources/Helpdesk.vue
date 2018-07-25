<template>
  <div class="c-helpdesk">
    <div class="c-helpdesk__image">
      <img src="~/static/images/help.svg" />
    </div>
    <h1 class="center-text">{{ $t('Our Helpdesk content') }}</h1>
    <p class="c-helpdesk__text center-text">{{ $t('We provide lots of indepth articles and help on running a Dojo. It should be your first stop shop on everything Dojo related and you can contact us through there to get more help if you still cannot find answers.') }}</p>
    <div class="c-helpdesk__cta">
      <a class="c-button c-button--orange" href="#">{{ $t('Visit our helpdesk') }}</a>
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
