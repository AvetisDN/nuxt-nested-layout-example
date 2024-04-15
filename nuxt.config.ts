// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: "300..900",
    },
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "catalog",
        path: "/catalog/:slug/:page?",
        file: "/pages/catalog/[slug].vue",
      });
      pages.push({
        name: "catalogFiltered",
        path: "/catalog/:slug/filter/:filter/:page?",
        file: "/pages/catalog/[slug].vue",
      });
    },
  },
});
