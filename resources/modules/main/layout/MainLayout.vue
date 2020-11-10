<template>
  <div class="bg-blue-200 h-screen">
     <h1>Main Module- layout main</h1>
    <div class="my-10">
      <router-link
        to="/"
        class="yellowButton"
        >To home page</router-link
      >
      <router-link to="/timetable" class="yellowButton">To timetable page</router-link>
      <router-link to="/chat" class="yellowButton">Chat</router-link>
      <router-link to="/admin" class="greenButton">Admin - empty layout</router-link>
      <a href="/module" class="greenButton">To Module Admin</a>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {}
</script>
