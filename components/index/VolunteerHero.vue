<template>
  <div class="c-hero">
    <h1 class="c-hero__header1">{{ $t('Volunteer at a Dojo near you') }}</h1>
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
  @import '~/assets/_variables.scss';

  .c-hero {
    padding: 0 0 80px 0;
    background-image:
      radial-gradient(transparent 50%, transparent 100%),
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
