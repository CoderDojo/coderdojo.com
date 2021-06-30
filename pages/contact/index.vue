<template>
  <div class="c-contact">
    <form class="c-contact__form" id="coderdojo_contact" action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">
      <input type=hidden name="orgid" value="00D4J000000GeqW">
      <input type=hidden name="retURL" value="https://coderdojo.com/contact/thanks">
      <input type="hidden" name="recordType" value="0124J000000MUX1" />
      <input type="hidden" name="priority" value="Medium" />
      <input type="hidden" name="status" value="New" />
      <input type="hidden" id="subType" name="00N4J00000JCtvw" value="" />

      <div class="c-form-fieldset__wrapper">
        <p>If you wish to contact the CoderDojo Foundation please use the following form. However, if your query is in regards to having your child attend a Dojo, volunteer at a Dojo or create a Dojo near you please use the above nav bar and follow the process outlined.</p>
        <fieldset class="c-form-fieldset__element">
          <legend class="c-form-fieldset__legend">I want to</legend>
          <div class="c-form-group">
            <select id="type" name="type" data-track-state class="c-form-select">
              <option></option>
              <option value="dojo-find">Find a Dojo</option>
              <option value="dojo-start">Start a Dojo</option>
              <option value="dojo-mentor">Mentor at a Dojo</option>
              <option value="Software/Hardware/Content Partnership">Start a Software, Hardware or Content partnership with CoderDojo</option>
              <option value="Partnerships">Start a Corporate partnership with CoderDojo</option>
              <option value="Events">Invite CoderDojo to an Event</option>
              <option value="Media/Press/PR">Discuss a Media Opportunity</option>
              <option value="Feedback">Give Feedback</option>
            </select>
          </div>
        </fieldset>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="dojo-find">
        <h2><b>Find a Dojo</b></h2>
        <p>In order to find your nearest club (Dojo) please search our global map of Dojos by typing in the area you live in. You can search <a href="http://zen.coderdojo.com/">here</a>. Once you have found a local club you can then contact the Dojo directly for information on attendance and registration.</p>
        <p>If you think your local Dojo is inactive please email <a href="mailto:info@coderdojo.org">info@coderdojo.org</a> with the name and location of the Dojo. </p>
        <p>No Dojo near you yet? <nuxt-link :to="localePath({ name: 'start-a-dojo' })">Consider starting a Dojo in your community</nuxt-link>!</p>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="dojo-start">
        <h2><b>Start a Dojo</b></h2>
        <p>Awesome! Starting your own Dojo is fun and rewarding. Take a look at our <a href="https://coderdojo.com/start-a-dojo/">easy to follow steps</a>. Once you are ready to start the journey, visit our Community Platform and<a href="https://coderdojo.com/start-a-dojo/"> create an account.</a> We will support and guide you through the journey.</p>
        <p>If you have any problems or queries &nbsp;get in touch with our Community team through <a href="mailto:info@coderdojo.org">info@coderdojo.org</a></p>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="dojo-mentor">
        <h2><b>Mentor at a Dojo</b></h2>
        <p>Awesome! It’s thanks to people like you that CoderDojo is able to reach and impact ninjas all around the world! Search <a href="http://zen.coderdojo.com/">here</a> to find your local Dojo. Click Join Dojo. This will send a request to the Dojo notifying them that you wish to become a mentor. </p>
        <p>Once you’re a member of the Dojo you will gain access to our mentoring E-learning modules which will give you all the information you need to know to inspire the ninjas at the Dojo! </p>
        <p>No Dojo near you yet? Consider starting a Dojo in your community! <a href="coderdojo.com/volunteer">Do this here.</a></p>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="Software/Hardware/Content Partnership">
        <h2><b>Start a Software, Hardware or Content partnership with CoderDojo</b></h2>
        <p>Thank you! We are always striving to provide awesome tools and resources to the Community. To ensure that we continue to do this, we have some brief criteria set out below for these partnerships.</p>
        <ul>
          <li>Software/Content/Hardware must be provided on a probono basis,
            <ul>
              <li>Discounted products will not be promoted,</li>
              <li>Software/Content should be offered on a semi-permanent basis (minimum 1 year access with the opportunity to continue if used by the community) in order for the community to gain a lasting benefit from the offer, </li>
            </ul>
          </li>
          <li>A minimum of 20 units should be supplied, smaller units of 5-10 will be considered depending on the product. </li>
          <li>All products must be relevant, useful and positively impact to the CoderDojo community,</li>
          <li>Software/Content/Hardware should be engaging to the CoderDojo community and delivered in a digestible and understandable format,</li>
        </ul>
        <p>If you meet the above criteria we’d love to hear from you! Fill out the below brief questions and we’ll get back to you ASAP!</p>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="Partnerships">
        <h2><b>Start a Corporate partnership with CoderDojo</b></h2>
        <p>Amazing! The CoderDojo Foundation is a registered charity in Ireland and have worked with many corporates to support the global community. There are a number of ways that corporates can get involved with the CoderDojo Foundation and the movement.</p>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="Events">
        <h2><b>Invite CoderDojo to an Event</b></h2>
        <p>Awesome! The CoderDojo Foundation team attend and host many different types of events. Some of the events we participate in are:</p>
        <ul>
          <li><b>Corporate / Tech events:</b> At these events we engage attendees with the aim of gaining support for local Dojos / the global community. Some of the ways that we get involved at these types events are:
          <ul>
            <li>Pop-up Dojo: these are once off Dojos at specific events where the aim is to give youth in the area the opportunity to participate and showcase CoderDojo to attendees at the event eg/ <a href="https://coderdojo.com/news/2015/11/13/another-great-year-for-coderdojo-at-the-web-summit/">Web Summit Pop-up Dojo</a>.</li>
            <li>Info stand: for the Foundation to spread the word about the CoderDojo movement.</li>
            <li>Speaking Slot: From time to time CoderDojo Foundation members will speak at events about CoderDojo to gather support for new and existing Dojos and the community.</li>
          </ul>
          </li>
          <li><b>Community Events:</b> We attend and support a varying level of community based events such as Coolest Projects, DojoCon, MegaDojo, Mentor / Community meetups and workshops. At these events we get involved as needed by offering advice, connecting you to other community members that can share advice or directly supporting.</li>
        </ul>
        <p>Other Requirements:</p>
        <ul>
          <li>All events must be relevant, and positively impactful to the CoderDojo community.</li>
          <li>The space provided is pro bono.</li>
          <li>We will not promote a paid event to the community, if there is no relevant contribution to the community eg/ donation of 10 or more tickets for the event.</li>
        </ul>
        <p>If you are requesting for the CoderDojo Foundation to get involved in any of the above please fill out the following form and we will be in touch.</p>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" data-show-value="Media/Press/PR">
        <h2><b>Talk about a Media Opportunity </b></h2>
        <p>Thank you for wanting to profile CoderDojo. Please fill in the below and we’ll be in touch ASAP!</p>
      </div>

      <div class="c-form-fieldset__wrapper" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Partnerships', 'Events', 'Media/Press/PR', 'Feedback')">
        <fieldset class="c-form-fieldset__element">
          <div class="c-form-group" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Partnerships', 'Events', 'Media/Press/PR', 'Feedback')">
            <label class="c-form-label" for="first_name-field-id">First name</label>
            <input type="text" id="first_name-field-id" name="00N4J00000IZ1l2" required="" class="c-form-input" value="" />
          </div>
          <div class="c-form-group" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Partnerships', 'Events', 'Media/Press/PR', 'Feedback')">
            <label class="c-form-label" for="last_name-field-id">Last name</label>
            <input type="text" id="last_name-field-id" name="00N4J00000IZ1l3" required="" class="c-form-input" value="" />
          </div>
          <div class="c-form-group" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Partnerships', 'Events', 'Media/Press/PR', 'Feedback')">
            <label class="c-form-label" for="email-field-id">Email</label>
            <input type="email" id="email-field-id" name="email" required="" class="c-form-input" value=""/>
          </div>
          <div class="c-form-group" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Media/Press/PR')">
            <label class="c-form-label" for="SuppliedCompany">Company</label>
            <input type="text" id="SuppliedCompany" name="company" required class="c-form-input"/>
          </div>
          <div class="c-form-group" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Media/Press/PR')">
            <label class="c-form-label" for="00N4J00000IZ1l6">Position</label>
            <input type="text" id="00N4J00000IZ1l6" name="00N4J00000IZ1l6" required class="c-form-input"/>
          </div>
          <div class="c-form-group" data-show-prop="type" data-show-value="Partnerships">
            <label class="c-form-label" for="00N4J00000IZ1l5">Type of Partnership</label>
            <select id="00N4J00000IZ1l5" name="00N4J00000IZ1l5" title="Type of Partnership" class="c-form-select">
              <option value="">--None--</option>
              <option value="Content">Content</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="c-form-group" data-show-prop="type" data-show-value="Events">
            <label class="c-form-label" for="00N4J00000IZ1l1">Event Name</label>
            <input type="text" maxlength="255" id="00N4J00000IZ1l1" name="00N4J00000IZ1l1" class="c-form-input"/>
          </div>
          <div class="c-form-group" data-show-prop="type" data-show-value="Events">
            <label class="c-form-label" for="00N4J00000IZ1l0">Event Date</label>
            <input type="date" id="00N4J00000IZ1l0" name="00N4J00000IZ1l0" class="c-form-input"/>
          </div>
          <div class="c-form-group" data-show-prop="type" data-show-value="Feedback">
            <label class="c-form-label" for="00N4J00000IZ1l7">Type of CD Community Member</label>
            <select id="00N4J00000IZ1l7" name="00N4J00000IZ1l7" title="Type of CD Community Member" class="c-form-select">
              <option value="">--None--</option>
              <option value="Champion">Champion</option>
              <option value="Volunteer/mentor">Volunteer/mentor</option>
              <option value="Parent">Parent</option>
              <option value="Ninja">Ninja</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="c-form-group" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Partnerships', 'Events', 'Media/Press/PR', 'Feedback')">
            <label class="c-form-label" for="description" data-show-prop="type" data-show-value="Software/Hardware/Content Partnership">Partnership proposal:</label>
            <label class="c-form-label" for="description" data-show-prop="type" :data-show-value="arrayString('Partnerships', 'Media/Press/PR')">Description:</label>
            <label class="c-form-label" for="description" data-show-prop="type" data-show-value="Events">Event information:</label>
            <label class="c-form-label" for="description" data-show-prop="type" data-show-value="Feedback">Description of feedback:</label>
            <textarea id="description" name="description" class="c-form-input" rows="5"></textarea>
          </div>
        </fieldset>
      </div>
      <div class="c-form-submit" data-show-prop="type" :data-show-value="arrayString('Software/Hardware/Content Partnership', 'Partnerships', 'Events', 'Media/Press/PR', 'Feedback')">
        <button class="sc-rp-button">Submit Request</button>
      </div>
    </form>
  </div>
