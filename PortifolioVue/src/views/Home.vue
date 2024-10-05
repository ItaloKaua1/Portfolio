<script>
    export default {
        name: 'Home',
    };
</script>

<template>
    <div id="container-home">
        <a href="https://github.com/ItaloKaua1" target="_blank"><h1 id="nome">Ítalo Kauã</h1></a>
        <img src="/ik.gif" alt="italo kaua">
        <h1 id="titulo-home">Bem-vindo ao meu Portifólio!</h1>
        <div class="contatos-container">
            <a href="mailto:contato.italo.kaua.11@gmail.com" target="_blank"><img src="/gmail.svg" alt="gmail contato" class="contato-img" id="g-img"></a>
            <a href="https://www.linkedin.com/in/italokaua1/" target="_blank"><img src="/linkedin.svg" alt="linkedin contato" class="contato-img"></a>
        </div>
    </div>
</template>

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
        width: 100vw;
        left: 0;
        top: 0;
        font-family: 'Courier New', Courier, monospace;
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

    .contatos-container{
        display: flex;
        flex-direction: row;
        width: 32%;
        height: auto;
        justify-content: center;
        align-items: center;
        gap: 10px; 
    }

    .contato-img{
        width: 100%;
        margin-left: 10px;
        cursor: pointer;
    }
</style>