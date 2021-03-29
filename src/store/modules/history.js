const state = {
  history: []
}

const mutations = {
  setHistory (state, payload) { state.history = payload }
}

export default {
  namespaced: true,
  state,
  mutations
}
