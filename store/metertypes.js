const state = () => ({
    showLoader: Boolean,
    metertypes: null
  })
  
  const mutations = {
    ['GET_TYPES'] () {
      state.showLoader = true
    },
    ['GET_TYPES_SUCCESS'] (state, payload) {
      state.showLoader = false
      state.metertypes = payload
    },
    ['GET_TYPES_ERROR'] (state) {
      state.showLoader = false
    }
  }
  const actions = {
    async _fetchmetertypes ({ commit }) {
      commit('GET_TYPES')
      await this.$axios.$get('/api/meters/types')
        .then((response) => {
          commit('GET_TYPES_SUCCESS', response)
        }).catch((err) => {
          commit('GET_TYPES_ERROR', err)
        })
    },
  
    async _addnewmetertype({ dispatch }, payload) {
        await this.$axios.$post('/api/meters/types', payload)
          .then((response) => {
            dispatch("_fetchmetertypes", null, { root: true });
          }).catch((err) => {
          })
      },
    async _updatemetertype ({ dispatch }, payload) {
      await this.$axios.$put(`/api/meters/types/${payload.id}`, payload)
        .then((response) => {
          dispatch("_fetchmetertypes", null, { root: true });
        }).catch((err) => {
        })
    }
  }
  
  const getters = {
    metertypes: (state) => { return state.metertypes }
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  