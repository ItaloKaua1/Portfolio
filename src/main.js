import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App);

app.use(router);
app.mount('#app');

window.addEventListener('load', function() {
    // Pegue o elemento link do favicon
    const favicon = document.getElementById('favicon');
    
    // Defina um novo ícone de acordo com a lógica desejada
    // Exemplo: Mudar para outro ícone quando a página carrega
    favicon.href = "/novo-icone.png"; // Altere o caminho para o novo ícone
});