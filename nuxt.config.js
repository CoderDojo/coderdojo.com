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
        },
        {
          code: 'ja-JP',
          shortCode: 'ja',
          iso: 'ja-JP',
          name: '日本語',
          file: 'ja-JP.json',
        },
        {
          code: 'nl-NL',
          shortCode: 'nl',
          iso: 'nl-NL',
          name: 'Nederlands',
          file: 'nl-NL.json',
        },
        {
          code: 'el-GR',
          shortCode: 'el',
          iso: 'el-GR',
          name: 'Ελληνικά',
          file: 'el-GR.json',
        },
        {
          code: 'hi-IN',
          shortCode: 'hi',
          iso: 'hi-IN',
          name: 'हिंदी',
          file: 'hi-IN.json',
        },
        {
          code: 'it-IT',
          shortCode: 'it',
          iso: 'it-IT',
          name: 'Italiano',
          file: 'it-IT.json',
        },
        {
          code: 'pl-PL',
          shortCode: 'pl',
          iso: 'pl-PL',
          name: 'Polski',
          file: 'pl-PL.json',
        },
        {
          code: 'ro-RO',
          shortCode: 'ro',
          iso: 'ro-RO',
          name: 'Română',
          file: 'ro-RO.json',
        },
        {
          code: 'tr-TR',
          shortCode: 'tr',
          iso: 'tr-TR',
          name: 'Türkçe',
          file: 'tr-TR.json',
        },
        {
          code: 'de-DE',
          shortcode: 'de',
          iso: 'de-DE',
          name: 'Deutsch',
          file: 'de-DE.json',
        },
        {
          code: 'es-ES',
          shortcode: 'es',
          iso: 'es-ES',
          name: 'Español',
          file: 'es-ES.json',
        },
        {
          code: 'hu-HU',
          shortcode: 'hu',
          iso: 'hu-HU',
          name: 'Magyar',
          file: 'hu-HU.json',
        },
        {
          code: 'zh-CN',
          shortcode: 'zh',
          iso: 'zh-CN',
          name: '中文',
          file: 'zh-CN.json',
        },
        {
          code: 'ko-KR',
          shortcode: 'ko',
          iso: 'ko-KR',
          name: '한국어',
          file: 'ko-KR.json',
        },
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
