<template>
  <div class="c-organisational-resources">
    <h1 class="center-text">{{ $t('Resources to help your Dojo run smoothly') }}</h1>
    <p class="center-text">{{ $t('CoderDojo resources such as our new e-learning modules and erasmus+ recommended practice.') }}</p>
    <div class="c-organisational-resources__section" v-for="(resource, i) in resources" :key="i">
      <div class="c-organisational-resources__section-image" v-if="i % 2 === 0">
        <img :src="resource.imgSrc" v-if="resource.imgSrc"/>
        <iframe width="560" height="315" :src="resource.videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="resource.videoSrc"></iframe>
      </div>
      <div class="c-organisational-resources__section-text">
        <h1>{{ $t(resource.title) }}</h1>
        <p>{{ $t(resource.description) }}</p>
        <a :href="resource.anchorHref">{{ $t(resource.anchorText) }}</a>
      </div>
      <div class="c-organisational-resources__section-image" v-if="i % 2 !== 0">
        <img :src="resource.imgSrc" v-if="resource.imgSrc"/>
        <iframe width="560" height="315" :src="resource.videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="resource.videoSrc"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  import resources from '~/data/resources/organisational-resources';

  export default {
    data() {
      return {
        resources,
      };
    },
  };
</script>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-organisational-resources {
    max-width: $content-width;
    margin: 80px auto 120px auto;

    &__section {
      display: flex;
      margin: 80px 0px;

      &-image {
        flex: 1;
        img, iframe {
          width: 100%;
        }
      }

      &-text {
        flex: 1;
        margin: 0 20px 0 30px;

        h1 {
          font-size: 28px;
          margin: 30px 0;
        }

        p {
          margin: 20px 0;
        }

        a {
          color: $cd-orange;
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }
  @include media-breakpoint-max(md) {
    .c-organisational-resources {
      &__section {
        flex-direction: column;
        &-text {
          padding: 0px 15px;
        }
      }
    }
  }
</style>
