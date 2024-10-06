import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Sobre from '@/views/Sobre.vue';
import Trabalhos from '@/views/Trabalhos.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sobre', name: 'Sobre', component: Sobre },
    { path: '/trabalhos', name: 'Trabalhos', component: Trabalhos },
];

const router = createRouter({
    history: createWebHistory('/Portifolio/'),
    routes,
});

export default router;
