<script>
    export default {
        name: 'Home',
    };
</script>

<template>
    <div>
        <a href="https://github.com/ItaloKaua1" target="_blank"><h1 id="nome">Ítalo Kauã</h1></a>
        <img src="/ik.gif" alt="italo kaua">
        <h1>Bem-vindo ao meu Portifólio!</h1>
    </div>
</template>

<style scoped>
    div {
        background-color: black;
        color: white;
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        width: 100vw;
        left: 0;
        top: 0;
    }
    img{
        width: 15%;
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