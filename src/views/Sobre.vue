<template>
    <div id="container-sobre">
        <div id="grid">
            <div class="section" id="formacao">
                <h2>Formação:</h2>
                <p>Sou formado como Técnico em Edificações pela Escola Estadual de Educação Profissional <b>Professor
                    Antônio Valmir da Silva</b>. Atualmente, estou cursando o sexto semestre de <b>Engenharia de Software</b> 
                    na <b>Universidade Federal do Ceará</b>.
                </p>
            </div>
            <div class="section" id="certificados">
                <h2>Certificados:</h2>
                <ul>
                    <li>
                        <b>Certificado AWS Academy </b><span @click="toggleCertificado(1)" class="seta">⬇️</span>
                        <div v-if="ceritificadoVisibility[1]">
                            <img src="/aws-ik.jpg" alt="certificado aws" class="certificado-img">
                        </div>
                    </li>
                    <li>
                        <b>Certificado Inglês - Fisk </b><span @click="toggleCertificado(2)" class="seta">⬇️</span>
                        <div v-if="ceritificadoVisibility[2]">
                            <img src="/fisk-certificado.jpeg" alt="certificado ingles" class="certificado-img">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="section" id="skills">
                <h2>Soft Skills:</h2>
                <p><b>Comunicação</b></p>
                <p><b>Trabalho em equipe</b></p>
                <p><b>Inglês intermediário</b></p>
            </div>
            <div class="section" id="especializada">
                <h2>Área Especializada:</h2>
                <p><b>Desenvolvimento Front-End utiliazando Vue.js</b></p>
                <p><b>Desenvolvimento Front-End utilizando React</b></p>
                <p><b>Teste unitários utilizando JEST</b></p>
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
                2: false,
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

    #certificados, #formacao{
        margin-top: -5%;
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
        color: #F13257;
    }

    #grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
        width: 80%;
        height: 70%;
    }

    .section {
        background-color: #171616;
        color: #F13257;
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

    @media (max-width: 768px){
        #container-sobre {
            display: flex;
            position: relative;
            text-align: center;
        }

        #grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 10px;
            width: 90%;
            height: auto;
        }

        .section {
            width: 90%;
            margin: 0 auto 10px auto;
            padding: 20px;
        }

        #formacao {
            margin-top: 90%;
            margin-bottom: 20px;
        }

        .seta {
            cursor: pointer;
            margin-right: 10px;
        }

        .certificado-img {
            margin-top: 10px;
            width: 100%;
            max-width: 300px;
            max-height: 400px;
            border-radius: 10px;
        }

        .section div {
            transition: max-height 0.3s ease-in-out;
            overflow: hidden;
        }
    }

    @media (max-width: 375px) {
        #formacao{
            margin-top: 115%;
        }
    }

    /* reponsividade telas menores */
    @media (max-width: 360px){
        #formacao {
            margin-top: 175%;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 320px){
        #grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 10px;
            width: 85%;
            height: auto;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #formacao{
            margin-top: 260%;
        }
        .section{
            margin-left: -6px;
        }
    }
</style>
