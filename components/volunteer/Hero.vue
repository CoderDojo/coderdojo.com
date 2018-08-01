<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">{{ $t('Volunteer at a Dojo near you') }}</h1>
    <div class="c-hero__images">
      <div class="c-hero__image">
        <img src="/images/volunteer/nurnberg.jpg" />
        <a href="https://zen.coderdojo.com/dojos/de/nuremberg/nuernberg" class="c-hero__image-desc">CoderDojo Nürnberg, Germany</a>
      </div>
      <div class="c-hero__image">
        <VideoModal img="/images/volunteer/why.png" src="https://www.youtube.com/embed/Q6M0IdEn07E" text="Being a mentor"/>
      </div>
      <div class="c-hero__image">
        <img src="/images/volunteer/nyc.jpg" />
        <a href="https://zen.coderdojo.com/dojos/us/new-york/new-york-ny/new-york-city" class="c-hero__image-desc">CoderDojo NYC, USA</a>
      </div>
    </div>
  </div>
</template>

<script>
import VideoModal from '../VideoModal';
export default {
  components: {
    VideoModal,
  },
};
</script>
<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-hero {
    padding: 0 0 80px 0;
    background-color: $cd-purple;

    &__header1 {
      color: $white;
      font-weight: 300;
      font-size: 40px;
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 20px;
    }

    &__images {
      display: flex;
      max-width: $content-width;
      margin: 30px auto 0 auto;
    }

    &__image {
      flex: 1;
      justify-content: space-between;
      margin: 0 20px;

      img {
        width: 100%;
      }
      &-desc {
        display: block;
        font-size: 13px;
        text-decoration: none;
        text-align: left;
        color: $white;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-hero {
      background-color: $cd-purple;

      &__header1 {
        font-size: $mobile-h1-size;
        font-weight: $mobile-h1-weight;
      }

      &__images {
        flex-direction: column;
      }

      &__image {
        margin: 20px 40px;

        &:first-child {
          display: none;
        }
      }
    }
  }
</style>
