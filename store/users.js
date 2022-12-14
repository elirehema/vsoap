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
    await this.$axios.$get('/api/users')
      .then((response) => {
        commit('GET_USERS_SUCCESS', response)
      }).catch((err) => {
        commit('GET_USERS_ERROR', err)
      })
  },

  async _updateuserinformation ({ dispatch }, payload) {
    await this.$axios.$put(`/api/users/${payload.id}`, payload)
      .then((response) => {
        dispatch("_fetchusers", null, { root: true });
      }).catch((err) => {
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
