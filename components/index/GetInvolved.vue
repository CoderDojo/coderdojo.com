<template>
  <div class="c-get-involved">
    <h1 class="c-get-involved__header">We're friendly, get involved!</h1>
    <div class="c-get-involved__cta-cards">
      <a href="#" class="c-get-involved__cta-card">
        <img src="https://picsum.photos/285/175?image=1" />
        <span>Find a Dojo</span>
      </a>
      <a href="#" class="c-get-involved__cta-card">
        <img src="https://picsum.photos/285/175?image=2" />
        <span>Volunteer at a Dojo</span>
      </a>
      <a href="#" class="c-get-involved__cta-card">
        <img src="https://picsum.photos/285/175?image=3" />
        <span>Start a Dojo</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .c-get-involved {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 0;

    &__header {
      font-size: 32px;
      text-align: center;
      padding: 40px 0;
    }

    &__cta-cards {
      display: flex;
      margin-top: 40px;
    }

    &__cta-card {
      flex: 1;
      margin: 0 18px;
      box-shadow: 0 20px 40px 0 rgba(241,231,246,0.90);
      transition: box-shadow 0.2s ease-out;
      text-decoration: none;
      border-radius: 5px;

      img {
        width: 100%;
        height: auto;
      }

      span {
        display: block;
        font-weight: 600;
        font-size: 20px;
        color: #222;
        padding: 20px;
        text-align: center;
      }

      &:hover {
        box-shadow: 0 25px 45px 0 rgba(191,191,191,0.90);

        span {
          color: #642580;
        }
      }
    }
  }
</style>
