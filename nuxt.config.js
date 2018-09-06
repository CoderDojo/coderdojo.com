module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CoderDojo – Enabling young people worldwide to create and explore technology together',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CoderDojo is a global movement of free, volunteer-led, community-based computer programming clubs for young people. Children can visit a Dojo where they can learn to code, build websites, create apps or games, and explore technology in an creative and social environment.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://coderdojo.com/wp-content/themes/cd-theme/static/img/coderdojo/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:400,400i,700,900|Libre+Franklin:300,600,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en-US',
          shortCode: 'en',
          iso: 'en-US',
          name: 'English',
          file: 'en-US.json',
        },
        {
          code: 'fr-FR',
          shortCode: 'fr',
          iso: 'fr-FR',
          name: 'Français',
          file: 'fr-FR.json',
        }
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'en-US',
      vueI18n: {
        fallbackLocale: 'en-US'
      },
      detectBrowserLanguage: false,
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-25136319-2'
    }],
  ],
}
