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
    head () {
      return {
        title: 'Our range of learning and training resources',
        meta: [
          { property: 'og:title', content: 'Our range of learning and training resources' },
          { property: 'og:site-name', content: 'CoderDojo' },
          { property: 'og:url', content: 'https://coderdojo.com' },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: '' },
          { property: 'og:description', content: 'Our collection of learning and training resources will help you in setting up and running your Dojo. The collection includes educational material, exercises and project ideas to give to the Ninjas at your Dojo as well as links to training materials and content for organisers.' }
        ]
      }
    },
    components: {
      Hero,
      OrganisationalResources,
      Helpdesk,
    },
  };
</script>


<style>
</style>
