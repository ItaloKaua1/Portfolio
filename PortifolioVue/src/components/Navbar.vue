<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-links">
                <router-link to="/" class="navbar-link" :class="{ 'active': isActive('home') }"
                    @click="selectPage('home')">Home</router-link>
                <router-link to="/sobre" class="navbar-link" :class="{ 'active': isActive('sobre') }"
                    @click="selectPage('sobre')">Sobre</router-link>
                <router-link to="/trabalhos" class="navbar-link" :class="{ 'active': isActive('trabalhos') }"
                    @click="selectPage('trabalhos')">Trabalhos</router-link>
            </div>

            <div class="navbar-toggle" @click="toggleMenu">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </div>
        </div>

        <div class="dropdown-menu" v-if="isMenuOpen">
            <a href="https://www.linkedin.com/in/italokaua1/" target="_blank"><img src="/LinkedIn-logo.png" alt="linkedin logo" id="logo-contato"></a>
            <a href="https://github.com/ItaloKaua1" target="_blank"><img src="/gh-logo-dark.png" alt="linkedin logo" id="logo-contato"></a>
            <a href="mailto:contato.italo.kaua.11@gmail.com" target="_blank"><img src="/Gmail-logo.png" alt="linkedin logo" id="logo-contato"></a>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
            isMenuOpen: false,
            activePage: 'home',
            };
        },
        methods: {
            toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            },
            selectPage(page) {
            this.activePage = page;
            this.isMenuOpen = false;
            },
            isActive(page) {
            return this.activePage === page;
            },
        },
    };
</script>

<style scoped>
    .navbar {
        background-color: black;
        padding: 16px;
        position: relative;
        z-index: 1002;
        background-color: #171616;
        width: 100%;
        box-sizing: border-box;
    }

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box; 
    }

    .navbar-links {
        display: flex;
        gap: 20px;
    }

    .navbar-link {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .navbar-link:hover {
        color: #f13257;
    }

    .active {
        color: #f13257;
    }

    .navbar-toggle {
        cursor: pointer;
    }

    .icon {
        width: 24px;
        height: 24px;
        color: white;
    }

    .dropdown-menu {
        position: absolute;
        top: 61px;
        right: 16px;
        background-color: #171616;
        padding-inline: 10px;
        padding-top: 10px;
        border-radius: 4px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        z-index: 1000;
        max-width: calc(100% - 32px);
    }

    #logo-contato {
        width: 45px;
        margin-bottom: 10px;
        align-self: flex-end;
    }


    .dropdown-link {
        color: white;
        padding: 8px 0;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .dropdown-link:hover {
        color: #f13257;
    }

    @media (max-width: 768px) {
        .navbar-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 64px;
        left: 0;
        width: 100%;
        background-color: black;
        padding: 16px;
        }

        .navbar-links.active {
        display: flex;
        }

        .navbar-toggle {
        display: block;
        }
    }
</style>  