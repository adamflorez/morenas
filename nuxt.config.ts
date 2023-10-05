// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@ant-design-vue/nuxt'],
  css: ['~/assets/styles/main.scss'],
  devtools: { enabled: true },
});
