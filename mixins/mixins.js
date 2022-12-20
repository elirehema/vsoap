import Vue from 'vue'
const mixins = {
  components: {
    'skeleton-table-loader': () => import('~/components/loaders/skeleton-table-loader.vue'),
    'skeleton-datepicker-loader': () => import('~/components/loaders/skeleton-date-picker.vue'),
    'skeleton-summary-card': () => import('~/components/loaders/skeleton-summary-card.vue')
  },
  data () {
    return {
      rules: {
        required: value => !!value || "Field Required",
      },
      loading: false,
      loader: null
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
  methods: {},
  computed: {

    msisdn () {
      return localStorage.getItem('msisdn')
    }

  }

}
Vue.mixin(mixins)