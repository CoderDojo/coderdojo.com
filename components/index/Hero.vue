<template>
  <div class="c-hero">
    <h1 class="c-hero__header1">The global community of 1800 free programming clubs for young people</h1>
    <h2 class="c-hero__header2">70,000 young people learning with the help of 240,000 volunteer hours in 92 countries</h2>
    <div class="c-hero__cta">
      <a href="#" class="c-hero__find">Find a Dojo</a>
      <a href="#" class="c-hero__volunteer">Volunteer at a Dojo</a>
    </div>
    <div class="c-hero__images">
      <div class="c-hero__image">
        <img src="https://picsum.photos/480/320?image=1" />
      </div>
      <div class="c-hero__image">
        <img src="https://picsum.photos/480/320?image=2" />
      </div>
      <div class="c-hero__image">
        <img src="https://picsum.photos/480/320?image=3" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .c-hero {
    background-image:
      radial-gradient(ellipse at bottom, white, white calc(50% - 2px), transparent 50%, transparent 100%),
      linear-gradient(to bottom, #642580 0%, #9266a6 100%);
    background-size: 200% 300px, 100%;
    background-position: bottom -100px center, top right;
    background-repeat: no-repeat;

    &__header1 {
      color: white;
      font-weight: 300;
      font-size: 40px;
      text-align: center;
      max-width: 680px;
      margin: 0 auto;
      padding: 50px 0;
    }

    &__header2 {
      color: white;
      text-align: center;
      max-width: 780px;
      margin: 0 auto;
      font-size: 20px;
    }

    &__cta {
      display: flex;
      justify-content: center;
      margin: 40px auto;
      max-width: 680px;

      a {
        display: block;
        flex: 1;
        color: white;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        margin: 0 20px;
        padding: 16px 20px;
        text-align: center;
        border-radius: 1000px;
        transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;

        &:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          transform: scale(1.025);
        }
      }

      .c-hero__find {
        background: #ED684A;
      }

      .c-hero__volunteer {
        background: #41BAC1;
      }
    }

    &__images {
      display: flex;
      max-width: 980px;
      margin: 60px auto 0 auto;
    }

    &__image {
      flex: 1;
      justify-content: space-between;
      margin: 0 20px;

      img {
        width: 100%;
      }
    }
  }
</style>
