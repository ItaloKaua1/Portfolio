<script>
    export default {
        name: 'Home',
    };
</script>

<template>
    <div id="container-home">
        <img src="/ik.gif" alt="italo kaua">
        <h1 id="titulo-home">Bem-vindo ao meu Portifólio!</h1>
    </div>
</template>

<style scoped>
    #container-home {
        background-color: black;
        color: white;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 100%;
        left: 0;
        top: 0;
        font-family: 'Courier New', Courier, monospace;
        flex: 1;
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
        text-decoration: underline;
    }
    a{
        cursor: pointer;
        color: #F13257;
    }

    #titulo-home{
        margin-bottom: 5%;
        color: #F13257;
    }
</style>