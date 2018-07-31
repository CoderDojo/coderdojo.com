<template>
  <div class="c-champion">
    <h1 class="c-champion__header center-text">{{ $t('What is a Champion?') }}</h1>
    <div class="c-champion__content">
      <div class="c-champion__content-individual">
        <div class="c-champion__text">
          <p>{{ $t('Dojos are Championed (led) by individuals all around the world who are passionate about giving young people the opportunity to learn to code. CoderDojo Champions are passionate, driven (not always techie!) volunteers who take charge of setting up, running and maintaining a Dojo. Often Co-Champions share these responsibilities.') }}</p>
          <p>{{ $t('But champions are never alone! They always get mentors (volunteers) to help them run their Dojo. And they always have CoderDojos resources to help run their Dojo, have our 200+ projects to help engage the kids and can always ask for our help directly.') }}</p>
        </div>   
      </div>
      <div class="c-champion__content-individual">
        <div class="c-champion__quote-cards">
          <div class="c-champion__quote-card">
            <p class="c-champion__quote">{{ $t('CoderDojo isn\'t primarily about code. It\'s about providing a place where children can be inquisitive and create things without fear of failure. They can be themselves') }}</p>
            <div class="c-champion__quote-attr">
              <img class="c-champion__quote-attr-image" src="https://picsum.photos/36/36?image=2" />
              <span class="c-champion__quote-attr-text">Yohei Yasukawa - CoderDojo Tokyo</span>
            </div>
          </div>
        </div> 
      </div>     
    </div>
    <div class="c-champion__video">
      <iframe src="https://www.youtube.com/embed/y5v0dZGZoJY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>      
</template>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';
  .c-champion {
    max-width: $content-width;
    margin: 0 auto 40px;
    padding: 40px 0 40px;
    &__content {
      display: flex;
      max-width: $content-width;
      margin: 60px auto 0 auto;
    }
    &__content-individual {
      flex: 1;
      justify-content: space-between;
    }
    &__text {
      font-size: 18px;
      max-width: 80%;
      margin: 0 auto;
      p {
        margin: 40px 0;
      }
    }    
    &__illustration {
      display: block;
      margin: 40px auto 0 auto;
      width: calc(100% - 80px);
    }
    &__quote-cards {
      display: flex;
    }
    &__quote-card {
      flex: 1;
      margin: 90px 16px;
      box-shadow: #F1E7F6 12px 9px 40px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px 32px;
      border-radius: 5px;
    }
    &__quote {
      font-size: 18px;
      &-attr {
        display: flex;
        margin-top: 24px;
        align-items: center;
        &-image {
          width: 36px;
          border-radius: 100%;
        }
        &-text {
          font-size: 13px;
          margin-left: 10px;
        }
      }
    }   
    &__cta {
      text-align: center;
      margin: 80px auto 80px auto;
    }

    &__video {
      padding: 24px 32px;
      display: flex;
      max-width: $content-width;
      iframe {
        width: 100%;
        min-height: 460px;
      }
    }     
  }
  @include media-breakpoint-max(sm) {
    .c-champion {
      &__quote-cards {
        flex-direction: column;
      }
      &__content {
        display: block;
      }
      &__video {
        iframe {
          width: 100%;
          height: 100%; 
        }   
      }        
    }
  }
</style>
