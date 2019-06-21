import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    userId: ''
  },
  mutations: {
    setUserId (state, data) {
      state.userId = data
      console.log(state.userId)
    }
  },
  actions: {
    setUserId ({ commit }, data) {
      commit('setUserId', data)
    }
  }
})
