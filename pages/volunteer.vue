<template>
  <div>
    <Hero />
    <Testimonials />
    <How />
    <Resources />
  </div>
</template>

<script>
import Hero from '~/components/volunteer/Hero';
import Testimonials from '~/components/volunteer/Testimonials';
import How from '~/components/volunteer/How';
import Resources from '~/components/volunteer/Resources';

export default {
  components: {
    Hero,
    Testimonials,
    How,
    Resources,
  },
};
</script>

<style lang="scss" scoped>
</style>
