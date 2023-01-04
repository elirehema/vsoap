const state = () => ({
    vendings: null
  })
  
  const mutations = {
    ['GET_VENDINGS'] () {
        state.showLoader = true
      },
      ['GET_VENDINGS_SUCCESS'] (state, payload) {
        state.showLoader = false
        state.vendings = payload
      },
      ['GET_VENDINGS_ERROR'] (state) {
        state.showLoader = false
      }
  }
  
  const actions = {
    async _fetchvendings ({ commit }) {
        commit('GET_VENDINGS')
        await this.$axios.$get('/api/vendings')
          .then((response) => {
            commit('GET_VENDINGS_SUCCESS', response)
          }).catch((err) => {
            commit('GET_VENDINGS_ERROR', err)
          })
      },

      async _sendvendingrequest ({ commit, dispatch }, payload) {
        //commit('GET_VENDINGS')
        await this.$axios.$post('/api/vendings', payload)
          .then((response) => {
            dispatch("_fetchvendings", null, { root: true });
          }).catch((err) => {
            commit('GET_VENDINGS_ERROR', err)
          })
      },
  }
  
  const getters = {
    vendings: (state) => { return state.vendings }
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  