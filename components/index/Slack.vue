<template>
  <div class="c-slack">
    <div class="c-slack__illustration">
      <img src="~/static/images/globe.svg" />
    </div>
    <div class="c-slack__content">
      <h1 class="c-slack__header">Talk to our community</h1>
      <a href="#" class="c-slack__link">Join our Slack community</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-slack {
  margin-top: 40px;

  &__illustration {
    text-align: center;
  }

  &__content {
    padding-top: 96px;
    margin-top: -96px;
    background: #ED684A;
    padding-bottom: 40px;
    text-align: center;
  }

  &__header {
    font-size: 28px;
  }

  &__link {
    display: block;
    color: #fff;
    margin: 20px 0;
    padding: 20px 0;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
