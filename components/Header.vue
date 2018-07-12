<template>
  <div class="c-header">
    <div class="c-header__content">
      <div class="c-header__logo">
        <nuxt-link :to="localePath({ name: 'index' })"><img src="/images/coderdojo.svg" /></nuxt-link>
      </div>
      <cd-nav class="c-header__nav"></cd-nav>
      <div class="c-header__right">
        <a class="c-header__login" href="https://zen.coderdojo.com/login">Login</a>
        <lang-picker></lang-picker>
      </div>
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
};
</script>

<style lang="scss" scoped>
  .c-header {
    border-bottom: 1px solid #E3E3E3;
    padding: 30px;
    background: #642580;
    color: #fff;
    font-size: 18px;
    margin-bottom: -1px;

    &__content {
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      color: #fff;
      line-height: 45px;
      padding: 0 14px;
      text-decoration: none;
    }
  }
</style>
