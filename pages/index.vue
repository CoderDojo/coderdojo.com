<template>
  <section class="container">
    <cd-header></cd-header>
    <h1>{{ $t('Welcome') }}</h1>
  </section>
</template>

<script>
import CdHeader from '@/components/Header';
export default {
  components: {
    CdHeader,
  },
};
</script>

<style>
</style>
