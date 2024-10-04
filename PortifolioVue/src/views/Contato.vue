<template>
    <div class="container-principal">
        <a href="https://github.com/ItaloKaua1" target="_blank"><h1 id="nome">Ítalo Kauã</h1></a>
        
        <!-- Container de contatos -->
        <div class="container-contato">
            <img src="/github-logo1.jpg" alt="github logo" class="logo-contato">
            <h1>/ItaloKaua1</h1>
        </div>
        
        <div class="container-contato" id="gmail">
            <img src="/Gmail-logo.png" alt="gmail logo" class="logo-contato">
            <h1>italo.kaua.11@gmail.com</h1>
        </div>
        
        <div class="container-contato">
            <img src="/LinkedIn-logo.png" alt="linkedin logo" class="logo-contato">
            <h1>/italokaua1</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contato',
};
</script>

<style scoped>
/* Centralizando toda a página */
.container-principal {
    background-color: black;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100vw;
}

#nome {
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: white;
}

/* Estilo para cada bloco de contato */
.container-contato {
    display: flex;
    align-items: center; /* Alinha logo e texto no mesmo eixo horizontal */
    margin-bottom: 30px; /* Espaçamento entre os contatos */
}

.logo-contato {
    width: 50px; /* Ajuste o tamanho das logos */
    height: auto;
    margin-right: 15px; /* Espaçamento entre a logo e o h1 */
}


h1 {
    font-size: 1.5em;
    margin: 0; /* Remove a margem padrão */
}
</style>
