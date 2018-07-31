<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">{{ $t('The community of {count} free, open and local programming clubs for young people', { count: numOfDojos }) }}</h1>
    <h2 class="c-hero__header2">{{ $t('70,000 young people are creating with technology with the help of 240,000 volunteers in {countries} countries. Join us!', { countries: numOfCountries }) }}</h2>
    <div class="c-hero__cta">
      <a href="#" class="c-button c-button--orange c-button--search">{{ $t('Find a Dojo') }}</a>
      <a href="/volunteer" class="c-button c-button--teal">{{ $t('Volunteer at a Dojo') }}</a>
    </div>
    <div class="c-hero__images">
      <div class="c-hero__image">
        <img src="/images/index/hero/anvil.jpg" />
        <a href="https://zen.coderdojo.com/dojos/us/indiana/west-lafayette-in/west-lafayette-indiana-anvil" class="c-hero__image-desc">CoderDojo Anvil, Indiana, USA</a>
      </div>
      <div class="c-hero__image">
        <VideoModal img="/images/index/hero/what-is.png" src="https://www.youtube.com/embed/7XQOVKd-vVI" text="What is CoderDojo?"/>
      </div>
      <div class="c-hero__image">
        <img src="/images/index/hero/nurnberg.jpg"/>
        <a href="https://zen.coderdojo.com/dojos/de/nuremberg/nuernberg" class="c-hero__image-desc">CoderDojo Nürnberg, Germany</a>
      </div>
    </div>
  </div>
</template>

<script>
import VideoModal from '../VideoModal';
export default {
  props: ['dojos'],
  components: {
    VideoModal,
  },
  computed: {
    numOfDojos() {
      return this.dojos.length;
    },
    numOfCountries() {
      const countries = this.dojos.map(dojo => dojo.alpha2)
      return countries.filter((item, pos) => countries.indexOf(item) == pos).length;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-hero {
    background-image:
      radial-gradient(ellipse at bottom, $white, $white calc(50% - 2px), transparent 50%, transparent 100%),
      linear-gradient(to bottom, $cd-purple 0%, $cd-purple-gradient 100%);
    background-size: 200% 300px, 100%;
    background-position: bottom -100px center, top right;
    background-repeat: no-repeat;

    &__header1 {
      color: $white;
      font-weight: 300;
      font-size: 40px;
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 20px;
    }

    &__header2 {
      color: $white;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
    }

    &__cta {
      display: flex;
      justify-content: center;
      margin: 40px auto;
      max-width: 680px;

      .c-button {
        flex: 1;
        margin: 0 20px;
      }
    }

    &__images {
      display: flex;
      max-width: $content-width;
      margin: 60px auto 0 auto;
    }

    &__image {
      flex: 1;
      justify-content: space-between;
      margin: 0 20px;

      img {
        width: 100%;
        border-radius: 3px;
      }
      &-desc {
        display: block;
        text-decoration: none;
        font-size: 13px;
        text-align: left;
        color: $black;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-hero {
      background-image:
        radial-gradient(ellipse at bottom, $white, $white calc(70% - 2px), transparent 70%, transparent 100%),
        linear-gradient(to bottom, $cd-purple 0%, $cd-purple-gradient 100%);
      background-size: 300% 300px, 100%;
      background-position: bottom 0 center, top right;
      background-repeat: no-repeat;

      &__header1 {
        font-size: 22px;
      }

      &__header2 {
        font-size: 12px;
      }

      &__cta {
        flex-direction: column;

        .c-button {
          margin: 10px 40px;
        }
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
