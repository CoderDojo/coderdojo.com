<template>
  <div class="c-champion">
    <h1 class="c-champion__header center-text">{{ $t('What is a Champion?') }}</h1>
    <div class="c-champion__content">
      <div class="c-champion__content-individual">
        <div class="c-champion__text">
          <p>{{ $t('Dojos are championed by individuals all around the world who are passionate about giving young people the opportunity to learn to code. CoderDojo champions are enthusiastic, driven (and often not techie!) volunteers who take charge of setting up and maintaining a Dojo.') }}</p>
          <p>{{ $t('But champions are never alone! They find volunteers to help them organise their Dojo and mentor the young people. And champions always have CoderDojo\'s resources and our 200+ projects to help them run their club and engage the kids, and they can always ask us, the CoderDojo team, for our help directly.') }}</p>
        </div>   
      </div>
      <div class="c-champion__content-individual">
        <div class="c-champion__quote-cards">
          <div class="c-champion__quote-card">
            <p class="c-champion__quote">{{ $t('Realising that I had created such a wonderful place for the children also ignited a spark in me.') }}</p>
            <div class="c-champion__quote-attr">
              <img class="c-champion__quote-attr-image" src="https://picsum.photos/36/36?image=2" />
              <span class="c-champion__quote-attr-text">Marloes, Netherlands</span>
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
