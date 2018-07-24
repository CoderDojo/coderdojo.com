<template>
  <div>
    <StartADojoHero />
    <StartADojoChampion />
    <StartADojoQuestions />
  </div>
</template>

<script>
import StartADojoHero from '~/components/index/startadojo/StartADojoHero';
import StartADojoChampion from '~/components/index/startadojo/StartADojoChampion';
import StartADojoQuestions from '~/components/index/startadojo/StartADojoQuestions';
export default {
  components: {
    StartADojoHero,
    StartADojoChampion,
    StartADojoQuestions,
  },
};
</script>

<style lang="scss" scoped>
</style>