<template>
    <div id="container-trabalho">
        <section>
            <div id="div1" class="container-trabalho">
                <h1 id="titulo">Delivey Site</h1>
                <img src="/JS-logo.png" alt="Java script logo" id="logo">
                <p>Esse é um projeto de um site de delivery de marmitas.</p>
                <ButtonsProjetos 
                    link="https://github.com/ItaloKaua1/DeliverySite"
                    cor="#F7DF1E"
                />
            </div>

            <div id="div2" class="container-trabalho">
                <h1>Fine'sUp</h1>
                <img src="/Ts-logo.png"  alt="Typescript logo" id="logo">
                <p>Esse é um projeto de controle de finanças.</p>
                <ButtonsProjetos 
                    link="https://github.com/JoseEdSouza/finesup"
                    cor="#3178C6"
                />
            </div>

            <div id="div3" class="container-trabalho">
                <h1>Web</h1>
                <img src="/JS-logo.png" alt="java script logo" id="logo">
                <p>Esse é o repositório da minha disciplina de web.</p>
                <ButtonsProjetos 
                    link="https://github.com/ItaloKaua1/WEB2024"
                    cor="#F7DF1E"
                />
            </div>

            <div id="div4" class="container-trabalho">
                <h1>Films</h1>
                <img src="/JS-logo.png" alt="java script logo" id="logo">
                <p>Esse é um projeto que usei pra aprender o básico de react e js.</p>
                <ButtonsProjetos 
                    link="https://github.com/ItaloKaua1/Films-"
                    cor="#F7DF1E"
                />
            </div>

            <div id="div5" class="container-trabalho">
                <h1>Prova 02</h1>
                <img src="/JS-logo.png" alt="java script logo" id="logo">
                <p id="txt">Esse é o repositório da minha prova 02 da cadeira de web.</p>
                <ButtonsProjetos 
                    link="https://github.com/ItaloKaua1/Prova02"
                    cor="#F7DF1E"
                />
            </div>

            <div id="div6" class="container-trabalho">
                <h1>Portifólio</h1>
                <img src="/Vue-logo.png" alt="vue logo" id="logo">
                <p>Esse é o repositório desse site!</p>
                <ButtonsProjetos 
                    link="https://github.com/ItaloKaua1/Portifolio"
                    cor="#41B883"
                />
            </div>
        </section>
    </div>
</template>

<script>
    import ButtonsProjetos from '@/components/ButtonsProjetos.vue';

    export default {
    name: 'Trabalhos',
    components: {
        ButtonsProjetos,
    }
    };
</script>

<style scoped>
    #container-trabalho {
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
    a{
        text-decoration: none;
        cursor: pointer;
        color: #F13257;
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
        background-color: #171616;
        color: #F13257;
        position: relative; 
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        border-radius: 10px;
        text-align: center; 
    }

    .container-trabalho:hover {
        transform: scale(1.05); 
        box-shadow: 0 8px 16px #f13257;
    }

    #logo {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 40px;
        height: auto;
    }

</style>