import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getFromLocal = () => {
  return {
    token: localStorage.getItem('providerToken'),
    name: localStorage.getItem('providerName')
  }
}

const store = new Vuex.Store({
  state: {
    provider: getFromLocal()
  },
  mutations: {
    provider (state, arr) {
      localStorage.setItem('providerToken', arr.token)
      localStorage.setItem('providerName', arr.name)
      state.provider = {
        token: arr.token,
        name: arr.name
      }
    }
  },
  getters: {
    provider: state => {
      return state.provider
    }
  }
})

export default store
