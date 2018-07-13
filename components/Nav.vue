<template>
  <nav class="c-nav">
    <nuxt-link v-for="navItem in navItems" :key="navItem.title" :to="localePath({ name: navItem.name })">{{ $t(navItem.title) }}</nuxt-link>
    <a class="c-nav__login">{{ $t('Login') }}</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          name: 'get-involved',
          title: 'Get Involved',
        },
        {
          name: 'about',
          title: 'About',
        },
        {
          name: 'projects',
          title: 'Projects',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-nav {
    display: flex;

    a {
      padding: 0 28px;
      line-height: 45px;
      color: #fff;
      text-decoration: none;
    }

    &__login {
      display: none;
    }
  }

  @include media-breakpoint-max(md) {
    .c-nav {
      flex-direction: column;

      a {
        padding: 0;
        line-height: 60px;
      }

      &__login {
        display: block;
        margin-bottom: 10px;
      }
    }
  }
</style>
