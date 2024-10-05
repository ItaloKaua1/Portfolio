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
        color: whit;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
        margin-top: 2%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        font-weight: bold;
    }
    .button-projeto:hover{
        transform: scale(1.05); 
        box-shadow: 0 8px 16px #f13257;
    }
    .button-projeto{
        opacity: 0.8;
    }
</style>