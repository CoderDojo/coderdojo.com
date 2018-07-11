<template>
  <div class="c-lang-picker">
    <nuxt-link :to="switchLocalePath(value)" v-for="{ text, value } in availableLanguages" :key="value" :value="value">{{ text }}</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: 'en',
      availableLanguages: [
        {
          value: 'en',
          text: 'English',
        },
        {
          value: 'fr',
          text: 'French',
        },
      ],
    };
  },
  // watch: {
  //   locale(lang) {
  //     console.log(this.$i18n);
  //     this.$i18n.switchLocalePath(lang);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
  .c-lang-picker {
    background: #fff;
    border: 1px solid #222;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px;
    appearance: none;
  }
</style>