</template>

<script>
  class FormDataTracker {
    constructor(options) {
      this.form = document.querySelector(options.formSelector)
      this.allInputs = this.form.querySelectorAll('input, textarea, select')
      this.inputsToTrack = this.form.querySelectorAll('[data-track-state]')
      this.storageAdapter = options.storageAdapter
      this.addEventListeners()
    }

    addEventListeners() {
      this.inputsToTrack.forEach((input) => {
        this.storageAdapter.set(input.name, input.value)
        input.addEventListener('change', this.changeEventListener.bind(this))
      })
    }

    changeEventListener(e) {
      this.storageAdapter.set(e.target.name, e.target.value)
    }

    get trackedFormData() {
      return this.storageAdapter.data
    }

    get allFormData() {
      const data = {}
      this.allInputs.forEach((input) => {
        if (input.name) {
          data[input.name] = input.value
        }
      })
      return data
    }
  }

  class State {
    constructor(options) {
      this.data = options.data || {}
      this.listeners = {}
    }

    addStateListener(key, callback) {
      if (Array.isArray(key)) {
        return key.map((_key) => this.addStateListener(_key, callback))
      }
      if (!this.listeners[key]) {
        this.listeners[key] = []
      }
      this.listeners[key].push(callback)
      return this.listeners[key].length - 1
    }

    removeEventListener(key, index) {
      this.listeners[key].splice(index, 1)
    }

    runEventListeners(key) {
      if (this.listeners[key]) {
        this.listeners[key].forEach((callback) => {
          callback(key, this.data[key])
        })
      }
    }

    get(key) {
      return this.data[key]
    }

    set(key, value) {
      this.data[key] = value
      this.updateStorage()
      this.runEventListeners(key)
    }

    delete(key) {
      delete this.data[key]
      this.updateStorage()
      this.runEventListeners(key)
    }

    clear() {
      Object.keys(this.data).forEach(key => this.delete(key))
      this.updateStorage()
    }

    updateStorage() {
      // To be implemented in Adapter
    }

    get serializedData() {
      return JSON.stringify(this.data)
    }
  }

  class SessionStorageAdapter extends State {
    constructor(options) {
      super(options)
      this.storageKey = options.storageKey
    }

    updateStorage() {
      sessionStorage.setItem(this.storageKey, this.serializedData)
    }
  }

  class VisibilityManager {
    constructor(options) {
      this.state = options.storageAdapter
      this.parent = document.querySelector(options.parentSelector || 'body')
      this.elementsToTrack = this.parent.querySelectorAll('[data-show-prop]')
      this.addEventListeners()
    }

    addEventListeners() {
      this.elementsToTrack.forEach((el) => {
        const { showProp } = el.dataset

        if (!this.getVisibleState(el)) {
          this.hideElement(el)
        }
        this.state.addStateListener(showProp, () => {
          if (this.getVisibleState(el)) {
            el.style.display = null
            el.querySelectorAll('input, select, textarea').forEach((formEl) => {
              formEl.required = true
            })
          } else {
            this.hideElement(el)
          }
        })
      })
    }

    hideElement(el) {
      el.style.display = 'none'
      el.querySelectorAll('input, select, textarea').forEach((formEl) => {
        formEl.value = null
        formEl.required = false
        formEl.dispatchEvent(new Event('change'))
      })
    }

    getVisibleState(el) {
      let { showProp, showValue, hideProp, hideValue } = el.dataset
      const value = this.state.get(showProp || hideProp)
      console.log({ showValue })

      try {
        showValue = JSON.parse(showValue)
      } catch (e) {}
      try {
        hideValue = JSON.parse(hideValue)
      } catch (e) {}
      console.log({ showValue })

      if (Array.isArray(showValue || hideValue)) {
        return (showValue || hideValue).indexOf(value) > -1
      }
      return (showValue || hideValue) === value
    }
  }

  export default {
    methods: {
      // Vue keeps mangling prop values that look like arrays, this method avoids that
      arrayString(...args) {
        return `["${args.join('", "')}"]`
      }
    },
    mounted() {
      const subTypeInput = this.$el.querySelector('#subType')

      const sessionStorageAdapter = new SessionStorageAdapter({
        storageKey: 'contact_form',
      })

      const formDataTracker = new FormDataTracker({
        formSelector: '#coderdojo_contact',
        storageAdapter: sessionStorageAdapter,
      })

      const visibilityManager = new VisibilityManager({
        parentSelector: '#coderdojo_contact',
        storageAdapter: sessionStorageAdapter,
      })
    }
  }
</script>


<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  p, ul {
    margin-bottom: 2rem;
  }

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
    padding: 0;
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
