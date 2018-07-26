<template>
  <div>
    <Hero />
    <Champion />
    <Questions />
  </div>
</template>

<script>
import Hero from '~/components/startadojo/Hero';
import Champion from '~/components/startadojo/Champion';
import Questions from '~/components/startadojo/Questions';
export default {
  components: {
    Hero,
    Champion,
    Questions,
  },
};
</script>

<style lang="scss" scoped>
</style>