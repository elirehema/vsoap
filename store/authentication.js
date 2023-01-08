const state = () => ({
  showLoader: Boolean,
  accessToken: null,
  userrole: null,
  userpermissions: null,
  realm: null
});

const mutations = {
  ["AUTHENTICATE"](state) {
    state.showLoader = true;
  },
  ["AUTHENTICATE_FAILED"](state) {
    state.showLoader = false;
  },
  ["AUTHENTICATE_ERROR"](state) {
    state.showLoader = false;
  },
  ["AUTHENTICATE_SUCCESS"](state, payload) {
    state.showLoader = false;
    if (payload.accessToken != undefined) {
      state.accessToken = payload.accessToken;
      localStorage.setItem("accessToken", payload.accessToken);
      state.userpermissions = payload.permissions;
      state.userrole = payload.roles[0]
      state.realm = payload.realm
      this.$router.push("/");
    }else{
     // window.location.reload(true)
    }
  },
  ["LOGOUT_SESSION"](state) {
    window.localStorage.clear();
    sessionStorage.clear();
    this.$router.push("/signin");
    //window.location.reload(true)
  },
};
const actions = {
  async _authenticate({ commit, dispatch }, requestbody) {
    commit("AUTHENTICATE");
    await this.$axios
      .$post("/api/auth/signin", requestbody)
      .then((response) => {
        commit("AUTHENTICATE_SUCCESS", response);
      })
      .catch(() => {
        commit("AUTHENTICATE_ERROR");
      });
  },
 

  async _logoutsession({ commit }) {
    await commit("LOGOUT_SESSION");
  },
};
const getters = {
  accessToken: function (state) {
    return state.accessToken;
  },
  isAuthenticated: function (state) {
    return state.accessToken != null;
  },
  userpermissions: (state) => { return state.userpermissions },
  userrole: (state) => { return state.userrole },
  realm: (state) => { return state.realm },
};

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters,
};
