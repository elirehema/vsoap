const state = () => ({
    showLoader: Boolean,
    meters: null
  })
  
  const mutations = {
    ['GET_METERS'] () {
      state.showLoader = true
    },
    ['GET_METERS_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.meters = payload
    },
    ['GET_METERS_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchmeters ({ commit }) {
      commit('GET_METERS')
      await this.$axios.$get('/api/meters')
        .then((response) => {
          commit('GET_METERS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_METERS_ERROR', err)
        })
    },
  
    async _addnewmeter({ dispatch }, payload) {
        await this.$axios.$post('/api/meters', payload)
          .then((response) => {
            dispatch("_fetchmeters", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updatemeterinformation ({ dispatch }, payload) {
      await this.$axios.$put(`/api/meters/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchmeters", null, { root: true });
        }).catch((err) => {
        })
    }
  }
  
  const getters = {
    meters: (state) => { return state.meters }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  