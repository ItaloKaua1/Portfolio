<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-links">
                <router-link to="/" class="navbar-link" :class="{ 'active': isActive('/') }">Home</router-link>
                <router-link to="/sobre" class="navbar-link"
                    :class="{ 'active': isActive('/sobre') }">Sobre</router-link>
                <router-link to="/trabalhos" class="navbar-link"
                    :class="{ 'active': isActive('/trabalhos') }">Trabalhos</router-link>
            </div>

            <!-- Adicionamos o stopPropagation aqui -->
            <div class="navbar-toggle" @click.stop="toggleMenu" :class="{ 'active': isMenuOpen }">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </div>
        </div>

        <div class="dropdown-menu" v-if="isMenuOpen" ref="dropdown">
            <a href="https://www.linkedin.com/in/italokaua1/" target="_blank">
                <img src="/LinkedIn-logo.png" alt="linkedin logo" id="logo-contato" />
            </a>
            <a href="https://github.com/ItaloKaua1" target="_blank">
                <img src="/gh-logo-dark.png" alt="github logo" id="logo-contato" />
            </a>
            <a href="mailto:contato.italo.kaua.11@gmail.com" target="_blank">
                <img src="/Gmail-logo.png" alt="gmail logo" id="logo-contato" />
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        isActive(page) {
            return this.$route.path === page;
        },
        handleOutsideClick(event) {
            const dropdown = this.$refs.dropdown;
            if (dropdown && !dropdown.contains(event.target)) {
                this.isMenuOpen = false;
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleOutsideClick);
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
        font-family: 'Courier New', Courier, monospace;
        font-size: x-large;
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
        transition: color 0.3s ease;
    }

    .navbar-toggle:hover .icon {
        color: #f13257;
    }

    .navbar-toggle.active .icon {
        color: #f13257;
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

    #logo-contato:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 10px #f13257;
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

    /* Mudanças Moblie responsivo */
    @media (max-width: 768px) {
        .navbar{
            width: 100%;
            justify-content: baseline;
            padding: 16px;
            font-size: larger;
            position: fixed;
            border-bottom: #f13257 solid 2px;
        }

        .navbar-container{
            display: flex;
            position: relative;
            box-sizing: border-box;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .navbar-links {
            display: flex;
            flex-direction: row;
            position: relative;
            left: 0;
            width: 75%;
            padding: 16px;
            z-index: 1002;
            margin-left: -25px;
        }

        .navbar-links.active {
            display: flex;
        }

        .navbar-toggle {
            display: block;
        }

        .navbar-toggle {
            display: flex;
            position: relative;
            left: 10px;
            top: 0;
        }
        .dropdown-menu{
            position: absolute;
            margin-left: 2px; 
            right: 0px;
        }
        .navbar-toggle.active .icon {
            color: #f13257;
        }
        .navbar-toggle .icon {
            color: white;
        }
    }

</style>