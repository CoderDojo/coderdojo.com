import Vuex from 'vuex'

const defaultStore = () => {
  return new Vuex.Store({
    state: {
      locale: 'en-US', 
    },
    mutations: {
      setLocale (state, value) {
        state.locale = value;
      }
    }
  })
}

export default defaultStore 
