const state = () => ({
  showLoader: Boolean,
  users: []
})

const mutations = {
  'GET_USERS' () {
    state.showLoader = true
  },
  'GET_USERS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.users = payload
  },
  'GET_USERS_ERROR' (state) {
    state.showLoader = false
  }
}
const actions = {
  async _fetchusers ({ commit }) {
    commit('GET_USERS')
    await this.$api.$get('/users')
      .then((response) => {
        commit('GET_USERS_SUCCESS', response)
      }).catch((err) => {
        commit('GET_USERS_ERROR', err)
      })
  }
}

const getters = {
  users: (state) => { return state.users }

}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
