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
