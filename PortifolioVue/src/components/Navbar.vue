<template>
    <nav class="navbar">
        <ul class="navbar-items">
            <li v-for="(item, index) in menuItems" :key="index" :class="{active: current === item.name}">
                <a @click.prevent="scrollToSection(item.id)" href="#">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
            current: 'Home',
            menuItems: [
                { name: 'Home', id: 'home' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Trabalhos', id: 'trabalhos' },
                { name: 'Contato', id: 'contato' },
            ],
            };
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll);
        },
        methods: {
            scrollToSection(sectionId) {
            this.current = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); 
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                });
            }
            },
            onScroll() {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;
            const scrollThreshold = window.innerHeight / 3;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop - scrollThreshold && scrollPosition < sectionTop + sectionHeight - scrollThreshold) {
                this.current = section.getAttribute('id').charAt(0).toUpperCase() + section.getAttribute('id').slice(1);
                }
            });
            },
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
    }
    .navbar-items li.active a {
        border-bottom: 2px solid white;
    }
</style>