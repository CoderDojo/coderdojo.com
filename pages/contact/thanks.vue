<template>
  <div class="c-contact">
    <div class="c-contact__form">
      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="Software/Hardware/Content Partnership">
        <h2><b>Form has been successfully submitted. Thank you.</b></h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-contact {
    max-width: $content-width;
    margin: 0 auto;

    &__form {
      max-width: 80rem;
      margin: 2rem 0;
    }
  }

  .c-form-fieldset__wrapper {
    padding-inline: 1.6rem;
    margin-bottom: .8rem;
    -webkit-margin-after: .8rem;
    margin-block-end: .8rem;
    padding: 1.6rem;
    padding-block: 1.6rem;
    background-color: #f0f8ff;
    border: 0;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 800px) {
    .c-form-fieldset__wrapper {
      padding-left: 7rem;
      padding-right: 7rem;
      padding-inline: 7rem;
      margin-bottom: 1rem;
      -webkit-margin-after: 1rem;
      margin-block-end: 1rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
      padding-block: 3rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .c-form-fieldset__wrapper {
      padding-left: 8.4rem;
      padding-right: 8.4rem;
      padding-inline: 8.4rem;
      margin-bottom: 1.2rem;
      -webkit-margin-after: 1.2rem;
      margin-block-end: 1.2rem;
      padding-top: 3.6rem;
      padding-bottom: 3.6rem;
      padding-block: 3.6rem;
    }
  }

  .c-form-fieldset__element {
    border: 0;
  }

  .c-form-fieldset__legend {
    font-weight: 700;
    margin-top: 0;
    font-size: 2.4rem;
    margin-bottom: .8rem;
    -webkit-margin-after: .8rem;
    margin-block-end: .8rem;
  }

  @media only screen and (min-width: 800px) {
    .c-form-fieldset__legend {
      font-size: 3rem;
      margin-bottom: 1rem;
      -webkit-margin-after: 1rem;
      margin-block-end: 1rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .c-form-fieldset__legend {
      margin-bottom: 1.2rem;
      -webkit-margin-after: 1.2rem;
      margin-block-end: 1.2rem;
    }
  }
  .c-form-group {
    margin-bottom: 1.6rem;
    -webkit-margin-after: 1.6rem;
    margin-block-end: 1.6rem;
  }

  @media only screen and (min-width: 800px) {
    .c-form-group {
      margin-bottom: 2rem;
      -webkit-margin-after: 2rem;
      margin-block-end: 2rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .c-form-group {
      margin-bottom: 2.4rem;
      -webkit-margin-after: 2.4rem;
      margin-block-end: 2.4rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .c-form-label {
      margin-bottom: 1.2rem;
      -webkit-margin-after: 1.2rem;
      margin-block-end: 1.2rem;
    }
  }
  @media only screen and (min-width: 800px) {
    .c-form-label {
      margin-bottom: 1rem;
      -webkit-margin-after: 1rem;
      margin-block-end: 1rem;
    }
  }

  .c-form-label {
    margin-bottom: .8rem;
    -webkit-margin-after: .8rem;
    margin-block-end: .8rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    font-weight: 700;
  }

  .c-form-input {
    font-size: 1.6rem;
    border: 2px solid #999;
    display: block;
    font-family: inherit;
    max-width: 50rem;
    padding: .5rem;
    width: 100%;
  }

  @media only screen and (min-width: 800px) {
    .c-form-input {
      font-size: 2rem;
    }
  }

  .c-form-select {
    border: 2px solid #999;
    display: block;
    font-family: inherit;
    max-width: 50rem;
    padding: .5rem;
    width: 100%;
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 800px) {
    .c-form-select {
      font-size: 2rem;
    }
  }

  .c-form-submit {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    padding-inline: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media only screen and (min-width: 800px) {
    .c-form-submit {
        padding-left: 7rem;
        padding-right: 7rem;
        padding-inline: 7rem;
    }
  }

  .sc-rp-button, .sc-rp-button:visited {
    display: inline-block;
    font-family: Rubik,sans-serif;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    text-decoration: none;
    padding-block: .8rem;
    padding: .8rem 2.4rem;
    padding-inline: 2.4rem;
    font-size: 1.6rem;
    background-color: #004881;
    border-width: 0;
    color: #fff;
    font-weight: 500;
    max-width: 50ch;
    transition-duration: .1s;
    transition-property: background-color,transform;
    transition-timing-function: ease-in-out;
    width: 100%;
    inline-size: 100%;
  }

  @media only screen and (min-width: 800px) {
    .sc-rp-button, .sc-rp-button:visited {
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-block: 1rem;
    }
  }

  @media only screen and (min-width: 800px) {
    .sc-rp-button, .sc-rp-button:visited {
      padding-left: 3rem;
      padding-right: 3rem;
      padding-inline: 3rem;
    }
  }

  @media only screen and (min-width: 800px) {
    .sc-rp-button, .sc-rp-button:visited {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 420px) {
    .sc-rp-button, .sc-rp-button:visited {
      width: auto;
      inline-size: auto;
    }
  }
</style>
