<template>
  <nav class="c-nav">
    <nuxt-link v-for="navItem in navItems" :key="navItem.title" :to="localePath({ name: navItem.name })">{{ $t(navItem.title) }}</nuxt-link>
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
  .c-nav {
    display: flex;

    a {
      margin: 0 26px;
      font-size: 18px;
      color: #222;
      text-decoration: none;
    }
  }
</style>
