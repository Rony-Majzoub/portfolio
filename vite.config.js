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
      dirs: [{ dir: "src/pages", baseRoute: "" }],
      onRoutesGenerated: (routes) =>
        generateSitemap({
          hostname: "https://rony-majzoub.netlify.app/",
          routes,
          readable: true,
        }),
      importMode(filepath, options) {
        // default resolver
        // for (const page of options.dirs) {
        //   if (page.baseRoute === '' && filepath.startsWith(`/${page.dir}/index`))
        //     return 'sync'
        // }
        // return 'async'

        // Load main pages synchronously, all other pages are async.
        return filepath.includes("index", "about", "fun") ? "sync" : "async";
      },
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
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          "main-chunk": [
            "./src/pages/index.vue",
            "./src/pages/Fun.vue",
            "./src/pages/About.vue",
          ],
        },
      },
    },
  },
});
