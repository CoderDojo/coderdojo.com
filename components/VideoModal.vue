<template>
  <div class="c-video">
    <div class="c-video__content" @click="openModal()">
      <img class="c-video__img" :src="img" />
      <div class="c-video__overlay">
        <p class="c-video__overlay-text">{{ $t(text) }}</p>
        <span role="button" class="c-video__overlay-play">
          <img src="~/static/images/play.svg"/>
        </span>
      </div>
    </div>
    <div class="c-video__underlay" v-show="isOpen">
      <span role="button" class="c-video__close" @click="closeModal()">{{ $t('Close') }}</span>
      <iframe class="c-video__iframe" :src="videoSrc" width="560" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'img',
    'src',
    'text',
  ],
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    videoSrc: function () {
      return this.isOpen ? `${this.src}?autoplay=1` : this.src;
    }
  },
  methods: {
    openModal() {
      this.isOpen = true;
      this.registerClosingEvents();
    },
    registerClosingEvents() {
      document.addEventListener('keyup', this.shortcutHandler);
      const underlay = (document.getElementsByClassName('c-video__underlay'))[0];
      underlay.addEventListener('click', this.closeModal);
    },
    deregisterClosingEvents() {
      document.removeEventListener('keyup', this.shortcutHandler);
      const underlay = (document.getElementsByClassName('c-video__underlay'))[0];
      underlay.removeEventListener('click', this.closeModal);
    },
    closeModal() {
      this.isOpen = false;
      this.deregisterClosingEvents();
    },
    shortcutHandler(e) {
      if (e.keyCode === 27) {
        this.closeModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-video {
    &__underlay {
      background-color: #333333e8;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__content {
      position: relative;
    }
    &__img {
      width: 100%;
    }
    &__close {
      position: absolute;
      top: 0;
      right: 0;
      color: $white;
      margin: 1% 2%;
      text-align: right;
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
    &__iframe {
      width: 95%;
      height: 90%;
    }
    &__overlay {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: rgba(123, 123, 123, 0.6);
      width: 100%;
      height: 98%;
      position: absolute;
      top: 0;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
      &-text {
        color: $white;
        font-weight: 600;
      }
    }
  }
</style>
