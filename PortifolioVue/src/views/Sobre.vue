<template>
    <div>
        <h1>Sobre</h1>
        <p>Entre em contato conosco!</p>
        <Navbar />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

    export default {
    name: 'Sobre',
    };
</script>

<style scoped>
    div {
        background-color: black;
        color: white;
        height: 100vh;
        margin: 0;
        padding: 0;
        display: block;
        position: absolute;
        width: 100vw;
        left: 0;
        top: 0;
    }
</style>