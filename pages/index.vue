<template>
  <div>
    <Hero :dojos="dojos" />
    <Testimonials />
    <Volunteer />
    <StartADojo />
    <Community />
    <OurTeam />
    <Slack />
  </div>
</template>

<script>
import axios from 'axios';
import Hero from '~/components/index/Hero';
import Testimonials from '~/components/index/Testimonials';
import Volunteer from '~/components/index/Volunteer';
import StartADojo from '~/components/index/StartADojo';
import Community from '~/components/index/Community';
import OurTeam from '~/components/index/OurTeam';
import Slack from '~/components/index/Slack';

export default {
  head () {
    return {
      title: 'CoderDojo – Enabling young people worldwide to create and explore technology together',
      meta: [
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'CoderDojo – Enabling young people worldwide to create and explore technology together' },
        { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'CoderDojo' },
        { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coderdojo.com' },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', name: 'og:image', property: 'og:image', content: '' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'CoderDojo believes that an understanding of programming languages is increasingly important in the modern world, that it’s both better and easier to learn these skills early, and that nobody should be denied the opportunity to do so! Any young person aged 7 - 17 can join and attend a Dojo for FREE...' }
      ]
    }
  },
  components: {
    Hero,
    Testimonials,
    Volunteer,
    StartADojo,
    Community,
    OurTeam,
    Slack,
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
