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
  head () {
    return {
      title: 'How you can volunteer with CoderDojo',
      meta: [
        { property: 'og:title', content: 'How you can volunteer with CoderDojo' },
        { property: 'og:site-name', content: 'CoderDojo' },
        { property: 'og:url', content: 'https://coderdojo.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '' },
        { property: 'og:description', content: 'Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo attendees (Ninjas). Maybe you love working with kids, perhaps you want to share your technical skills, or maybe you are creative and have an eye for design. All of these traits make you the perfect Dojo volunteer!' }
      ]
    }
  },
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
