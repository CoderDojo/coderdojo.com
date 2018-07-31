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
        { hid: 'title', name: 'title', property: 'title', content: 'How you can volunteer with CoderDojo' },
        { hid: 'description', name: 'description', property: 'description', content: 'Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo attendees (Ninjas). Maybe you love working with kids, perhaps you want to share your technical skills, or maybe you are creative and have an eye for design. All of these traits make you the perfect Dojo volunteer!' },
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'How you can volunteer with CoderDojo' },
        { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'CoderDojo' },
        { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coderdojo.com' },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', name: 'og:image', property: 'og:image', content: '' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo attendees (Ninjas). Maybe you love working with kids, perhaps you want to share your technical skills, or maybe you are creative and have an eye for design. All of these traits make you the perfect Dojo volunteer!' },
        { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: 'How you can volunteer with CoderDojo' },
        { hid: 'twitter:url', name: 'twitter:url', property: 'twitter:url', content: 'https://coderdojo.com' },
        { hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: '' },
        { hid: 'twitter:description', name: 'twitter:description', property: 'twitter:description', content: 'Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo attendees (Ninjas). Maybe you love working with kids, perhaps you want to share your technical skills, or maybe you are creative and have an eye for design. All of these traits make you the perfect Dojo volunteer!' },
        { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },

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
