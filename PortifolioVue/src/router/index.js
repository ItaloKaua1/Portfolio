import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Sobre from '@/views/Sobre.vue';
import Trabalhos from '@/views/Trabalhos.vue';
import Contato from '@/views/Contato.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sobre', name: 'Sobre', component: Sobre },
    { path: '/trabalhos', name: 'Trabalhos', component: Trabalhos },
    { path: '/contato', name: 'Contato', component: Contato },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
