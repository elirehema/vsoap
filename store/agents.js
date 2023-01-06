const state = () => ({
  showLoader: Boolean,
  agents: []
})

const mutations = {
  'GET_AGENTS' () {
    state.showLoader = true
  },
  'GET_AGENTS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.agents = payload
  },
  'GET_AGENTS_ERROR' (state) {
    state.showLoader = false
  }
}
const actions = {
  async _fetchagents ({ commit }) {
    commit('GET_AGENTS')
    await this.$axios.$get('/api/users/agent')
      .then((response) => {
        commit('GET_AGENTS_SUCCESS', response)
      }).catch((err) => {
        commit('GET_AGENTS_ERROR', err)
      })
  },
}

const getters = {
  agents: (state) => { return state.agents }

}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
