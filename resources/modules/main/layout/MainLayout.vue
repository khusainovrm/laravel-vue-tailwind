<template>
  <div class="bg-blue-200 h-screen">
    <div class="p-4 text-2xl font-semibold">Main layout</div>
    <div class="my-10">
      <router-link to="/" class="yellowButton">To home page</router-link>
      <router-link to="/timetable" class="yellowButton"
        >To timetable page</router-link
      >
      <router-link to="/chat" class="yellowButton">Chat</router-link>
      <router-link to="/admin" class="greenButton"
        >Admin - Empty layout</router-link
      >
    </div>
    <div class="wrapper">
      <div class="container p-4">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
