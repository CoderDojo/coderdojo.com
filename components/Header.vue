<template>
  <div class="c-header">
    <div class="c-header__content">
      <div class="c-header__logo">
        <nuxt-link :to="localePath({ name: 'index' })"><img src="/images/coderdojo.svg" /></nuxt-link>
      </div>
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
};
</script>

<style lang="scss" scoped>
  .c-header {
    border-bottom: 1px solid #E3E3E3;
    padding: 20px;

    &__content {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }

    &__logo {
      flex: 1;
    }
  }
</style>
