const state = () => ({
    showLoader: Boolean,
    products: null
  })
  
  const mutations = {
    ['GET_PRODUCTS'] () {
      state.showLoader = true
    },
    ['GET_PRODUCTS_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.products = payload
    },
    ['GET_PRODUCTS_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchproducts ({ commit }) {
      commit('GET_PRODUCTS')
      await this.$api.$get('/products')
        .then((response) => {
          commit('GET_PRODUCTS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_PRODUCTS_ERROR', err)
        })
    },
  
    async _addnewproduct({ dispatch }, payload) {
        await this.$api.$post('/products', payload)
          .then((response) => {
            dispatch("_fetchproducts", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updateproduct ({ dispatch }, payload) {
      await this.$api.$put(`/products/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchproducts", null, { root: true });
        }).catch((err) => {
        })
    }
  }
  
  const getters = {
    products: (state) => { return state.products }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  