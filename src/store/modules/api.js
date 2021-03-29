import Vue from 'vue'

const state = {
  wsConnect: 'wss://nane.tada.team/ws',
  apiBase: 'https://nane.tada.team/api',
  GET: {
    settings: '/settings',
    rooms: '/rooms',
    history: '/rooms/{name}/history'
  }
}

const getters = {
  getSettings (state) { return state.apiBase + state.GET.settings },
  getRooms (state) { return state.apiBase + state.GET.rooms },
  getHistory: state => name => { return state.apiBase + state.GET.history.replace(/{name}/, name) }
}

const actions = {
  fetchSettings ({ getters }) {
    return new Promise((resolve, reject) => {
      Vue.$http.get(getters.getSettings)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },
  fetchRooms ({ getters }) {
    return new Promise((resolve, reject) => {
      Vue.$http.get(getters.getRooms)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },
  fetchHistory ({ getters, commit }, name) {
    return new Promise((resolve, reject) => {
      Vue.$http.get(getters.getHistory(name))
        .then(res => {
          commit('history/setHistory', res.data.result, { root: true })
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
