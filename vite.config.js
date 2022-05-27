import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

const path = require("path");
export default defineConfig({
  //...
  plugins: [
    Vue(),
    Pages({
      dirs: [
        { dir: "src/pages", baseRoute: "" },
        { dir: "src/features/**/pages", baseRoute: "features" },
        { dir: "src/admin/pages", baseRoute: "admin" },
      ],
      onRoutesGenerated: (routes) =>
        generateSitemap({
          hostname: "https://rony-majzoub.netlify.app/#/",
          routes,
          readable: true,
        }),
    }),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons(),
  ],
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
