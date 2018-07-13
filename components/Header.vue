<template>
  <div class="c-header" :class="{'c-header--mobile-nav-open': mobileNavOpen }">
    <div class="c-header__content">
      <div class="c-header__logo">
        <nuxt-link :to="localePath({ name: 'index' })">
          <img v-show="mobileNavOpen" src="/images/coderdojo-black.svg" />
          <img v-show="!mobileNavOpen" src="/images/coderdojo.svg" />
        </nuxt-link>
      </div>
      <cd-nav class="c-header__nav"></cd-nav>
      <div class="c-header__right">
        <a class="c-header__login" href="https://zen.coderdojo.com/login">Login</a>
        <lang-picker></lang-picker>
      </div>
      <div class="c-header__hamburger">
        <img v-show="mobileNavOpen" src="~/static/images/x-orange.svg" @click="toggleMobileNav" />
        <img v-show="!mobileNavOpen" src="~/static/images/hamburger.svg" @click="toggleMobileNav" />
      </div>
    </div>
    <div class="c-header__mobile-nav">
      <cd-nav></cd-nav>
      <lang-picker></lang-picker>
    </div>
  </div>
</template>

<script>
import CdNav from '@/components/Nav';
import LangPicker from '@/components/LangPicker';

export default {
  components: {
    CdNav,
    LangPicker,
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
      img {
        height: 45px;
      }
    }

    &__nav {
      flex: 2;
      justify-content: center;
    }

    &__right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
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
      height: 0;
      padding: 0 28px;
      transition: height 0.2s ease-out, padding 0.2s ease-out, background-position 0.2s ease-out;
      background-image: url(~/static/images/nav-character.svg), linear-gradient(to bottom, $cd-orange-gradient 0%, $cd-orange 100%);
      background-position: bottom -250px right 20px, top left;
      background-repeat: no-repeat;
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
            overflow: auto;
            padding: 28px;
            height: calc(100vh - 70px);
            background-position: bottom right 20px, top left;
          }
        }
      }
    }
  }
</style>
