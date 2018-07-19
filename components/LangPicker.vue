<template>
  <select class="c-lang-picker" v-model="locale">
    <option v-for="{ name, code } in $i18n.locales" :key="code" :value="code">{{ name }}</option>
  </select>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  computed: {
    locale: {
      get() {
        return this.$route.name && this.$route.name.substr(this.$route.name.length - 5, 5);
      },
      set(locale) {
        this.localeCookie = locale;
        this.$router.push(this.switchLocalePath(locale));
      }
    },
    localeCookie: {
      get() {
        const cookie = Cookies.get('NG_TRANSLATE_LANG_KEY');
        if (!cookie) return;
        return cookie.substring(1, cookie.length - 1).replace('_', '-');
      },
      set(locale) {
        Cookies.set('NG_TRANSLATE_LANG_KEY', `"${locale.replace('-', '_')}"`);
      },
    },
    closestMatchingLocale() {
      const browserLocaleCode = navigator.language;
      const browserLocaleShortCode = navigator.language.split('-')[0];
      const matchingCode = this.$i18n.locales.find(locale => locale.code === browserLocaleCode);
      if (matchingCode) return matchingCode.code;
      const matchingShortCode = this.$i18n.locales.find(locale => locale.shortCode === browserLocaleShortCode);
      if (matchingShortCode) return matchingShortCode.code;
      return 'en-US';
    },
  },
  created() {
    if (process.browser && this.locale === 'en-US') {
      if (this.localeCookie && this.localeCookie !== this.locale) {
        this.$router.replace(this.switchLocalePath(this.localeCookie));
      } else if (!this.localeCookie && this.closestMatchingLocale !== this.locale) {
        this.$router.replace(this.switchLocalePath(this.closestMatchingLocale));
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  .c-lang-picker {
    appearance: none;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: transparent;
    background-image: url(~/static/images/down-chevron.svg);
    background-size: 18px;
    background-repeat: no-repeat;
    background-position: center right 12px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    line-height: 40px;
    padding: 0 40px 0 12px;
  }
</style>
