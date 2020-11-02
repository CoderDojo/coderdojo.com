<template>
  <div>
    <Hero />
    <div class="c-twitter-embed">
        <a class="twitter-timeline" href="https://twitter.com/CoderDojo?ref_src=twsrc%5Etfw">Tweets by CoderDojo</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </div>
</template>

<script>
import Hero from "~/components/maintenance/Hero";
export default {
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.c-twitter-embed {
    max-width: 900px;
    margin: 0 auto;
    font-size: 1rem;
}
</style>
