const state = () => ({
    showLoader: Boolean,
    customers: null
  })
  
  const mutations = {
    ['GET_CUSTOMERS'] () {
      state.showLoader = true
    },
    ['GET_CUSTOMERS_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.customers = payload
    },
    ['GET_CUSTOMERS_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchcustomers ({ commit }) {
      commit('GET_CUSTOMERS')
      await this.$api.$get('/customers')
        .then((response) => {
          commit('GET_CUSTOMERS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_CUSTOMERS_ERROR', err)
        })
    },
  
    async _addnewcustomer({ dispatch }, payload) {
        await this.$api.$post('/customers', payload)
          .then((response) => {
            dispatch("_fetchcustomers", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updatecustomer ({ dispatch }, payload) {
      await this.$api.$put(`/customers/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchcustomers", null, { root: true });
        }).catch((err) => {
        })
    }
  }
  
  const getters = {
    customers: (state) => { return state.customers }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  