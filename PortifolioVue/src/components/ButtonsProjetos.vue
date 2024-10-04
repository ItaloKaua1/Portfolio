<template>
    <button
        @click="irParaLink"
        :style="{backgroundColor: cor}"
        class="button-projeto"
    >
        Visualizar Repositório
    </button>
</template>

<script>
    export default{
        props:{
            link: {
                type: String,
                required: true
            },
            cor: {
                type: String,
                default: '#000'
            }
        },
        methods: {
            irParaLink() {
                window.open(this.link, '_blank')
            }
        }
    }
</script>

<style>
    .button-projeto{
        color: black;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
        margin-top: 2%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
    }
    .button-projeto:hover{
        transform: scale(1.05); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .button-projeto{
        opacity: 0.8;
    }
</style>