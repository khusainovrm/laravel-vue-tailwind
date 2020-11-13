<template>
  <div class="bg-green-200 h-screen">
    <h1>Module Admin - layout main</h1>
    <div class="my-10">
      <router-link
        to="/module"
        class="yellowButton"
        >To module page</router-link
      >
      <router-link to="/timetable" class="yellowButton">To timetable page</router-link>
      <router-link to="/chat" class="yellowButton">Chat</router-link>
      <router-link to="/admin" class="greenButton">Admin - empty layout</router-link>
      <a href="/" class="greenButton">To main</a>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {}
</script>
