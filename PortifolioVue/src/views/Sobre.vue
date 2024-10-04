<template>
    <div id="container-sobre">
        <a href="https://github.com/ItaloKaua1" target="_blank">
            <h1 id="nome">Ítalo Kauã</h1>
        </a>
        <Navbar />
        <div id="grid">
            <div class="section" id="formacao">
                <h2>Formação:</h2>
                <p>Sou formado em técnico em edificações pela escola profissionalizante EEEP Professor Antônio Valmir da Silva</p>
                <p>Estou indo pro sexto semestre de Engenharia de Software pela Universidade Federal do Ceará</p>
            </div>
            <div class="section" id="certificados">
                <h2>Certificados:</h2>
                <li>
                    <span @click="toggleCertificado(1)" class="seta">⬇️</span>Certificado AWS Academy
                    <div v-if="ceritificadoVisibility[1]">
                        <img src="/aws-ik.jpg" alt="certificado aws" class="certificado-img">
                    </div>
                </li>
            </div>
            <div class="section" id="skills">
                <h2>Soft Skills:</h2>
                <p>Comunicação</p>
                <p>Trabalho em equipe</p>
                <p>Inglês intermediário</p>
            </div>
            <div class="section" id="especializada">
                <h2>Área Especializada:</h2>
                <p>Desenvolvimento Front-End utiliazando Vue.js</p>
                <p>Desenvolvimento Front-End utilizando React</p>
                <p>Teste unitários utilizando JEST</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Sobre',
    data() {
        return {
            ceritificadoVisibility: {
                1: false,
            }
        };
    },
    methods: {
        toggleCertificado(id) {
            this.ceritificadoVisibility[id] = !this.ceritificadoVisibility[id];
        }
    }
};
</script>

<style scoped>
    #container-sobre {
        background-color: black;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        position: relative;
        font-family: 'Courier New', Courier, monospace;
    }

    #nome {
        position: absolute;
        top: 20px;
        left: 20px;
        margin: 0;
        text-decoration: underline
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: white;
    }

    #grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 colunas */
        grid-template-rows: repeat(2, 1fr); /* 2 linhas */
        gap: 20px;
        width: 80%;
        height: 70%;
    }

    .section {
        background-color: #F1F1F1;
        color: black;
        padding: 20px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
        text-decoration: none;
    }

    .seta {
        cursor: pointer;
        margin-right: 10px;
    }

    .certificado-img {
        margin-top: 10px;
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
    }

    h2 {
        margin-bottom: 10px;
    }
</style>
