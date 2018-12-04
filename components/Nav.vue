<template>
  <nav class="c-nav">
    <span v-for="navItem in navItems" :key="navItem.title"> 
      <nuxt-link :to="localePath({ name: navItem.name })" v-if="!navItem.url">{{ $t(navItem.title) }}</nuxt-link>
      <a :href="navItem.url " v-if="navItem.url">{{ $t(navItem.title) }}</a>
    </span>
    <a href="https://zen.coderdojo.com/login" class="c-nav__login">{{ $t('Login') }}</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          name: 'find-dojo',
          title: 'Find a Dojo',
          url: 'https://zen.coderdojo.com/find',
        },
        {
          name: 'volunteer',
          title: 'Volunteer',
        },
        {
          name: 'start-a-dojo',
          title: 'Start a Dojo',
        },
        {
          name: 'resources',
          title: 'Resources',
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
    justify-content: space-evenly;

    a {
      line-height: 45px;
      color: $white;
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
  @supports (-ms-accelerator: true) { /* Edge only */
    .c-nav {
      justify-content: space-around;
    }
  }
</style>
