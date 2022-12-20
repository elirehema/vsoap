<template>
  <v-form class="form-box" @submit.prevent="formSubmit">
    <v-container height="100%">
      <v-row class="mt-0">
        <v-col cols="12" sm="12" md="2">
          <img
            src="@/assets/medias/lexis.png"
            alt="homepage"
            width="160"
            class="ml-2 dark-logo"
          >
        </v-col>
      </v-row>
      <div class="d-flex align-center justify-center mt-15">
        <v-row class="mt-0" no-gutters>
          <v-col cols="12" md="5" class="  d-flex justify-center align-center ">
            <v-list color="transparent">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-sm-h4 text-md-h3 text-lg-h2 primary--text text-sm-center text-md-left">
                    Smart metering redefined
                  </v-list-item-title>
                  <v-list-item-subtitle class="mt-10 text-sm-h5 text-md-h4 text-lg-h4 black--text text-sm-center text-md-left">
                    Allows customers to make informed decisions on electricity usage and costs                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="5" lg="4" class="mt-5 d-flex justify-center">
            <v-card class="pa-12">
              <v-card-title class="d-flex justify-center">
                <img
                  src="@/assets/medias/lexis.png"
                  alt="homepage"
                  width="150px"
                  class="ml-2 dark-logo"
                >
              </v-card-title>
              <v-card-text>
                <v-row no-gutters class="mt-5">
                  <!--<v-col cols="12">
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title
                          class="font-weight-black text-h4 black--text"
                        >
                          Fast than ever
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Enter your Email/phone number(required)
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>-->
                  <v-col cols="12" class=" mt-3">
                    <v-text-field
                      v-model="form.username"
                      color="black"
                      class="text-h4 px-3"
                      placeholder="example@email..com"
                      label="Email or Phone Number"
                      append-icon="mdi-check-circle"
                      required
                    />
                  </v-col>
                  <v-col cols="12" class=" mt-3">
                    <v-text-field
                      v-model="form.password"
                      color="black"
                      class="text-h4 px-3"
                      placeholder="*********"
                      type="password"
                      label="Enter Password"
                      append-icon="mdi-check-circle"
                      required
                    />
                  </v-col>
                  <v-col cols="12" class=" mt-5 d-flex justify-center">
                    <v-btn block type="submit" color="primary">
                      Continue
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <p class="font-weight-normal">
                      Forgot Password ? <strong class="font-weight-bold primary--text"><a href="/#/home">Click Here</a></strong>
                    </p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },

      title: 'Market Grid : Login'
    }
  },
  computed: {
    ...mapGetters(['processing'])
  },

  created () {
    // check if user logged in othewise send them packing

    if (this.getAuthStatus) {
      this.$router.replace('/home')
    }
  },
  methods: {
    ...mapActions(['login']),

    formSubmit () {
      this.$store.dispatch('_authenticate', this.form)
    }
  }

}
</script>
