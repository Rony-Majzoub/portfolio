import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Pages from "vite-plugin-pages";
// import generateSitemap from "vite-plugin-pages-sitemap";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { visualizer } from "rollup-plugin-visualizer";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

const config = defineConfig({
  server: {
    port: 3000,
  },
  //...
  plugins: [
    Vue(),
    Pages({
      dirs: [
        { dir: resolve(__dirname, "./src/pages"), baseRoute: "" },
        { dir: resolve(__dirname, ".src/pages/[...all].vue"), baseRoute: "/*" },
      ],
      // onRoutesGenerated: (routes) =>
      //   generateSitemap({
      //     hostname: "https://rony-majzoub.netlify.app/",
      //     routes,
      //     readable: true,
      //     exclude: [
      //       "/[...all],",
      //       "/contact",
      //       "/connected",
      //       "/buratinoweb",
      //       "/buratino19",
      //       "/buratino21",
      //       "/fun/buratino",
      //       "/recypie",
      //       "/fun/donutnightrender",
      //       "/fun/ntiawards",
      //     ],
      //   }),
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
    visualizer({
      template: "treemap", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analice.html",
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // example : additionalData: `@import "./src/design/styles/variables";`
  //       // dont need include file extend .scss
  //       additionalData: `@import "./src/styles/_variables";`,
  //     },
  //   },
  // },
  // build: {
  //   rollupOptions: {
  //     // https://rollupjs.org/guide/en/#outputmanualchunks
  //     output: {
  //       manualChunks: {
  //         "main-chunk": [
  //           "./src/pages/index.vue",
  //           "./src/pages/Fun.vue",
  //           "./src/pages/About.vue",
  //         ],
  //       },
  //     },
  //   },
  // },
});

export default config;
