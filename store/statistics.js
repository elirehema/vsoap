const state = () => ({
    showLoader: Boolean,
    statistics: []
  })
  
  const mutations = {
    'GET_STATISTICS' () {
      state.showLoader = true
    },
    'GET_STATISTICS_SUCCESS' (state, payload) {
      state.showLoader = false
      state.statistics = payload
    },
    'GET_STATISTICS_ERROR' (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchstatistics ({ commit }) {
      commit('GET_STATISTICS')
      await this.$axios.$get('/api/balances')
        .then((response) => {
          commit('GET_STATISTICS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_STATISTICS_ERROR', err)
        })
    }
  }
  
  const getters = {
    statistics: (state) => { return state.statistics.length>0 ?  state.statistics[0]:null }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  