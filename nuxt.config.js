export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lets Go Headless',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a informational and tutorial website about Headless Web Architecture.  Learn to make your own headless website by viewing over 20 simple tutorials accompanied with videos.  Each tutorial is a combination of using either Gatsby, Next.js, or Nuxt.js as a front-end framework along with many headless CMS examples.  ' },
      { hid: 'og:image', property: 'og:image', content: 'https://tom.imgix.net/letsgoheadless_logo_mobile.png?ixlib=vue-2.9.0&auto=format%2Ccompress&fit=crop&ar=1.8%3A1&bg=262261&w=799'},
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'twitter:site', name: 'twitter:site', content: '@letsgoheadless'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Lets Go Headless'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'This is a informational and tutorial website about Headless Web Architecture.  Learn to make your own headless website by viewing over 20 simple tutorials accompanied with videos.  Each tutorial is a combination of using either Gatsby, Next.js, or Nuxt.js as a front-end framework along with many headless CMS examples.  ' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://tom.imgix.net/letsgoheadless_logo_mobile.png?ixlib=vue-2.9.0&auto=format%2Ccompress&fit=fill&ar=1%3A1&bg=262261&w=400&h=400'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/ag-grid-community/dist/styles/ag-grid.css',
    '@/node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/ag-grid.client.js",
    "~/plugins/vue-imgix.js",
    "~/plugins/lite-youtube-embed.client.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
