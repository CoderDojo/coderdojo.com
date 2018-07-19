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
import VolunteerHero from '~/components/index/VolunteerHero';
import VolunteerTestimonials from '~/components/index/VolunteerTestimonials';
import VolunteerHow from '~/components/index/VolunteerHow';
import Volunteer from '~/components/index/Volunteer';
import StartADojo from '~/components/index/StartADojo';
import VolunteerResources from '~/components/index/VolunteerResources';
import VolunteerQuestions from '~/components/index/VolunteerQuestions';

export default {
  components: {
    VolunteerHero,
    VolunteerTestimonials,
    VolunteerHow,
    Volunteer,
    StartADojo,
    VolunteerResources,
    VolunteerQuestions,
  },
};
</script>

<style lang="scss" scoped>
</style>
