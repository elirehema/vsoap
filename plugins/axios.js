import Vue from 'vue'
export default function ({ $axios, redirect, store, $toast }, inject) {
  $axios.setHeader('Content-Type', 'application/json')
  // $axios.setToken(store.getters.accessToken, 'Bearer');

  const api = $axios.create({

   // withCredentials: true,
    headers: {
      common: {
        Accept: '*/*',
        'Content-Type': 'application/json'

      }
    }
  })

  api.onRequest((config) => {
    const token = localStorage.getItem('accessToken')
    //api.setHeader('Content-Type', 'application/json')
    // api.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With");
    // api.setHeader("Access-Control-Allow-Origin", "*");
    //api.setHeader('Cache-Control: no-cache, no-store, must-revalidate');
    //api.setHeader('Pragma: no-cache');
    //api.setHeader('Expires: 0');
    //api.setHeader('X-User', 'user::username')
    if (token == null) {
      store.dispatch('_logoutsession')
    }
    if (config.url != '/auth/signin') {
      //api.setHeader('Authorization', 'Bearer ' + token)
    }
  })

  api.onResponse((response) => {
    // Vue.toasted.show('Success ', { icon: 'check-circle', type: 'success' });
  })
  api.onError((error) => {
    const code = parseInt(error.response && error.response.status)

    if (code === 404) {
      $toast.show(error.response.data.error.Message)
    }
    if (code === 401) {
      $toast.error('Un Authorized access trying to access the resource')
      store.dispatch('_logoutsession')
    }
  })

  // Set baseURL to something different
  // eslint-disable-next-line no-console

  /** For UI developers with no local API **/
  /* api.setBaseURL(  process.env.baseUrl ); */

  /** For production */
  api.setBaseURL(process.env.NODE_ENV === 'production' ? process.env.baseUrl : process.env.localUrl)
  // Inject to context as $api
  inject('api', api)
}
