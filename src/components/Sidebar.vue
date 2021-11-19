<template>
<div class="nav-menu">
    <router-link :to="{ path: '/', hash: '#projects' }" class="nav-item">Projects</router-link>
    <router-link to="/fun" class="nav-item">Fun</router-link>
    <router-link to="/about" class="nav-item">About Me</router-link>
</div>
<div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>
</template>
<script>
export default {
    name: 'Sidebar',
    mounted() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLink = document.querySelectorAll(".nav-item");

        hamburger.addEventListener("click", mobileMenu);
        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }
}
</script>
<style lang="scss">
.nav-menu {
    position: fixed;
    right: -100%;
    top: 0rem;
    background-color: var(--seashell);
    width: 100%;
    text-align: right;
    transition-duration: 0.3s;
    transition-timing-function: var(--animation-curve);
    margin: 0;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 5rem);
    grid-column: 1 / -1;
    padding-top: 7.5rem;
}

.nav-menu.active {
    right: 0;
}
.nav-item {
    text-decoration: none;
    @include h1;
    grid-column: 1 / -2;
    height: 50%;
    color: var(--eggplant);
}

.hamburger {
    display: block;
    cursor: pointer;
}

.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}
.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s var(--animation-curve);
    background-color: var(--pastel-pink);
}


@include breakpoint(md) {
    .hamburger {
        display: none;
    }
    .nav-menu {
        display: none;
    }
}
</style>