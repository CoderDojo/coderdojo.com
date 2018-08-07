<template>
  <div class="c-footer">
    <div class="c-footer__content">
      <div class="c-footer__row">
        <div class="c-footer__mission">
          <img src="~/static/images/coderdojo.svg" />
          <p>{{ $t('The CoderDojo movement believes that an understanding of programming languages is increasingly important in the modern world, that it’s both better and easier to learn these skills early, and that nobody should be denied the opportunity to do so.') }}</p>
        </div>
        <div class="c-footer__side--right">
          <span class="c-footer__side-social">
            <a href="https://twitter.com/CoderDojo"><img src="~/static/images/social/twitter.svg" /></a>
            <a href="https://facebook.com/CoderDojo"><img src="~/static/images/social/facebook.svg" /></a>
            <a href="https://plus.google.com/+coderdojo"><img src="~/static/images/social/google.svg" /></a>
            <a href="https://www.linkedin.com/company/coderdojo"><img src="~/static/images/social/linkedin.svg" /></a>
            <a href="https://www.coderdojo.com/contact/"><img src="~/static/images/social/email.svg" /></a>
            <a href="https://coderdojo.com/coderdojo-global-slack/"><img src="~/static/images/social/slack.svg" /></a>
          </span>
          <span class="c-footer__side-lang">
            <lang-picker></lang-picker>
            <a href="https://crowdin.com/profile/coderdojo" class="c-footer__side-lang-translate">{{ $t('Help us with translations') }}</a>
          </span>
        </div>
      </div>
      <div class="c-footer__row">
        <div class="c-footer__links">
          <p class="c-footer__links-header">{{ $t('Get Involved') }}</p>
          <a href="https://zen.coderdojo.com/">{{ $t('Find a Dojo near you') }}</a>
          <a href="/volunteer">{{ $t('Volunteer') }}</a>
          <a href="/start-a-dojo">{{ $t('Start a Dojo') }}</a>
          <a href="/news">{{ $t('News') }}</a>
          <a href="/donate">{{ $t('Donate') }}</a>
        </div>
        <div class="c-footer__links">
          <p class="c-footer__links-header">{{ $t('About CoderDojo') }}</p>
          <a href="/foundation">{{ $t('Foundation') }}</a>
          <a href="/movement">{{ $t('History') }}</a>
          <a href="/team">{{ $t('Our team') }}</a>
          <a href="/contact">{{ $t('Contact Us') }}</a>
        </div>
        <div class="c-footer__links">
          <p class="c-footer__links-header">{{ $t('Community') }}</p>
          <a href="https://zen.coderdojo.com/badges">{{ $t('Badges') }}</a>
          <a href="/coderdojo-global-slack/">{{ $t('Join our Slack') }}</a>
          <a href="/newsletter/">{{ $t('Newsletter') }}</a>
        </div>
        <div class="c-footer__links">
          <p class="c-footer__links-header">{{ $t('Need help?') }}</p>
          <a href="https://help.coderdojo.com/hc">{{ $t('Our help center') }}</a>
          <a href="/resources">{{ $t('Resources') }}</a>
        </div>
      </div>
      <div class="c-footer__address">
        <p>CoderDojo Foundation (CRO No: 524255 a registered charity: CHY 20812), Dogpatch Labs Unit 1, The CHQ building, Custom House Quay, Dublin, Ireland, D01 Y6H7</p>
      </div>
    </div>
  </div>
</template>

<script>
  import LangPicker from '@/components/LangPicker';

  export default {
    components: {
      LangPicker,  
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-footer {
    background: #222222;
    color: white;
    padding: 80px 0;

    a {
      color: white;
    }

    &__content {
      max-width: 980px;
      padding: 0 20px;
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

    &__side {
      &--right {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      &-social {
        justify-content: flex-end;
        flex: 1;
        flex-direction: row;
        a {
          margin: 0 5px;

          &:first-child {
            margin-left: 0;
          }

          &:last-child {
            margin-right: 0;
          }
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
      &-lang {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-self: center;
        &-translate {
          margin-top: 18px;
        }
      }
    }

    &__links {
      flex: 1;
      &-header {
        text-decoration: underline;
        font-weight: bold;
      }
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
      color: #a6a6a6;
    }
  }

  @include media-breakpoint-max(sm) {
    .c-footer {
      &__row {
        flex-direction: column;
      }

      &__side{
        &--right {
          margin: 20px 0 40px 0;
          align-items: flex-start;
          flex-direction: column-reverse;
          justify-content: space-around;
        }
        &-social {
          padding: 20px 0px 0px 0px;
          align-self: center;
        }
      }

      &__links {
        margin: 10px 0;
      }
    }
  }
</style>
