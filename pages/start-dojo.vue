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
  head () {
    return {
      title: 'Start a CoderDojo club in your local area',
      meta: [
        { property: 'og:title', content: 'Start a CoderDojo club in your local area' },
        { property: 'og:site-name', content: 'CoderDojo' },
        { property: 'og:url', content: 'https://coderdojo.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '' },
        { property: 'og:description', content: 'Starting a Dojo is a fun and incredibly rewarding experience. The most important attribute you should have is that you can bring people together for a shared goal. Our registration process will guide you every step of the way making sure you have the most useful resources to hand.' }
      ]
    }
  },
  components: {
    Hero,
    Champion,
    Questions,
  },
};
</script>

<style lang="scss" scoped>
</style>