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
@import '~/assets/typography.scss';
</style>
