const state = () => ({
  showLoader: Boolean,
  accessToken: null
})

const mutations = {
  'AUTHENTICATE' (state) {
    state.showLoader = true
  },
  'AUTHENTICATE_FAILED' (state) {
    state.showLoader = false
  },
  'AUTHENTICATE_ERROR' (state) {
    state.showLoader = false
  },
  'AUTHENTICATE_SUCCESS' (state, payload) {
    state.showLoader = false
    state.accessToken = payload.accessToken
    localStorage.setItem('accessToken',
      payload.accessToken
    )
    document.cookie = `current_subject=user::${payload.username}; SameSite=None; Secure`
    //document.cookie = "favorite_food=tripe; SameSite=None; Secure";

    this.$router.push('/')
  }
}
const actions = {
  async _authenticate ({ commit, dispatch }, requestbody) {
    commit('AUTHENTICATE')
    await this.$axios
      .$post('/api/auth/signin', requestbody)
      .then((response) => {
        commit('AUTHENTICATE_SUCCESS', response)
      })
      .catch(() => {
        commit('AUTHENTICATE_ERROR')
      })
  },
  async _createnewuser ({ dispatch }, payload) {
    await this.$axios.$post('/api/auth/signup', payload)
      .then((response) => {
        dispatch("_fetchusers", null, { root: true });
      }).catch((err) => {
      })
  },

  async _logoutsession ({ commit }) {
    await commit('LOGOUT_SESSION')
  }
}
const getters = {
  accessToken: function (state) {
    return state.accessToken
  },
  isAuthenticated: function (state) {
    return state.accessToken != null
  }

}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
