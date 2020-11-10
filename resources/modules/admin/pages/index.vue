<template>
  <div>
    <h1>Home page MODULE Admin</h1>

    <span>Hello from VUEX:</span>
    <div>{{ user }}</div>
    <div>{{ media }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('user/fetch_user')
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
    media() {
      return this.$store.getters['media/getMedia']
    },
  },
}
</script>
