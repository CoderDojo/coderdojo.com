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
          { hid: 'title', name: 'title', property: 'title', content: 'Our range of learning and training resources' },
          { hid: 'description', name: 'description', property: 'description', content: 'Our collection of learning and training resources will help you in setting up and running your Dojo. The collection includes educational material, exercises and project ideas to give to the Ninjas at your Dojo as well as links to training materials and content for organisers.' },  
          { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Our range of learning and training resources' },
          { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'CoderDojo' },
          { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coderdojo.com' },
          { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:image', name: 'og:image', property: 'og:image', content: '' },
          { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Our collection of learning and training resources will help you in setting up and running your Dojo. The collection includes educational material, exercises and project ideas to give to the Ninjas at your Dojo as well as links to training materials and content for organisers.' }
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
