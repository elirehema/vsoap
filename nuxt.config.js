const routerBase = process.env.DEPLOY_ENV === 'github' ? '/vsoap/' : '/';
import metajs from './plugins/meta';
const meta = metajs();
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  //target: 'static',
  telemetry: true,
  ssr: false,
  router: {
    mode: 'hash',
    base: routerBase,
    routerNameSplitter: "/",
   middleware: ['router']
  },
  loadingIndicator: {
    name: 'pulse',
    color: ' #A0D18C',
    background: '#FAFAFA'
  },


  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Payless',
    title: 'Payless',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      /**Windows phone **/
      { name: "msapplication-navbutton-color", content: "#A0D18C" },
      /**iOS Safari**/
      { name: "apple-mobile-web-app-status-bar-style", content: "#A0D18C" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Payless Yangu self-service Web Application' },

      //Twitter meta-data
      { hid: "twitter:site", name: "twitter:site", content: "PaylessApp" },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:image:alt", name: "twitter:image:alt", content: "Ospic application" },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/axios',
    '~/plugins/permissions.js',
    '~/plugins/filters.js',
    '~/plugins/pwa.client.js',
    '~/plugins/vue-apexcharts.js',
    '~/mixins/mixins.js',
    '~/plugins/vuepersistence.js'

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  // https://go.nuxtjs.dev/axios
  // https://go.nuxtjs.dev/pwa

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    'nuxt-material-design-icons',
    ['cookie-universal-nuxt', { parseJSON: false }],
  ],

  toast: {
    position: 'bottom-right',
    duration: 4000,
    theme: 'bubble',
    singleton: true,
    iconPack: 'mdi'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath: process.env.NODE_ENV === 'github' ? '/assets/' : '',
    extend(config, ctx) { },
    postcss: {
      plugins: {
      },
      preset: {
      }
    },
    terser: {
      extractComments: false, // default was LICENSES
      // https://github.com/terser/terser#compress-options
      //Disable console log in production
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    //credentials: true,
  },
  proxy:{
    
    '/api/': {
     // target: "https://ams.nexiss.cloud/api/v1",
     target: process.env.NODE_ENV === 'dev' ? "http://localhost:8080/api/v1":"https://ams.nexiss.cloud/api/v1",
      pathRewrite: {
        '^/api/': ''
      }
     }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  }
}