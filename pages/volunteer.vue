<template>
  <div>
    <Banner />
    <Hero />
    <Testimonials :dojos="dojos" />
    <How />
    <Resources />
  </div>
</template>

<script>
import axios from 'axios';
import Banner from '~/components/Banner';
import Hero from '~/components/volunteer/Hero';
import Testimonials from '~/components/volunteer/Testimonials';
import How from '~/components/volunteer/How';
import Resources from '~/components/volunteer/Resources';

export default {
  head () {
    return {
      title: this.$t('How you can volunteer with CoderDojo'),
      meta: [
        { hid: 'description', name: 'description', property: 'description', content: this.$t('Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo attendees (Ninjas). Maybe you love working with kids, perhaps you want to share your technical skills, or maybe you are creative and have an eye for design. All of these traits make you the perfect Dojo volunteer!') },
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: this.$t('How you can volunteer with CoderDojo') },
        { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'CoderDojo' },
        { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coderdojo.com/volunteer/' },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', name: 'og:image', property: 'og:image', content: '~/static/images/volunteer/meta-header.png' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.$t('Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo attendees (Ninjas). Maybe you love working with kids, perhaps you want to share your technical skills, or maybe you are creative and have an eye for design. All of these traits make you the perfect Dojo volunteer!') },
        { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: this.$t('How you can volunteer with CoderDojo') },
        { hid: 'twitter:url', name: 'twitter:url', property: 'twitter:url', content: 'https://coderdojo.com/volunteer/' },
        { hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: '~/static/images/volunteer/meta-header.png' },
        { hid: 'twitter:description', name: 'twitter:description', property: 'twitter:description', content: this.$t('Dojos benefit from a mix of Mentors providing support, guidance and encouragement to CoderDojo attendees (Ninjas). Maybe you love working with kids, perhaps you want to share your technical skills, or maybe you are creative and have an eye for design. All of these traits make you the perfect Dojo volunteer!') },
        { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },

      ]
    }
  },
  components: {
    Banner,
    Hero,
    Testimonials,
    How,
    Resources,
  },
  async asyncData () {
    const { data } = await axios.post('https://zen.coderdojo.com/api/2.0/dojos', {
      query: {
        verified: 1,
        deleted: 0,
        stage: {
          ne$: 4,
        },
        fields$: ['alpha2'],
      }
    });
    return {
      dojos: data,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
