import Vue from 'vue'
const mixins = {
  components: {
    'skeleton-table-loader': () => import('~/components/loaders/skeleton-table-loader.vue'),
    'skeleton-datepicker-loader': () => import('~/components/loaders/skeleton-date-picker.vue'),
    'skeleton-summary-card': () => import('~/components/loaders/skeleton-summary-card.vue'),
    'chart-bar': () => import('@/components/charts/apex-bar.vue'),
    'chart-area-spline': () => import('@/components/charts/apex-area-spline.vue'),
    'chart-bar': () => import('@/components/charts/apex-bar.vue'),
    'chart-basic-bar': () => import('@/components/charts/apex-basic-bar.vue'),
    'chart-donut': () => import('@/components/charts/apex-donut.vue'),
    'chart-gradient-donut': () => import('@/components/charts/apex-donut-gradient.vue'),
    'chart-line-gradient': () => import('@/components/charts/apex-line-gradient.vue'),
    'chart-line': () => import('@/components/charts/apex-line.vue'),
    'chart-pie': () => import('@/components/charts/apex-pie.vue'),
    'chart-column': () => import('@/components/charts/apex-column-chart.vue'),
    'chart-smooth-line': () => import('@/components/charts/apex-smooth-line.vue'),
    'chart-semi-donut':()=> import('@/components/charts/apex-semi-donut.vue'),
    'summarycard': () => import('@/components/charts/summary-card.vue'),
    'summary-power': () => import('@/components/summary/card-power.vue'),
    'summary-voltage': () => import('@/components/summary/card-voltage.vue'),
    'summary-consumption': () => import('@/components/summary/card-consuption.vue')
  },
  data () {
    return {
     
      loader: null,
      requesttypes:[
        {
          title:"Clear Tamper token",
          value:"CLEARTAMPERTOKEN"
        },
        {
          title:"Reset token",
          value:"RESETTOKEN"
        },
        {
          title:"Clear credit token",
          value:"CREDITTOKEN"
        }
      ]
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
  methods: {
    getStatusColor(v){
      switch (v) {
        case '100':
          return 'white'
          break;
      case '200':
        return 'success lighten-3'
        case '300':
        return 'blue lighten-3'

        case '400':
          return 'teal'
          case '500':
          return 'red lighten-4'
        default:
          return 'white'
          break;
      }
    }
  },
  computed: {

    msisdn () {
      return localStorage.getItem('msisdn')
    }

  }

}
Vue.mixin(mixins)