<template>
  <div>
    <Hero />
    <OrganisationalResources />
    <Helpdesk />
  </div>
</template>

<script>
  import Hero from '~/components/resources/Hero';
  import OrganisationalResources from '~/components/resources/OrganisationalResources';
  import Helpdesk from '~/components/resources/Helpdesk';

  export default {
    components: {
      Hero,
      OrganisationalResources,
      Helpdesk,
    },
  };
</script>


<style>
</style>
