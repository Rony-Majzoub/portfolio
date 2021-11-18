<template>
  <header class="navigation">
    <div class="navigation-row">
      <router-link to="/">
      <img src="@/assets/logo.svg" alt="">
      </router-link>
      <div class="navigation-items">
        <router-link :to="{ path: '/', hash: '#projects' }">Projects</router-link>
        <router-link to="/fun">Fun</router-link>
        <router-link to="/about">About Me</router-link>
      </div>
    </div>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="fade-in-up">
      <component :is="Component" v-cloak/>
    </transition>
  </router-view>
  <footer class="page-footer">
    <div>
      <div>
        <a href="mailto:">majzoubrony@gmail.com</a>
        <a href="tel:+">072 296 02 95</a>
        <a href="" class="social-media">LinkedIn</a>
        <a href="" class="social-media">Instagram</a>
      </div>
      <p>Copyright 2021 Rony Majzoub</p>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@material/animation";
@import url('https://rsms.me/inter/inter.css');
html {
  font-size: 14px;
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
  font-family: var(--font-primary);
}
*::selection {
  color: var(--eggplant);
  background-color: var(--unbleached-silk);
}
body {
  background-color: var(--black-coffee);
  @include reset-mp;
}
#app {
  position: relative;
  display: grid;
  max-width: 100vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  padding-bottom: 10rem;
  padding-top: 10rem;
  grid-template-columns: repeat(12, 1fr);
}
.page-footer {
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  position: absolute;
  height: 3rem;
  background-color: var(--black-coffee);
  bottom: 0px;
  left: 0;
  right: 0;
  margin-bottom: 0px;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    a {
      @include subtitle-1;
      font-weight: 500;
      text-decoration: none;
      color: var(--melon);
    }
    .social-media {
      font-weight: 700;
    }
  }
  p {
    @include overline;
    font-size: var(--text-xs);
    color: var(--cameo-pink);
    padding-bottom: 1rem;
  }
}
h1 {
  @include h1;
  color: var(--unbleached-silk);
}
h2 {
  @include h2;
  color: var(--unbleached-silk);
}
h3 {
  @include h3;
  color: var(--unbleached-silk);
}
h4 {
  @include h4;
  color: var(--unbleached-silk);
}
h5 {
  @include h5;
  color: var(--unbleached-silk);
}
h6 {
  @include h6;
  color: var(--unbleached-silk);
}


a {
  color: var(--unbleached-silk);
}

.navigation {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: 1 / -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 1rem 0;
  background-color: var(--black-coffee);
}

.navigation-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-column: 2 / -2;
  max-width: 100vw;
  align-items: center;
  a {
    @include subtitle-1;
    color: var(--cameo-pink);
    text-decoration: none;
    font-size: var(--text-md);
    font-weight: 500;
    line-height: var(--heading-line-height);
    text-align: right;
    transition: var(--animation-curve) 250ms !important;
    
  }
  img {
    grid-column: 1;
    height: 3rem;
  }
}
.router-link-active {
  text-decoration: underline !important;
  color: var(--unbleached-silk) !important;
  transition: var(--animation-curve) 250ms !important;
}
.navigation-items {
  grid-column: 12;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}
@keyframes fadeOutDown {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    transform: translate3d(0, 0px, 0);
    opacity: 0;
  }
}

.fade-in-up-leave-to {
  opacity: 0;
  animation-duration: .2s;
  animation-timing-function: var(--animation-curve);
  animation-fill-mode: both;
  animation-name: fadeOutDown;
}
.fade-in-up-enter-to {
  opacity: 0;
  animation-duration: .5s;
  animation-delay: .2s;
  animation-timing-function: var(--animation-curve);
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
@include breakpoint(sm) {
  .page-footer {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 2 / -2;
    padding: 1rem 0;
    height: initial;
    div {
      grid-column: 1 / -1;
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
    }
  }
  html {
    font-size: 14px;
  }
}
[v-cloak] { display:none !important; }
</style>
