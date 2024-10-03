<script setup>
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar /> 
  <section id="home" class="section">Home</section>
  <section id="sobre" class="section">Sobre</section>
  <section id="trabalhos" class="section">Trabalhos</section>
  <section id="contato" class="section">Contato</section>
</template>

<style scoped>
  .section{
    height: 100vh;
  }
</style>
