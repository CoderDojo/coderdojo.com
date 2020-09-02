<template>
  <div class="c-sessions" id="sessions">
    <h2 id="how-to-run" class="c-sessions__header center-text">{{ $t('How to run your coding club safely during the pandemic') }}</h2>
    <table class="c-how-to-run__table">
      <thead>
        <tr>
          <th scope="col">My current situation</th>
          <th scope="col">Recommended club activities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>It is not safe to run in-person club sessions right now.</td>
          <td>
            <ul>
              <li>Online sessions</li>
              <li>Remote activities</li>
              <li>A mixture of online sessions and remote activities</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>I am able to run in-person club sessions with safety measures such as social distancing.</td>
          <td>
            <ul>
              <li>In-person sessions respecting local safety guidance</li>
              <li>Online sessions</li>
              <li>Remote activities</li>
              <li>A mixture of in-person sessions, online sessions, and remote activities</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <hr/>

    <h2 id="in-person-sessions" class="c-sessions__header center-text">{{ $t('In-person sessions') }}</h2>
    <p>In-person sessions during the pandemic need to run in compliance with guidance from your local health authorities and host venue. For example, this may mean using safety measures regarding hygiene, social distancing, and check-ins.</p>
    <div class="c-sessions__content">
      <div class="c-sessions__content-individual">
        <div class="c-sessions__text">
          <p>The key considerations of running in-person sessions are:</p>
          <ul>
            <li>Following local public health and host venue guidance</li>
            <li>Planning suitable safety measures with the help of our checklist</li>
            <li>Communicating the safety measures to all Dojo members</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-sessions__content">
      <div class="c-sessions__content-individual c-sessions__image">
        <img src="~/static/images/ways-to-run/distancing.png"/>
      </div>
      <div class="c-sessions__content-individual">
        <div class="c-sessions__text">
          <h3>Resources</h3>
          <ul>
            <li><a href="">In-person session planning checklist</a></li>
            <li><a href="">Promotional material</a></li>
          </ul>
        </div>
      </div>
    </div>

    <hr/>

    <h2 id="online-sessions" class="c-sessions__header center-text">{{ $t('Online sessions') }}</h2>
    <p>You can run online sessions using video conferencing or live-streaming tools. In online sessions, young people work on a project together, or they work independently on different activities. Volunteers support them to write and debug their code in real time.</p>
    <div class="c-sessions__content">
      <div class="c-sessions__content-individual">
        <div class="c-sessions__text">
          <p>The key considerations of running online sessions are:</p>
          <ul>
            <li>Ensuring safety of young people online</li>
            <li>Choosing the right tool for you</li>
            <li>Communicating with parents</li>
            <li>Structuring your session</li>
          </ul>
        </div>
      </div>
      <div class="c-sessions__content-individual">
        <div class="c-sessions__quote-cards">
          <div class="c-sessions__quote-card">
            <p class="c-sessions__quote">“{{ $t('Realising that I had created such a wonderful place for the children also ignited a spark in me.') }}”</p>
            <div class="c-sessions__quote-attr">
              <img class="c-sessions__quote-attr-image" src="~/static/images/startadojo/marloes.jpeg" />
              <span class="c-sessions__quote-attr-text">Marloes, Netherlands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-sessions__content">
      <div class="c-sessions__content-individual c-sessions__image">
        <img src="~/static/images/ways-to-run/zoom-call.png"/>
      </div>
      <div class="c-sessions__content-individual">
        <div class="c-sessions__text">
          <h3>Resources</h3>
          <ul>
            <li><a href="">'Comparison of tools' table</a></li>
            <li><a href="">'Session structure template' PDF download</a></li>
            <li><a href="">Online Code of Behaviour for Young People</a></li>
            <li><a href="">Supporting your child at an online coding session</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-sessions__cta">
      <p><a class="c-button c-button--orange" href="">Read our guidance</a></p>
    </div>

    <hr />

    <h2 id="remote-activities" class="c-sessions__header center-text">{{ $t('Remote activites') }}</h2>
    <p>Remote activities are projects and challenges that you send to young people from them to complete at home. This option is particularly suitable for your Dojo if your Dojo members have limited access to computers or to good-bandwidth internet.</p>
    <div class="c-sessions__content">
      <div class="c-sessions__content-individual">
        <div class="c-sessions__text">
          <p>The key considerations for sending remote activities are:</p>
          <ul>
            <li>Communicating with young people and their parents</li>
            <li>Choosing projects or challenges</li>
            <li>Showcasing finished projects</li>
            <li>Offering feedback and support</li>
          </ul>
        </div>
      </div>
      <div class="c-sessions__content-individual">
        <div class="c-sessions__quote-cards">
          <div class="c-sessions__quote-card">
            <p class="c-sessions__quote">“{{ $t('Realising that I had created such a wonderful place for the children also ignited a spark in me.') }}”</p>
            <div class="c-sessions__quote-attr">
              <img class="c-sessions__quote-attr-image" src="~/static/images/startadojo/marloes.jpeg" />
              <span class="c-sessions__quote-attr-text">Marloes, Netherlands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-sessions__content">
      <div class="c-sessions__content-individual c-sessions__image">
        <img src="~/static/images/ways-to-run/learning-from-home.png"/>
      </div>
      <div class="c-sessions__content-individual">
        <div class="c-sessions__text">
          <h3>Resources</h3>
          <ul>
            <li><a href="">Remote activities planning checklist</a></li>
            <li><a href="">Tips for engaging parents and ninjas</a></li>
            <li><a href="">Learning pathway</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-sessions__cta">
      <p><a class="c-button c-button--orange" href="">Read our guidance</a></p>
    </div>

    <hr />

    <h2>Adapting over time</h2>
    <p>You may need to adapt and change how you run your club as restrictions in your local area change  and combine elements of online, remote and in-person activities, or you may do different things at different times. <a href="">Here are some examples from the community</a> of how they have combined the above options.</p>

    <hr />

    <h2>Additional Support</h2>
    <p>Join our <a href="https://rpf.io/ccalls">regular community calls</a>, connect with other community members on our <a href="https://coderdojo.com/2020/01/23/5-reasons-to-be-a-part-of-our-global-slack/">Global CoderDojo slack instance</a>, or let us know how you are getting on <a href="/contact/">by email</a>.</p>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.c-how-to-run__table {
  border: solid 1px #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 2rem auto 2.5rem auto;
  width: 90%;

  thead th {
    background-color: #f4f4f4;
    border: solid 1px #ccc;
    color: #000;
    padding: 10px;
    text-align: left;
  }

  tbody td {
    border: solid 1px #ccc;
    color: #333;
    padding: 10px;
  }
}

.c-sessions {
  max-width: $content-width;
  margin: 0 auto 40px;
  padding: 40px 0 40px;
  &__in-person {
  }
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
    margin: 0 auto;
    p {
      margin-bottom: 40px;
    }
  }
  &__image {
    flex: 1;
    margin-right: 2rem;

    img {
      max-width: 445px;
      width: 100%;
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
    margin: auto 16px;
    box-shadow: #f1e7f6 12px 9px 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 32px;
    border-radius: 5px;
  }
  &__quote {
    &-attr {
      display: flex;
      margin-top: 24px;
      align-items: center;
      &-image {
        width: 36px;
        border-radius: 100%;
      }
      &-text {
        font-size: $subtext;
        margin-left: 10px;
      }
    }
  }
  &__cta {
    text-align: center;
    margin: 2rem auto;
  }
  hr {
    margin: 2rem auto;
    border-color: $grey-bg;
  }
}
@include media-breakpoint-max(sm) {
  .c-sessions {
    &__header {
      font-size: $mobile-h2-size;
    }
    &__quote-cards {
      flex-direction: column;
    }
    &__content {
      display: block;
    }
  }
}
</style>
