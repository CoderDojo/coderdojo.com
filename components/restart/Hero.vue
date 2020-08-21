<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">{{ $t('Options for running your club') }}</h1>
    <div class="c-hero__intro">
      <p>CodeDojo clubs have been hugely impacted by the coronavirus pandemic. In early 2020 Volunteers thoughtfully decided when to pause hosting their regular in-person sessions. Since then it’s been inspiring to hear how champions and mentors have adapted their clubs.</p>

      <p>Below are three options to help you continue providing fun and creative, learning opportunities for young people and volunteers. You know your Dojo best - feel free to adapt and combine elements of these options to suit your needs and those of your Dojo members.</p>
    </div>
    <div class="c-hero__images">
      <div class="c-hero__image">
        <VideoModal img="volunteer" src="https://www.youtube.com/embed/Q6M0IdEn07E" text="Being a mentor"/>
        <p class="c-hero__image-desc">Online sessions</p>
      </div>
      <div class="c-hero__image">
        <VideoModal img="volunteer" src="https://www.youtube.com/embed/Q6M0IdEn07E" text="Being a mentor"/>
        <p class="c-hero__image-desc">Remote activities</p>
      </div>
      <div class="c-hero__image">
        <VideoModal img="volunteer" src="https://www.youtube.com/embed/Q6M0IdEn07E" text="Being a mentor"/>
        <p class="c-hero__image-desc">In-person sessions</p>
      </div>
    </div>
    <div class="c-hero__outro">
      <p>Not sure which option suits your local situation? <a href=".">Check out our useful framework</a>.</p>
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
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 20px;
      font-weight: bold;
    }

    &__images {
      display: flex;
      max-width: $content-width;
      margin: 30px auto 0 auto;
    }

    &__intro, &__outro {
      max-width: $content-width;
      margin: 0 auto;
      color: $white;
      text-align: left; 

      p:not(:last-child) {
        padding-bottom: 1em;
      }
    }
    
    &__outro {
      max-width: $content-width;
      margin: 2em auto 0 auto;
      color: $white;
      text-align: center;

      a {
        color: $white;
        text-decoration: underline;
        font-weight: bold;
      } 
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
        font-size: 15px;
        text-align: center;
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
