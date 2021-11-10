<template>
  <header class="navigation">
    <img src="@/assets/logo.svg" alt="">
    <div class="navigation-items">
      <router-link to="/">Projects</router-link>
      <router-link to="/fun">Fun</router-link>
      <router-link to="/about">About Me</router-link>
    </div>
  </header>
  <transition name="fade-in-up">
    <router-view/>
  </transition>
  <footer>
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
@import url('https://rsms.me/inter/inter.css');
html {
  font-size: 14px;
}
* {
  box-sizing: border-box;
}
body {
  background-color: var(--black-coffee);
  @include reset-mp;
}
#app {
  position: relative;
  display: grid;
  max-width: 100vw;
  font-family: var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--melon);
  min-height: 100vh;
  padding-bottom: 7.5rem;
  padding-top: 10rem;
}
@include breakpoint(sm) {
  html {
    font-size: 14px;
  }
  #app {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
  }
}
footer {
  width: 100%;
  display: flex;
  flex-direction: row;
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
    flex-direction: row;
    gap: 1rem;
    a {
      @include h6;
      font-weight: 400;
      text-decoration: none;
      color: var(--melon);
    }
    .social-media {
      font-weight: 700;
    }
  }
  p {
    @include overline;
    color: var(--cameo-pink);
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
    color: var(--melon);
    text-decoration: none;
    font-size: var(--text-sm);
    font-weight: 500;
    line-height: var(--heading-line-height);
    text-align: right;
    letter-spacing: 0.1px;
    
  }
  img {
    grid-column: 1;
    height: 3rem;
  }
}
.router-link-active {
  text-decoration: underline;
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

.fade-in-up-leave-to {
  opacity: 0;
  transition: opacity .1s;
}

.fade-in-up-enter {
  opacity: 0;
  transform: translate3d(0, 40px, 0);
}

.fade-in-up-enter-to {
  opacity: 0;
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
</style>
