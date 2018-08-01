<template>
  <div class="c-community">
    <div class="c-community__content">
      <div class="c-community__text">
        <h1 class="center-text">{{ $t('Our community is one vast family!') }}</h1>
        <p>{{ $t('We\'re a global family that gets together in lots of places to talk, both online and face to face.') }}
        {{ $t('We hold big events for young people and volunteers all around the world. So find what you want to get involved in!') }}</p>
      </div>
      <div class="c-community__cards">
        <a href="#" class="c-community__card">
          <img src="~/static/images/index/coolest-projects.jpg" />
          <div class="c-community__card-text center-text">
            <h3>Coolest Projects</h3>
            <p>{{ $t('We hold big yearly events called Coolest Projects for young people to show off what they have made.') }}</p>
          </div>
        </a>
        <a href="#" class="c-community__card">
          <img src="~/static/images/index/megadojo.jpg" />
          <div class="c-community__card-text center-text">
            <h3>MegaDojos</h3>
            <p>{{ $t('There are less formal, regional MegaDojos, which are day-long Dojo sessions where kids can make whatever they want.') }}</p>
          </div>
        </a>
        <a href="#" class="c-community__card">
          <img src="~/static/images/index/dojocon.jpg" />
          <div class="c-community__card-text center-text">
            <h3>DojoCons</h3>
            <p>{{ $t('We have many DojoCons every year all around the world, where volunteers get together and share their joys and learning!') }}</p>
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
