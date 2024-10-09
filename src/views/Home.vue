<template>
    <div id="container-home">
        <img src="/ik.gif" alt="italo kaua">
        <h1 id="titulo-home">Bem-vindo ao meu Portfólio!</h1>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>

<style scoped>
    #container-home {
        background-color: black;
        color: white;
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 100%;
        font-family: 'Courier New', Courier, monospace;
    }

    img {
        width: 15%;
        height: auto;
    }

    #titulo-home {
        color: #F13257;
        text-align: center;
    }

    @media (max-width: 768px) {
        img {
            width: 40%;
        }

        #titulo-home {
            padding: 20px;
        }
    }
</style>
