<template>
  <div class="c-resources" id="resources">
    <div class="c-resources__illustration">
      <img src="~/static/images/help.svg" />
    </div>
    <div class="c-resources__content">
      <h2 class="c-resources__header">{{ $t('Resources to help you mentor young people') }}</h2>
      <a href="https://help.coderdojo.com/cdkb/s/topic/0TO8d000000PD63GAG/training-and-support" class="c-resources__link">{{ $t('Training and support for volunteers') }}</a>
      <hr class="c-resources__divider">
      <a href="/resources" class="c-resources__link">{{ $t('View our ready made resources for Dojos') }}</a>
      <hr class="c-resources__divider">
      <a href="/contact" class="c-resources__link">{{ $t('Ask us directly') }}</a>
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
      margin: 10px 0;
    }

    &__link {
      display: block;
      color: $cd-orange;
      margin: 16px 0;
      padding: 24px 0;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }     
    }
     
    &__divider {
      max-width: $content-width;
      margin: 16px auto;
      background-color: #CAC4CE; 
      height: 1px; 
      border: 0; 
    }
  }

  @include media-breakpoint-max(sm) {
    .c-resources {
      &__link {
        margin: 16px 0;
      }
      &__divider {
      margin: 0px auto;
      }     
    }
  }
</style>
