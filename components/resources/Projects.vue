<template>
  <div class="c-projects center-text" id="projects">
    <h2>{{ $t('Projects for your Dojo') }}</h2>
    <div class="c-projects__cards">
      <a :href="projectsUrl" class="c-projects__card" v-for="(project, i) in projects" :key="i">
        <img :src="project.imgSrc" />
        <h3>{{ $t(project.title) }}</h3>
      </a>
    </div>
    <div class="c-projects__cta">
      <a :href="projectsUrl" class="c-button c-button--orange">{{ $t('View more CoderDojo projects') }}</a>
    </div>
    <div class="c-projects__discuss">
      <p>{{ $t('If you\'ve created a piece of learning content for your Dojo or found an online resource that others might find useful, please share and talk about it on our forums!') }}</p>
      <a href="https://forums.coderdojo.com/">{{ $t('Discuss your content on our forums') }}</a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import projectsConf from '~/data/resources/projects';
  // Required for webpack to prepare the images 
  const projectImages = {
    appInventor: require('~/static/images/resources/appInventor.png'),
    scratch: require('~/static/images/resources/scratch.png'),
    html: require('~/static/images/resources/sushi.png')
  }
  export default {
    data() {
      return {
        projects: [],
        translatedProjects: [],
      }
    },
    computed: {
      locale: function () {
        return this.$store.state.locale === 'en-US' ? 'en' : this.$store.state.locale ;
      },
      projectsUrl: function () {
        return `https://projects.raspberrypi.org/${this.locale}/coderdojo`
      },
    },
    async mounted () {
      this.translatedProjects = await Promise.all(projectsConf.map(
        p => axios.get(`https://learning-admin.raspberrypi.org/api/v1/${this.locale}/${p.slug}`)
          .then(d => ({ ...p, title: d.data.data.attributes.title })) 
      ))
      // Reset the projects to the default conf in case CORS blocks the translation
      .catch(() => this.translatedProjects = projectsConf);
      // Assign an image to each projects
      this.projects = this.translatedProjects.map(p => {
        return { ...p, imgSrc : projectImages[p.key] };
      });
    },
  };
</script>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-projects {
    &__cards {
      display: flex;
      margin: 40px auto;
      flex-wrap: wrap;
    }

    &__card {
      flex: 1;
      background: $white;
      color: $black;
      border-radius: 5px;
      margin: 0 15px;
      width: 30%;
      text-decoration: none;

      img {
        width: 100%;
      }

      h3 {
        text-transform: uppercase;
        margin: 20px;
      }

      p {
        margin: 5px 20px 20px 20px;
        text-align: center;
      }
    }

    &__cta {
      text-align: center;
      margin: 40px 0;
    }

    &__discuss {
      text-align: center;
        font-size: 18px;

      p {
        max-width: 605px;
        margin: 80px auto 40px;
      }

      a {
        display: block;
        color: $cd-orange;
        font-weight: bold;
        text-decoration: underline;
        margin: 40px 0;
      }
    }
  }
  @include media-breakpoint-max(sm) {
    .c-projects {
      &__cards {
        flex-direction: column;
      }
      &__card {
        width: auto;
        margin-right: 45px;
        margin-left: 45px;
        margin-bottom: 30px;
      }
      &__discuss {
        margin: 0 20px;
      }
    }
  }
</style>
