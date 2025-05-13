// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Nitro compatibility date
    nitro: {
        compatibilityDate: '2025-05-14'
    },

    // Target: https://nuxt.com/docs/api/configuration/nuxt-config#target
    target: 'static',

    // App configuration: https://nuxt.com/docs/api/configuration/nuxt-config#app
    app: {
        head: {
            title: 'demoblog',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },

    // Global CSS: https://nuxt.com/docs/api/configuration/nuxt-config#css
    css: [
        '~/assets/css/global.css'
    ],

    // Plugins to run before rendering page: https://nuxt.com/docs/guide/directory-structure/plugins
    plugins: [],

    // Auto import components: https://nuxt.com/docs/guide/directory-structure/components
    components: true,

    // Modules: https://nuxt.com/docs/api/configuration/nuxt-config#modules
    modules: [
        '@nuxt/content'
    ],

    // Content module configuration: https://content.nuxtjs.org/api/configuration
    content: {
        // Configuration options
    },

    // Build Configuration: https://nuxt.com/docs/api/configuration/nuxt-config#build
    build: {}
})
