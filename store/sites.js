const state = () => ({
    showLoader: Boolean,
    sites: null
  })
  
  const mutations = {
    ['GET_SITES'] () {
      state.showLoader = true
    },
    ['GET_SITES_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.sites = payload
    },
    ['GET_SITES_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchsites ({ commit }) {
      commit('GET_SITES')
      await this.$api.$get('/sites')
        .then((response) => {
          commit('GET_SITES_SUCCESS', response)
        }).catch((err) => {
          commit('GET_SITES_ERROR', err)
        })
    },
  
    async _createnewsite ({ dispatch }, payload) {
        await this.$api.$post('/sites', payload)
          .then((response) => {
            dispatch("_fetchsites", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updatesiteinformation ({ dispatch }, payload) {
      await this.$api.$put(`/sites/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchsites", null, { root: true });
        }).catch((err) => {
        })
    }
  }
  
  const getters = {
    sites: (state) => { return state.sites }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  