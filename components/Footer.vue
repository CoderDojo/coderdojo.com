<template>
  <div class="c-footer">
    <div class="c-footer__content">
      <div class="c-footer__row">
        <div class="c-footer__mission">
          <img src="~/static/images/coderdojo.svg" />
          <p>{{ $t('The CoderDojo movement believes that an understanding of programming languages is increasingly important in the modern world, that it’s both better and easier to learn these skills early, and that nobody should be denied the opportunity to do so.') }}</p>
        </div>
        <div class="c-footer__social">
          <a href="#"><img src="~/static/images/social/twitter.svg" /></a>
          <a href="#"><img src="~/static/images/social/facebook.svg" /></a>
          <a href="#"><img src="~/static/images/social/google.svg" /></a>
          <a href="#"><img src="~/static/images/social/linkedin.svg" /></a>
          <a href="#"><img src="~/static/images/social/email.svg" /></a>
          <a href="#"><img src="~/static/images/social/slack.svg" /></a>
        </div>
      </div>
      <div class="c-footer__row">
        <div class="c-footer__links">
          <a href="#">{{ $t('Get Involved') }}</a>
          <a href="#">{{ $t('Find a Dojo near you') }}</a>
          <a href="#">{{ $t('Volunteer') }}</a>
          <a href="#">{{ $t('Start a Dojo') }}</a>
          <a href="#">{{ $t('Donate') }}</a>
        </div>
        <div class="c-footer__links">
          <a href="#">{{ $t('About CoderDojo') }}</a>
          <a href="#">{{ $t('Foundation') }}</a>
          <a href="#">{{ $t('History') }}</a>
          <a href="#">{{ $t('Our team') }}</a>
          <a href="#">{{ $t('Contact Us') }}</a>
        </div>
        <div class="c-footer__links">
          <a href="#">{{ $t('Community') }}</a>
          <a href="#">{{ $t('Badges') }}</a>
          <a href="#">{{ $t('Join our Slack') }}</a>
          <a href="#">{{ $t('Newsletter') }}</a>
        </div>
        <div class="c-footer__links">
          <a href="#">{{ $t('Help') }}</a>
        </div>
      </div>
      <div class="c-footer__address">
        <p>CoderDojo Foundation, Dogpatch Labs Unit 1, The CHQ building, Custom House Quay, Dublin, Ireland, D01 Y6H7</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .c-footer {
    background: #222222;
    color: white;
    padding: 80px 0;

    a {
      color: white;
    }

    &__content {
      max-width: 960px;
      margin: 0 auto;
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__mission {
      flex: 3;
      img {
        height: 45px;
      }

      p {
        margin: 40px 0;
      }
    }

    &__social {
      flex: 2;
      display: flex;
      justify-content: flex-end;

      a {
        margin: 0 5px;
      }

      img {
        display: inline-block;
        height: 35px;
        border-radius: 100%;
        transition: transform 0.2s cubic-bezier(.68,-.55,.265,1.55), background 0.2s ease-out;

        &:hover {
          background: #642D8D;
          transform: scale(1.25);
        }
      }
    }

    &__links {
      a {
        display: block;
        text-decoration: none;
        line-height: 26px;
        font-size: 18px;

        &:hover {
          text-decoration: underline;
        }

        &:first-child {
          font-weight: bold;
          text-decoration: underline;
          margin-bottom: 12px;
          font-size: 16px;
        }
      }
    }

    &__address {
      margin-top: 40px;
    }
  }
</style>
