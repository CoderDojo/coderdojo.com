<template>
  <div>
    <Banner />
    <Hero :dojos="dojos" />
    <Birthday/>
    <Testimonials/>
    <Volunteer />
    <StartADojo />
    <Community />
    <OurTeam />
    <Facebook />
  </div>
</template>

<script>
import axios from 'axios';
import Banner from '~/components/Banner';
import Hero from '~/components/index/Hero';
import Birthday from '~/components/index/Birthday';
import Testimonials from '~/components/index/Testimonials';
import Volunteer from '~/components/index/Volunteer';
import StartADojo from '~/components/index/StartADojo';
import Community from '~/components/index/Community';
import OurTeam from '~/components/index/OurTeam';
import Facebook from '~/components/index/Facebook';

export default {
  head () {
    return {
      title: this.$t('CoderDojo – Enabling young people worldwide to create and explore technology together'),
      meta: [
        { hid: 'description', name: 'description', property: 'description', content: this.$t('CoderDojo is a global movement of free, volunteer-led, community-based computer programming clubs for young people. Children can visit a Dojo where they can learn to code, build websites, create apps or games, and explore technology in an creative and social environment.') },
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: this.$t('CoderDojo – Enabling young people worldwide to create and explore technology together') },
        { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'CoderDojo' },
        { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coderdojo.com' },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', name: 'og:image', property: 'og:image', content: '~/static/images/index/meta-header.png' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.$t('CoderDojo is a global movement of free, volunteer-led, community-based computer programming clubs for young people. Children can visit a Dojo where they can learn to code, build websites, create apps or games, and explore technology in an creative and social environment.') },
        { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: this.$t('CoderDojo – Enabling young people worldwide to create and explore technology together') },
        { hid: 'twitter:url', name: 'twitter:url', property: 'twitter:url', content: 'https://coderdojo.com' },
        { hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: '~/static/images/index/meta-header.png' },
        { hid: 'twitter:description', name: 'twitter:description', property: 'twitter:description', content: this.$t('CoderDojo is a global movement of free, volunteer-led, community-based computer programming clubs for young people. Children can visit a Dojo where they can learn to code, build websites, create apps or games, and explore technology in an creative and social environment.') },
        { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  components: {
    Banner,
    Hero,
    Birthday,
    Testimonials,
    Volunteer,
    StartADojo,
    Community,
    OurTeam,
    Facebook,
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
