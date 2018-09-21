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
        title: this.$t('Our range of learning and training resources'),
        meta: [
          { hid: 'description', name: 'description', property: 'description', content: this.$t('Our collection of learning and training resources will help you in setting up and running your Dojo. The collection includes educational material, exercises and project ideas to give to the Ninjas at your Dojo as well as links to training materials and content for organisers.') },  
          { hid: 'og:title', name: 'og:title', property: 'og:title', content: this.$t('Our range of learning and training resources') },
          { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'CoderDojo' },
          { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coderdojo.com/resources/' },
          { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:image', name: 'og:image', property: 'og:image', content: '~/static/images/resources/meta-header.png' },
          { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.$t('Our collection of learning and training resources will help you in setting up and running your Dojo. The collection includes educational material, exercises and project ideas to give to the Ninjas at your Dojo as well as links to training materials and content for organisers.') },
          { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: this.$t('Our range of learning and training resources') },
          { hid: 'twitter:url', name: 'twitter:url', property: 'twitter:url', content: 'https://coderdojo.com/resources/' },
          { hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: '~/static/images/resources/meta-header.png' },
          { hid: 'twitter:description', name: 'twitter:description', property: 'twitter:description', content: this.$t('Our collection of learning and training resources will help you in setting up and running your Dojo. The collection includes educational material, exercises and project ideas to give to the Ninjas at your Dojo as well as links to training materials and content for organisers.') },
          { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }
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
