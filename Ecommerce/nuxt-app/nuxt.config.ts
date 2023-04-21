// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ["@nuxtjs/strapi", "@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  strapi: {
    url: "http://localhost:1337",
  },
  tailwindcss: {
    // Options
  },
  image: {
    // Options
  },
  router: {
    extendRoutes(routes: any, resolve: any) {
      routes.push({
        name: "home",
        path: '/:sex/home',
        component: resolve(__dirname, "pages/home.vue"),
        chunkName: "pages/home",
      });
    },
  },
};
