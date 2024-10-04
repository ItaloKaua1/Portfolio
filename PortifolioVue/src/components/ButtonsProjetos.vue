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
    }
    .button-projeto{
        opacity: 0.8;
    }
</style>