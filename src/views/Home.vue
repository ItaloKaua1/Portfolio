<script>
    export default {
        name: 'Home',
    };
</script>

<template>
    <div id="container-home">
        <img src="/ik.gif" alt="italo kaua">
        <h1 id="titulo-home">Bem-vindo ao meu Portfólio!</h1>
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
    #titulo-home{
        color: #F13257;
    }

    @media (max-width: 768px){
        #container-home{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 100%;
        }
        img{
            width: 45%;
        }
        #titulo-home{
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 20px;
            text-align: center;
        }
    }
</style>