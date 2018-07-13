<template>
  <div class="c-community">
    <div class="c-community__content">
      <div class="c-community__text">
        <h1>Our community is a giant family with lots of great events!</h1>
        <p>We're a global family with many places we socialise and get together. We have numerous Coolest Projects where once a year a region get's together and show's off all the youths work. We also have MegaDojos which are less formal one day Dojos where the kids can do whatever they want. And every year we host many DojoCons around the world for volunteers to get together and share their joys and learnings from the past year and hopefully make new friends.</p>
      </div>
      <div class="c-community__cards">
        <a href="#" class="c-community__card">
          <img src="https://picsum.photos/285/175?image=1" />
          <div class="c-community__card-text">
            <h3>Coolest Projects</h3>
            <p>Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea</p>
          </div>
        </a>
        <a href="#" class="c-community__card">
          <img src="https://picsum.photos/285/175?image=2" />
          <div class="c-community__card-text">
            <h3>MegaDojos</h3>
            <p>Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea</p>
          </div>
        </a>
        <a href="#" class="c-community__card">
          <img src="https://picsum.photos/285/175?image=3" />
          <div class="c-community__card-text">
            <h3>DojoCons</h3>
            <p>Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-community {
    background: linear-gradient(180deg, #642D8D 0%, #9D59C1 100%);
    padding: 40px 0;
    color: #fff;

    &__content {
      max-width: $content-width;
      margin: 0 auto;
    }

    &__text {
      max-width: 65%;
      margin: 0 auto;

      p {
        margin: 40px 0;
      }
    }

    &__cards {
      display: flex;
      justify-content: center;
    }

    &__card {
      flex: 1;
      margin: 40px 18px;
      background: $white;
      color: #222;
      border-radius: 5px;
      text-decoration: none;
      box-shadow: 0 20px 40px 0 rgba(14,24,9,0.20);
      transition: box-shadow 0.2s ease-out, color 0.2s ease-out;

      img {
        width: 100%;
      }

      &-text {
        margin: 20px 20px 40px 20px;
        text-align: center;

        p {
          font-size: 13px;
        }
      }

      &:hover {
        box-shadow: 0 25px 45px 0 rgba(14,24,9,0.40);
        color: $cd-purple;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-community {
      &__cards {
        flex-direction: column;
      }

      &__card {
        margin: 20px 40px;
      }

      &__text {
        max-width: 100%;
        padding: 0 20px;
      }
    }
  }
</style>
