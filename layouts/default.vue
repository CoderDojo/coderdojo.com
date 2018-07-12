<template>
  <section class="container">
    <cd-header></cd-header>
    <div class="content">
      <nuxt/>
    </div>
    <cd-footer></cd-footer>
  </section>
</template>

<script>
import CdHeader from '@/components/Header';
import CdFooter from '@/components/Footer';

export default {
  components: {
    CdHeader,
    CdFooter,
  },
};
</script>

<style lang="scss">
html {
  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

@import '~/assets/button.scss';
</style>
