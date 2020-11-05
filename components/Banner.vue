<template>
  <div class="cd-banner__container">
    <div class="cd-banner">
      <p>
        {{ $t('Thank you for your interest in CoderDojo!') }}
         {{ $t('The coronavirus pandemic continues to impact all our lives, including how Dojos can run.') }}
         {{ $t('See') }}
        <a class="cd-banner-link" href="localePath({ name: 'ways-to-run' })">
          {{ $t('our resources and guidance on the creative ways Dojos are running.') }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';
  .cd-banner__container {
    background-color: #4C1B62;
    padding: 32px 0;
  }
  .cd-banner {
    max-width: $content-width;
    margin: 0 auto;
    color: #fff;
  }

  .cd-banner-link {
    color: #fff;
    text-decoration: underline;
    font-weight: bold;
  }

  .cd-banner p:not(:last-child) {
    padding-bottom: 1em;
  }
</style>
