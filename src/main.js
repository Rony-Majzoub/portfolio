import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
// import Vue3Lottie from 'vue3-lottie'
import router from "./router";

// import 'vue3-lottie/dist/style.css'

const app = createApp(App);

app.use(router);
// app.use(Vue3Lottie);

app.mount("#app");
