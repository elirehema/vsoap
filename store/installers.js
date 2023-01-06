const state = () => ({
  showLoader: Boolean,
  installers: []
})

const mutations = {
  'GET_INSTALLERS' () {
    state.showLoader = true
  },
  'GET_INSTALLERS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.installers = payload
  },
  'GET_INSTALLERS_ERROR' (state) {
    state.showLoader = false
  }
}
const actions = {
  async _fetchinstallers ({ commit }) {
    commit('GET_INSTALLERS')
    await this.$axios.$get('/api/users/installer')
      .then((response) => {
        commit('GET_INSTALLERS_SUCCESS', response)
      }).catch((err) => {
        commit('GET_INSTALLERS_ERROR', err)
      })
  },
}

const getters = {
  installers: (state) => { return state.installers }

}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
