<template>
  <div class="c-our-team">
    <div class="c-our-team__content">
      <div class="c-our-team__photo">
        <img src="https://picsum.photos/484/242" />
      </div>
      <div class="c-our-team__text">
        <h1 class="c-our-team__header">Our team &amp; history</h1>
        <p>We’re a 6 year old foundation with amazing growth and many twists and turns on the way.</p>
        <a href="#">Find Out More </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-our-team {
    background: $grey-bg;
    padding: 40px 0;

    &__content {
      max-width: $content-width;
      margin: 40px auto;
      display: flex;
    }

    &__photo {
      margin-right: 20px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      p {
        flex: 1;
        margin: 10px 0;
      }

      a {
        color: $cd-orange;
        margin: 25px 0;
        font-size: 18px;
        font-weight: bold;
      }
    }

    &__header {
      margin-top: 0;
      text-align: left;
    }
  }
</style>
