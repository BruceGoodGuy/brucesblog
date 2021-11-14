import webpack from 'webpack'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bruces',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { type: 'text/css', rel: 'stylesheet', href: 'css/base.css' },
      { type: 'text/css', rel: 'stylesheet', href: 'css/animate.css' },
      { type: 'text/css', rel: 'stylesheet', href: 'css/magnific-popup.css' },
      { type: 'text/css', rel: 'stylesheet', href: 'css/owl-carousel.css' },
      { type: 'text/css', rel: 'stylesheet', href: 'css/style.css' }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'js/jquery.js',
        ssr: false
      },
      {
        type: 'text/javascript',
        src: 'js/wow.min.js'
      },
      {
        type: 'text/javascript',
        src: 'js/magnific-popup.js'
      },
      {
        type: 'text/javascript',
        src: 'js/onepage.js'
      },
      {
        type: 'text/javascript',
        src: 'js/owl-carousel.js'
      },
      {
        type: 'text/javascript',
        src: 'js/isotope.js'
      },
      {
        type: 'text/javascript',
        src: 'js/parallax.js'
      },
      {
        type: 'text/javascript',
        src: 'js/waypoints.js'
      },
      {
        type: 'text/javascript',
        src: 'js/init.js'
      },
      {
        type: 'text/javascript',
        src: 'js/modernizr.custom.js'
      },
      {
        type: 'text/javascript',
        src: 'js/custom.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['plugins/i18n.js'],
  router: {
    middleware: ['i18n']
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
