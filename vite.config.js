import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const path = require("path");
export default defineConfig({
  //...
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "./src/styles/_variables";`,
      },
    },
  },
});
