const state = () => ({
    showLoader: Boolean,
    dcus: null
  })
  
  const mutations = {
    ['GET_DCUS'] () {
      state.showLoader = true
    },
    ['GET_DCUS_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.dcus = payload
    },
    ['GET_DCUS_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchdcus ({ commit }) {
      commit('GET_DCUS')
      await this.$axios.$get('/api/dcu')
        .then((response) => {
          commit('GET_DCUS_SUCCESS', response)
        }).catch((err) => {
          commit('GET_DCUS_ERROR', err)
        })
    },
  
    async _adddcu({ dispatch }, payload) {
        await this.$axios.$post('/api/dcu', payload)
          .then((response) => {
            dispatch("_fetchdcus", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updatedcu ({ dispatch }, payload) {
      await this.$axios.$put(`/api/dcu/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchdcus", null, { root: true });
        }).catch((err) => {
        })
    }
  }
  
  const getters = {
    dcus: (state) => { return state.dcus }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  