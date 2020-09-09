<template>
  <div class="c-hero center-text">
    <h1 class="c-hero__header1">{{ $t('Ways to run your Dojo') }}</h1>
    <div class="c-hero__intro">
      <p>CoderDojo volunteers and clubs all around the world have been affected by the coronavirus pandemic. Champions and mentors from across the globe have talked to us to share how they are running their clubs now, and we're amazed by their resilience and creativity.</p>

      <p>Inspired by these community examples, here are some ways you can continue to provide fun, creative learning opportunities for the young people and volunteers in your Dojo.</p>

      <p>Choose the option that works best for you, depending on your current situation and your Dojo members' needs, and feel free to adapt your club activities if your situation and local health guidance change.</p>
    </div>
    <div class="c-hero__step-container">
      <div class="c-hero__step-cards">
         <div class="c-hero__step-card">
            <img alt="" src="~/static/images/ways-to-run/ways-red.jpg" class="c-hero__step-image">
            <h2 class="c-hero__step-title">It is not safe to run in-person sessions right now.</h2>
            <p class="c-hero__step-text">We recommend:</p>
            <ul class="c-hero__step-list">
              <li><a href="#online">Online sessions</a></li>
              <li><a href="#remote">Remote activities</a></li>
              <li><a href="#flexibility">A mixture of online sessions and remote activities</a></li>
            </ul>
         </div>
         <div class="c-hero__step-card">
            <img alt="" src="~/static/images/ways-to-run/ways-yellow.jpg" class="c-hero__step-image">
            <h2 class="c-hero__step-title">I am able to run in-person club sessions with safety measures such as social distancing.</h2>
            <p class="c-hero__step-text">We recommend:</p>
            <ul class="c-hero__step-list">
              <li><a href="#in-person">In-person sessions respecting local safety guidance</a></li>
              <li><a href="#online">Online sessions</a></li>
              <li><a href="#remote">Remote activities</a></li>
              <li><a href="#flexibility">A mixture of in-person sessions, online sessions and remote activities</a></li>
            </ul>
         </div>
        <div class="c-hero__step-card">
            <img alt="" src="~/static/images/ways-to-run/ways-green.jpg" class="c-hero__step-image">
            <h2 class="c-hero__step-title">I am able to run in-person club sessions with no safety measures.</h2>
            <p class="c-hero__step-text">We recommend:</p>
            <ul class="c-hero__step-list">
              <li><a href="#in-person">In-person sessions</a></li>
              <li><a href="#flexibility">A mixture of in-person sessions, online sessions and remote activities</a></li>
            </ul>
         </div>
      </div>
    </div>
      <div class="c-hero__cta">
        <a href="https://static.raspberrypi.org/files/clubs/Code_Club_and_CoderDojo_CV_Framework.pdf" data-action="click" data-label="Download club options framework" data-category="Ways to Run Downloads" class="c-button c-button--teal">{{ $t('Download our club options framework') }}</a>
      </div>
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
  padding: 0 0 70px 0;
  background-color: $cd-purple;
  &__header1 {
    color: $white;
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 20px;
    font-weight: bold;
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

  &__step-container {
    max-width: 1200px;
    margin: 60px auto;
  }

  &__step-cards {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
  }

  &__step-card {
    background-color: #fee6e5;
    border-radius: 8px;

    &:nth-child(2) {
      background-color: #ffebcb;
    }

    &:nth-child(3) {
      background-color: #daf1db;
    }
  }

  &__step {
    &-title {
      font-size: 1rem;
      margin: 20px 20px 10px 20px;
    }
    &-image {
      max-width: 425px;
      width: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &-header {
      margin: 20px auto;
      display: flex;
    }

    &-text {
      margin: 10px 20px;
    }

    &-list {
      margin: 10px 20px 20px 20px;

      a,
      a:visited {
        color: #000000;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@include media-breakpoint-max(md) {
  .c-hero {
    &__step-cards {
      display: flex;
      flex-direction: column;
    }
    &__step-card {
      margin: 10px 20px;
    }
    &__step-name {
      margin-top: 16px;
    }
    &__cta {
      flex-direction: column;
      .c-button {
        margin: 10px 40px;
      }
    }
    &__step-image {
      margin: 20px 40px;
      &:first-child {
        display: none;
      }
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
  }
}
</style>
