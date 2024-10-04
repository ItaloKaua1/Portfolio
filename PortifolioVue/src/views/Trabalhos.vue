<template>
    <div>
        <a href="https://github.com/ItaloKaua1" target="_blank"><h1 id="nome">Ítalo Kauã</h1></a>
        <Navbar />
        <section>
            <div id="div1" class="container-trabalho">
                <h1 id="titulo">Delivey Site</h1>
                <img src="/JS-logo.png" alt="Java script logo" id="logo">
                <p>Esse é um projeto de um site de delivery de marmitas.</p>
                <ButtonsProjetos 
                    link="https://github.com/ItaloKaua1/DeliverySite"
                    cor="yellow"
                />
            </div>
            <div id="div2" class="container-trabalho">
                
            </div>
            <div id="div3" class="container-trabalho">
                
            </div>
            <div id="div4" class="container-trabalho">
                
            </div>
            <div id="div5" class="container-trabalho">
                
            </div>
            <div id="div6" class="container-trabalho">
                
            </div>
        </section>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import ButtonsProjetos from '@/components/ButtonsProjetos.vue';

    export default {
    name: 'Trabalhos',
    components: {
        Navbar,
        ButtonsProjetos
    }
    };
</script>

<style scoped>
    div {
        background-color: black;
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
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
        height: 75vh;
        width: 90vw;
        justify-items: center;
        align-items: center;
    }

    .container-trabalho {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #F1F1F1;
        color: black;
        position: relative; 
        width: 100%;
        height: 100%;
    }

    #logo {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 40px;
        height: auto;
    }

</style>