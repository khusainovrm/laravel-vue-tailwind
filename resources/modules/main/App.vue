<template>
  <transition name="fade" mode="out-in">
    <component :is="layout">
      <router-view :key="$route.path" />
    </component>
  </transition>
</template>

<script>
import EmptyLayout from './layout/EmptyLayout'
import MainLayout from './layout/MainLayout'

export default {
  name: 'App',
  mounted() {
    console.log('Main module is loaded')
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
