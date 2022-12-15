const state = () => ({
    showLoader: Boolean,
    payments: null
  })
  
  const mutations = {
    ['GET_PAYMENTS'] () {
      state.showLoader = true
    },
    ['GET_PAYMENTS_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.payments = payload
    },
    ['GET_PAYMENTS_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchpayments ({ commit }) {
      commit('GET_PAYMENTS')
      await this.$axios.$get('/api/payments')
        .then((response) => {
          commit('GET_PAYMENTS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_PAYMENTS_ERROR', err)
        })
    }
  }
  
  const getters = {
    payments: (state) => { return state.payments }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  