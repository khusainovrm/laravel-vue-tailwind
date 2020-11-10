<template>
  <component :is="layout">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </component>
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
