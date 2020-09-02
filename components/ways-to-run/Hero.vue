<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">{{ $t('Options for running your Dojo') }}</h1>
    <div class="c-hero__intro">
      <p>CoderDojo volunteers and clubs all around the world have been affected by the coronavirus pandemic. Champions and mentors from across the globe have talked to us to share how they are running their clubs now, and we're amazed by their resilience and creativity.</p>

      <p>Inspired by these community examples, here are three options for how you can continue to provide fun, creative learning opportunities for the young people and volunteers in your Dojo.</p>

      <p>Choose the option that works best for you, depending on your current situation and your Dojo members' needs, and feel free to adapt your club activities if your situation and local health guidance change.</p>
    </div>
    <!-- <div class="c-hero__images">
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
    </div> -->
  </div>
</template>

<script>
import VideoModal from "../VideoModal";
export default {
  components: {
    VideoModal,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/_variables.scss";

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

  &__intro,
  &__outro {
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
