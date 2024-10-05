<script setup>
  import Navbar from "./components/Navbar.vue";
</script>

<template>
    <Navbar />
    <div id="app">
      <router-view />
    </div>
</template> 

<style>
  html, body, #app {
    height: 100%;
    margin: 0;
  }

  body {  
    background-color: black;
    color: white;
  }
  #app{
    max-width: 100%;
  }
</style>