import Vue from 'vue'
import Vuex from 'vuex'

import api from './modules/api'
import history from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    api,
    history
  }
})
