const state = () => ({
    showLoader: Boolean,
    orders: null
  })
  
  const mutations = {
    ['GET_ORDERS'] () {
      state.showLoader = true
    },
    ['GET_ORDERS_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.orders = payload
    },
    ['GET_ORDERS_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchorders ({ commit }) {
      commit('GET_ORDERS')
      await this.$api.$get('/orders')
        .then((response) => {
          commit('GET_ORDERS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_ORDERS_ERROR', err)
        })
    },
  
    async _addnewproduct({ dispatch }, payload) {
        await this.$api.$post('/orders', payload)
          .then((response) => {
            dispatch("_fetchorders", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updateproduct ({ dispatch }, payload) {
      await this.$api.$put(`/orders/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchorders", null, { root: true });
        }).catch((err) => {
        })
    }
  }
  
  const getters = {
    orders: (state) => { return state.orders }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  