<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="false"
      permanent
      color="primary"
      dark
      app
      height="100%"
      style="max-height: 97.6%;"
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar v-if="miniVariant" color="primary lighten-2">
            <v-img :src="miniUrl" />
          </v-list-item-avatar>
          <v-img v-else :src="url" />
        </v-list-item>

        <v-list-item v-if="!miniVariant" link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Payless
            </v-list-item-title>
            <v-list-item-subtitle>Smart metering system</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />
      <v-list-item
      dense
            v-for="menu in mainmenu"
            :key="menu.title"
            :to="menu.to"
            color="white"
            class="pl-4"
          >
            <v-list-item-icon>
              <v-icon>{{ 'mdi-'+ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">{{ menu.title }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      <v-list dense>
        <v-list-group
          v-for="item in menuitems"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="`mdi-${item.icon}`"
          active-class="white--text"
          append-icon="mdi-menu-down"
          no-action
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.menus"
            :key="child.title"
            :to="child.to"
            color="white"
            class="pl-9"
          >
            <v-list-item-icon>
              <v-icon>{{ 'mdi-'+ child.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-light">{{ child.title }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      flat
    >
      <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
      <v-btn
        icon
        dark
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `menu${miniVariant ? '' : '-open'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        dark to="/dashboard/a"
      >
        <v-icon>mdi-selection</v-icon>
      </v-btn>
      <v-btn
        icon
        dark to="/"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-badge
        :content="adv"
        :value="adv"
        color="success"
        overlap
      >
        <v-icon dark>
          mdi-bullhorn-variant
        </v-icon>
      </v-badge>
      <v-badge
        :content="notifications"
        :value="notifications"
        color="success"
        class="ml-6"
        overlap
      >
        <v-icon dark>
          mdi-bell
        </v-icon>
      </v-badge>
      <v-badge
        :content="messages"
        :value="messages"
        color="success"
        class="ml-6"
        overlap
      >
        <v-icon dark>
          mdi-forum
        </v-icon>
      </v-badge>
    </v-app-bar>
    <v-main>
      <v-container class="ma-2" height="100%" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <footer-component />
    </v-footer>
  </v-app>
</template>

<script>
import FooterComponent from '~/components/footer-component.vue'
export default {
  name: 'DefaultLayout',
  components: {
    'footer-component': FooterComponent
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      messages: 8,
      adv: 7,
      notifications: 1,
      mainmenu:[
        {
              title: 'Dashboard',
              icon: 'view-dashboard',
              to: '/'
            },
        {
              title: 'Bulk Purchases',
              icon: 'cart-check',
              to: '/purchases/bulk'
            },
            {
              title: 'Token Purchases',
              icon: 'cart-check',
              to: '/purchases/token'
            }
      ],
      menuitems: [
   
        {
          title: 'Devices',
          icon: 'bookshelf',
          menus: [
           
            {
              title: 'Meters',
              icon: 'gauge',
              to:'/meters'
            },
            {
              title: 'Meter Types',
              icon: 'gauge',
              to:'/meters/types'
            },
            {
              title: 'DCUs',
              icon: 'gauge'
            },
         
   
          ]
        },
            {
          title: 'Sites',
          icon: 'domain',
          menus: [
            {
              title: 'Sites',
              icon: 'office-building-marker',
              to:'/sites'
            },
          ]
        },
        {
          title: 'Clients Managements',
          icon: 'cog-transfer-outline',
          menus: [
            {
              title: 'Customer',
              icon: 'account-group',
              to: '/customers'
            },
          
          ]
        },
        {
          title: 'Users Managements',
          icon: 'cog-transfer-outline',
          menus: [
            {
              title: 'Users',
              icon: 'account-cog',
              to: '/users'
            },
          
          ]
        },
    
        {
          title: 'Vending',
          icon: 'file-key',
          menus: [
            {
              title: 'Clear tamper',
              icon: 'close-circle-outline'
            },
            {
              title: 'Clear Credit token',
              icon: 'close-circle'
            },
            {
              title: 'Recharge token',
              icon: 'close-octagon'
            },
            {
              title: 'SGC List',
              icon: 'qrcode'
            },
          ]
        },
        {
          title: 'Transactions',
          icon: 'chart-line',
          menus:[
            {
              title: 'Payments',
              icon: 'contactless-payment-circle',
              to: '/payments'
            },
            {
              title: 'Invoices',
              icon: 'receipt-text-check',
              to: '/invoices'
            },
          ]
        },
      
        {
          title: 'System',
          icon: 'cog-transfer-outline',
          menus: [
         
            {
              title: 'Settings',
              icon: 'cog'
            }
          ]
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      url: 'https://billing.payless.cloud/asset/img/logo.png',
      miniUrl: 'https://billing.payless.cloud/asset/img/logo.png'
    }
  }
}
</script>
