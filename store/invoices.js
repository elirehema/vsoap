const state = () => ({
    showLoader: Boolean,
    invoices: null
  })
  
  const mutations = {
    ['GET_INVOICES'] () {
      state.showLoader = true
    },
    ['GET_INVOICES_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.invoices = payload
    },
    ['GET_INVOICES_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchinvoices ({ commit }) {
      commit('GET_INVOICES')
      await this.$axios.$get('/api/invoices')
        .then((response) => {
          commit('GET_INVOICES_SUCCESS', response)
        }).catch((err) => {
          commit('GET_INVOICES_ERROR', err)
        })
    }
  }
  
  const getters = {
    invoices: (state) => { return state.invoices }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  