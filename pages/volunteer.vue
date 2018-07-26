<template>
  <div>
    <VolunteerHero />
    <VolunteerTestimonials />
    <VolunteerHow />
    <VolunteerResources />
  </div>
</template>

<script>
import VolunteerHero from '~/components/volunteer/Hero';
import VolunteerTestimonials from '~/components/volunteer/Testimonials';
import VolunteerHow from '~/components/volunteer/How';
import VolunteerResources from '~/components/volunteer/Resources';

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
