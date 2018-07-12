<template>
  <div class="c-volunteer">
    <div class="c-volunteer__content">
      <div class="c-volunteer__illustration">
        <img src="~/static/images/volunteer.svg" />
      </div>
      <div class="c-volunteer__text">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .c-volunteer {
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
