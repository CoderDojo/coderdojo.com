module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'coderdojo.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CoderDojo Main Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:400,400i,700,900|Libre+Franklin:300,600,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
          code: 'en',
          name: 'English',
          file: 'en.json',
        },
        {
          code: 'fr',
          name: 'Français',
          file: 'fr.json',
        }
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en'
      }
    }]
  ]
}
