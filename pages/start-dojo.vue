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
        { hid: 'title', name: 'title', property: 'title', content: 'Start a CoderDojo club in your local area' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Starting a Dojo is a fun and incredibly rewarding experience. The most important attribute you should have is that you can bring people together for a shared goal. Our registration process will guide you every step of the way making sure you have the most useful resources to hand.' },
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Start a CoderDojo club in your local area' },
        { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'CoderDojo' },
        { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coderdojo.com' },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', name: 'og:image', property: 'og:image', content: '' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Starting a Dojo is a fun and incredibly rewarding experience. The most important attribute you should have is that you can bring people together for a shared goal. Our registration process will guide you every step of the way making sure you have the most useful resources to hand.' },
        { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: 'Start a CoderDojo club in your local area' },
        { hid: 'twitter:url', name: 'twitter:url', property: 'twitter:url', content: 'https://coderdojo.com' },
        { hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: '' },
        { hid: 'twitter:description', name: 'twitter:description', property: 'twitter:description', content: 'Starting a Dojo is a fun and incredibly rewarding experience. The most important attribute you should have is that you can bring people together for a shared goal. Our registration process will guide you every step of the way making sure you have the most useful resources to hand.' },
        { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }
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