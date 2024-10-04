<template>
    <div>
        <a href="https://github.com/ItaloKaua1" target="_blank"><h1 id="nome">Ítalo Kauã</h1></a>
        <Navbar />
        <section>
            <div id="div1">

            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

    export default {
    name: 'Trabalhos',
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
    #nome {
        position: absolute;
        top: 20px;
        left: 20px;
        margin: 0;
        top: 3.5%;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        color: white;
    }
</style>