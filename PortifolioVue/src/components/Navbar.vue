<template>
    <nav class="navbar">
        <ul class="navbar-items">
            <li v-for="(item, index) in menuItems" :key="index" :class="{ active: current === item.name }">
                <router-link @click="setActive(item.name)" :to="item.route">{{ item.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
            current: 'Home',
            menuItems: [
                { name: 'Home', route: '/' },
                { name: 'Sobre', route: '/sobre' },
                { name: 'Trabalhos', route: '/trabalhos' },
                { name: 'Contato', route: '/contato' },
            ],
        });

        const setActive = (item) => {
            state.current = item;
        };

        return { ...state, setActive };
    },
};
</script>

<style scoped>
.navbar {
    position: fixed;
    display: flex;
    top: 5%;
    right: 0;
    width: 25%;
    height: 50px;
    justify-content: flex-end;
    padding-right: 20px;
    z-index: 1000;
    margin: 0;
}

.navbar-items {
    position: fixed;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}

.navbar-items li {
    margin-right: 20px;
    list-style-type: none;
}

.navbar-items li a {
    color: white;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    border: none;
    /* Remove qualquer borda aplicada */
}

.navbar-items li.active a {
    border-bottom: 2px solid white;
}
</style>