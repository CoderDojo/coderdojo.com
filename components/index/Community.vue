<template>
  <div class="c-community">
    <div class="c-community__content">
      <div class="c-community__text">
        <h2 class="center-text">{{ $t('Our community is a giant family with lots of great events!') }}</h2>
        <p>{{ $t('We\'re a global family with many places we socialise and get together. We have numerous Coolest Projects where once a year a region get\'s together and show\'s off all the youths work. We also have MegaDojos which are less formal one day Dojos where the kids can do whatever they want. And every year we host many DojoCons around the world for volunteers to get together and share their joys and learnings from the past year and hopefully make new friends.') }}</p>
      </div>
      <div class="c-community__cards">
        <a href="https://coolestprojects.org" class="c-community__card">
          <img src="~/static/images/index/coolest-projects.jpg" />
          <div class="c-community__card-text center-text">
            <p class="c-community__card-title">Coolest Projects</p>
            <p class="c-community__card-text-content">{{ $t('Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea') }}</p>
          </div>
        </a>
        <a href="https://megadojo.ie" class="c-community__card">
          <img src="~/static/images/index/megadojo.jpg" />
          <div class="c-community__card-text center-text">
            <p class="c-community__card-title">MegaDojos</p>
            <p class="c-community__card-text-content">{{ $t('Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea') }}</p>
          </div>
        </a>
        <a href="https://dojocon.coderdojo.com" class="c-community__card">
          <img src="~/static/images/index/dojocon.jpg" />
          <div class="c-community__card-text center-text">
            <p class="c-community__card-title">DojoCons</p>
            <p class="c-community__card-text-content">{{ $t('Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea') }}</p>
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
      overflow: hidden;
      text-decoration: none;
      box-shadow: 0 20px 40px 0 rgba(14,24,9,0.20);
      transition: box-shadow 0.2s ease-out, color 0.2s ease-out;

      img {
        width: 100%;
      }

      &-text {
        margin: 20px 20px 40px 20px;
        &-content {
          font-size: $subtext;
        }
      }

      &-title {
        font-size: $mobile-h3-size;
        font-weight: bold;
      }

      &:h
      over {
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
        &-title {
          font-size: $mobile-h3-size;
          font-weight: bold;
        }
        &-text {
          &-content {
            font-size: $subtext;
          }
        }

      }

      &__text {
        max-width: 100%;
        padding: 0 20px;
      }
    }
  }
</style>
