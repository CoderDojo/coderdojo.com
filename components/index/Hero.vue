<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">{{ $t('The community of {count} free, open and local programming clubs for young people', { count: numOfDojos }) }}</h1>
    <h3 class="c-hero__header2">{{ $t('{youth} young people are being creative with technology with the help of {volunteers} volunteers in {countries} countries. Join us!', { countries: numOfCountries, youth, volunteers }) }}</h3>
    <div class="c-hero__cta">
      <a href="https://zen.coderdojo.com" class="c-button c-button--orange c-button--search">{{ $t('Find a Dojo') }}</a>
      <a href="/start-a-dojo" class="c-button c-button--teal">{{ $t('Start a Dojo') }}</a>
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
import CDFNumbers from '~/data/numbers';
export default {
  props: ['dojos'],
  components: {
    VideoModal,
  },
  data() {
    return {
      ...CDFNumbers,
    };
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
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 20px;
      font-weight: bold;
    }

    &__header2 {
      color: $white;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
      font-weight: normal;
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
        font-size: $subtext;
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
        font-size: $mobile-h1-size;
        font-weight: $mobile-h1-weight;
      }

      &__header2 {
        font-size: $mobile-h2-size;
        font-weight: $mobile-h2-weight;
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
