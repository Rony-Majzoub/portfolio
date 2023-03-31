import { createApp } from "vue";
import anime from "animejs/lib/anime.es.js";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import RouterPrefetch from "vue-router-prefetch";
// import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
const app = createApp(App);

app.directive("anime", {
  beforeMount(targets, binding, vnode) {
    var opts = Object.assign({}, binding.value, { targets: targets });
    anime(opts);
  },
  updated(targets, binding) {
    var opts = Object.assign({}, binding.value, { targets: targets });
    anime(opts);
  },
});

Object.defineProperties(app.config.globalProperties, {
  $anime: {
    get() {
      return anime;
    },
  },
});

app.use(router);
app.use(RouterPrefetch);
// app.use(autoAnimatePlugin);

app.mount("#app");
