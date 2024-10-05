<script setup>
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div id="app">
    <transition name="slide-fade">
      <router-view />
    </transition>
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

#app {
  max-width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
