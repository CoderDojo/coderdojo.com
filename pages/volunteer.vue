<template>
  <div>
    <VolunteerHero />
    <VolunteerTestimonials />
    <VolunteerHow />
    <VolunteerResources />
    <VolunteerQuestions />
  </div>
</template>

<script>
import VolunteerHero from '~/components/index/volunteer/Hero';
import VolunteerTestimonials from '~/components/index/volunteer/Testimonials';
import VolunteerHow from '~/components/index/volunteer/How';
import StartADojo from '~/components/index/StartADojo';
import VolunteerResources from '~/components/index/volunteer/Resources';
import VolunteerQuestions from '~/components/index/volunteer/Questions';

export default {
  components: {
    VolunteerHero,
    VolunteerTestimonials,
    VolunteerHow,
    StartADojo,
    VolunteerResources,
    VolunteerQuestions,
  },
};
</script>

<style lang="scss" scoped>
</style>
