<template>
  <select class="c-lang-picker" v-model="locale">
    <option v-for="{ name, code } in $i18n.locales" :key="code" :value="code">{{ name }}</option>
  </select>
</template>

<script>
export default {
  computed: {
    locale: {
      get() {
        return this.$route.name.substr(this.$route.name.length - 2, 2);
      },
      set(locale) {
        this.$router.push(this.switchLocalePath(locale));
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
