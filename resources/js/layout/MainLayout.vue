<template>
  <div>
    <h1>MainLayout</h1>
    <router-link to="/">To home page</router-link>
    <router-link to="/timetable">To timetable page</router-link>
    <router-link to="/chat">Chat</router-link>
    <div><router-link to="/admin">Admin - empty layout</router-link></div>

    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
