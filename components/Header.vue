<template>
  <div class="c-header" :class="{'c-header--mobile-nav-open': mobileNavOpen }">
    <div class="c-header__content">
      <div class="c-header__logo">
        <nuxt-link :to="localePath({ name: 'index' })">
          <img class="c-header__logo-img" src="~/static/images/coderdojo.svg" />
          <img class="c-header__logo-img--black" src="~/static/images/coderdojo-black.svg" />
        </nuxt-link>
      </div>
      <cd-nav class="c-header__nav"></cd-nav>
      <div class="c-header__right">
        <a class="c-header__login" href="https://zen.coderdojo.com/login">{{ $t('Login') }}</a>
      </div>
      <div class="c-header__hamburger">
        <img class="c-header__hamburger-close" src="~/static/images/x-orange.svg" @click="toggleMobileNav" />
        <img class="c-header__hamburger-icon" src="~/static/images/hamburger.svg" @click="toggleMobileNav" />
      </div>
    </div>
    <div class="c-header__mobile-nav">
      <cd-nav></cd-nav>
    </div>
  </div>
</template>

<script>
import CdNav from '@/components/Nav';

export default {
  components: {
    CdNav,
  },
  data() {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
  watch: {
    $route() {
      this.mobileNavOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-header {
    background: $cd-purple;
    color: $white;
    font-size: 18px;

    &__content {
      padding: 30px;
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: transparent;
      transition: background 0.2s ease-out;
    }

    &__logo {
      flex: 1;
      max-width: 200px;
      img {
        height: 45px;
      }

      &-img {
        &--black {
          display: none;
        }
      }
    }

    &__nav {
      flex: 3;
      justify-content: center;
    }

    &__right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      max-width: 120px;
    }

    &__login {
      color: $white;
      line-height: 45px;
      padding: 0 14px;
      text-decoration: none;
    }

    &__hamburger {
      display: none;
    }

    &__mobile-nav {
      min-height: calc(100vh - 66px);
      transform: scaleY(0);
      transform-origin: 0 0;
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 66px;
      padding: 28px;
      opacity: 0;
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      background-image: url(~/static/images/nav-character.svg), linear-gradient(to bottom, $cd-orange-gradient 0%, $cd-orange 100%);
      background-position: bottom right 20px, top left;
      background-repeat: no-repeat;
      box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.2);
    }
  }

  @include media-breakpoint-max(md) {
    .c-header {
      &__content {
        padding: 20px;
      }

      &__logo {
        img {
          height: 26px;
        }
      }

      &__nav.c-nav {
        display: none;
      }

      &__right {
        display: none;
      }

      &__hamburger {
        display: block;

        &-close {
          display: none;
        }
      }

      &--mobile-nav-open {
        padding: 0;
        background: transparent;

        .c-header {

          &__content {
            background: $white;
            width: 100%;
            max-height: 90px;
            z-index: 2;
          }

          &__mobile-nav {
            display: block;
            transform: scaleY(1);
            opacity: 1;
          }

          &__logo-img {
            display: none;

            &--black {
              display: block;
            }
          }

          &__hamburger-icon {
            display: none;
          }

          &__hamburger-close {
            display: block;
          }
        }
      }
    }
  }
</style>
