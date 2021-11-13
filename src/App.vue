<template>
  <header class="navigation">
    <router-link to="/">
    <img src="@/assets/logo.svg" alt="">
    </router-link>
    <div class="navigation-items">
      <router-link to="/">Projects</router-link>
      <router-link to="/fun">Fun</router-link>
      <router-link to="/about">About Me</router-link>
    </div>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="fade-in-up" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
  <footer class="page-footer">
    <div>
      <a href="mailto:">majzoubrony@gmail.com</a>
      <a href="tel:+">46722960295</a>
      <a href="" class="social-media">LinkedIn</a>
      <a href="" class="social-media">Instagram</a>
    </div>
    <p>Copyright 2021 Rony Majzoub</p>
  </footer>
</template>

<style lang="scss">
@import "@material/animation";
@import url('https://rsms.me/inter/inter.css');
html {
  font-size: 14px;
}
* {
  box-sizing: border-box;
  font-family: var(--font-primary);
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
  padding-bottom: 5rem;
  padding-top: 10rem;
}

@include breakpoint(sm) {
  html {
    font-size: 14px;
  }
  #app {
    grid-template-columns: repeat(12, 1fr);
  }
}
.page-footer {
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      font-weight: 400;
      text-decoration: none;
      color: var(--melon);
    }
    .social-media {
      font-weight: 500;
    }
  }
  p {
    @include overline;
    font-size: var(--text-xs);
    color: var(--cameo-pink);
    padding-bottom: 1rem;
  }
}
@include breakpoint(sm) {
  .page-footer {
    flex-direction: row;
    div {
      flex-direction: row;
    }
  }
}
h1 {
  @include h1;
}
h2 {
  @include h2;
}
h3 {
  @include h3;
}
h4 {
  @include h4;
}
h5 {
  @include h5;
}
h6 {
  @include h6;
}


a {
  color: var(--unbleached-silk);
}

.navigation {
  background-color: var(--black-coffee);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 5rem;
  grid-column: 1 / -1;
  max-width: 100vw;
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
  // text-decoration: underline !important;
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
  animation-timing-function: var(--animation-curve);
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
</style>
