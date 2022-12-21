const state = () => ({
    showLoader: Boolean,
    orders: null,
    bulkpurchases: null,
    tokenpurchases: null
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
    },
    ['GET_BULK_PURCHASE_ORDERS_SUCCESS'](state,payload){
      state.showLoader = false
      state.bulkpurchases = payload;
    },
    ['GET_TOKEN_PURCHASE_ORDERS_SUCCESS'](state,payload){
      state.showLoader = false
      state.tokenpurchases = payload;
    }
  }
  const actions = {
    async _fetchorders ({ commit }) {
      commit('GET_ORDERS')
      await this.$axios.$get('/api/orders')
        .then((response) => {
          commit('GET_ORDERS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_ORDERS_ERROR', err)
        })
    },
    async _fetchbulkpurchases ({ commit }) {
      commit('GET_ORDERS')
      await this.$axios.$get('/api/orders/purchases/cr')
        .then((response) => {
          commit('GET_BULK_PURCHASE_ORDERS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_ORDERS_ERROR', err)
        })
    },
    
    async _fetchtokenpurchases ({ commit }) {
      commit('GET_ORDERS')
      await this.$axios.$get('/api/orders/purchases/tp')
        .then((response) => {
          commit('GET_TOKEN_PURCHASE_ORDERS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_ORDERS_ERROR', err)
        })
    },
  
    async _placenewbulkorder({ dispatch }, payload) {
        await this.$axios.$post('/api/orders', payload)
          .then((response) => {
            dispatch("_fetchbulkpurchases", null, { root: true });
          }).catch((err) => {
          })
      },
      async _placenewtokenorder({ dispatch }, payload) {
        await this.$axios.$post('/api/payments', payload)
          .then((response) => {
            dispatch("_fetchtokenpurchases", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updateproduct ({ dispatch }, payload) {
      await this.$axios.$put(`/api/orders/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchorders", null, { root: true });
        }).catch((err) => {
        })
    },
    async _makeorderpayment({ dispatch }, payload) {
      await this.$axios.$post('/api/orders/approve', payload)
        .then((response) => {
          dispatch("_fetchbulkpurchases", null, { root: true });
        }).catch((err) => {
        })
    },
  }
  
  const getters = {
    orderslist: (state) => { return state.orders },
    bulkpurchases: (state)=> {return state.bulkpurchases},
    tokenpurchases: (state)=>{return state.tokenpurchases}
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  