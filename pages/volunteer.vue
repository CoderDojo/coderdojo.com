<template>
  <div>
    <VolunteerHero />
    <VolunteerTestimonials />
    <VolunteerHow />
    <VolunteerResources />
  </div>
</template>

<script>
import VolunteerHero from '~/components/index/volunteer/Hero';
import VolunteerTestimonials from '~/components/index/volunteer/Testimonials';
import VolunteerHow from '~/components/index/volunteer/How';
import VolunteerResources from '~/components/index/volunteer/Resources';

export default {
  components: {
    VolunteerHero,
    VolunteerTestimonials,
    VolunteerHow,
    VolunteerResources,
  },
};
</script>

<style lang="scss" scoped>
</style>
