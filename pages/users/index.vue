<template>
  <h1>Users</h1>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.fetchData()
    // this.$store.dispatch('_fetchusers')
  },
  methods: {
    async fetchData () {
      const ip = await this.$axios.$get('/api/users')
      return { ip }
    }
  }
}
</script>
