module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CoderDojo – Enabling young people worldwide to create and explore technology together',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CoderDojo believes that an understanding of programming languages is increasingly important in the modern world, that it’s both better and easier to learn these skills early, and that nobody should be denied the opportunity to do so! Any young person aged 7 - 17 can join and attend a Dojo for FREE...' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    }]
  ],
}
