<template>
  <div class="c-projects center-text">
    <h1>Projects for your Dojo</h1>
    <div class="c-projects__cards">
      <div class="c-projects__card">
        <img src="https://projects.raspberrypi.org/static/media/appInventor.4162c393.png" />
        <h3>App Inventor for social enterprise</h3>
        <p>Learn to make apps for Android devices by doing projects that can help people in your community.</p>
      </div>
      <div class="c-projects__card">
        <img src="https://projects.raspberrypi.org/static/media/scratch.6d8141ec.png" />
        <h3>Scratch for social enterprise</h3>
        <p>Learn Scratch, a beginner-friendly graphical programming language, while building apps and games to help people learn about important issues.</p>
      </div>
      <div class="c-projects__card">
        <img src="https://projects.raspberrypi.org/static/media/sushi.1ba8ebeb.png" />
        <h3>HTML & CSS for social enterprise</h3>
        <p>Learn HTML & CSS by creating a website about bird conservation.</p>
      </div>
    </div>
    <div class="c-projects__cta">
      <a href="#" class="c-button c-button--orange">View more CoderDojo projects</a>
    </div>
    <div class="c-projects__discuss">
      <p>If you have produced a piece of original content for your Dojo, or found a useful resource online that you think others might find useful,
please contribute it to the collection!</p>
      <a href="#">Discuss your content on our forums</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-projects {
    &__cards {
      display: flex;
      margin: 40px auto;
    }

    &__card {
      flex: 1;
      background: $white;
      color: $black;
      border-radius: 5px;
      margin: 0 15px;
      width: 30%;

      img {
        width: 100%;
      }

      h3 {
        text-transform: uppercase;
        margin: 20px 20px 5px 20px;
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
</style>
