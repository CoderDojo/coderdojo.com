<template>
  <div class="c-start">
    <div class="c-start__content">
      <div class="c-start__text">
      </div>
      <div class="c-start__illustration">
        <img src="~/static/images/start-a-dojo.svg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .c-start {
    background: #F4F4F4;

    &__content {
      max-width: 960px;
      margin: 0 auto;
      padding-top: 80px;
      display: flex;
    }

    &__illustration {
      flex: 1;
      width: 50%;
      text-align: center;
    }

    &__text {
      flex: 1;
      width: 50%;
    }
  }
</style>
