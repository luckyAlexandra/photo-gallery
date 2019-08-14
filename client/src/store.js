import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    userId: ''
  },
  mutations: {
    setUserId (state, data) {
      state.userId = data
    }
  },
  actions: {
    setUserId ({ commit }, data) {
      commit('setUserId', data)
    }
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
