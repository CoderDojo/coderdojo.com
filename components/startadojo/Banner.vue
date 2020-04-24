<template>
    <div class="cd-banner__container">
      <div class="cd-banner">
        <p>{{ $t('Thank you for your interest in joining the CoderDojo community!') }}</p>
        <p>{{ $t('Due to the coronavirus pandemic, we have paused the Dojo verification process.') }}</p>
        <p>{{ $t('In the meantime, we’re providing exciting opportunities for young people, parents, volunteers, and educators to get creative with tech through') }}
          <a class="cd-banner-link" href="https://www.raspberrypi.org/at-home/?utm_source=coderdojo&utm_medium=covid-banner&utm_campaign=dmah">{{ $t('Digital Making at Home') }}</a> {{ $t('from the Raspberry Pi Foundation.') }}
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
</style>
