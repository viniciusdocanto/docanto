// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    future: { compatibilityVersion: 4 },
    srcDir: '.',

    // Static Site Generation
    nitro: {
        preset: 'static',
    },

    // Modules
    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],

    // i18n configuration
    i18n: {
        locales: [
            { code: 'pt', name: 'Português', language: 'pt-BR', file: 'pt.json' },
            { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
        ],
        langDir: 'locales',
        defaultLocale: 'pt',
        strategy: 'no_prefix',
        detectBrowserLanguage: false,
    },

    // CSS
    css: ['~/assets/css/main.css'],

    // App-level head (static, non-reactive)
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg' }],
            // Inline script to apply theme before CSS to prevent FOUC
            script: [
                {
                    innerHTML: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
                    type: 'text/javascript',
                },
            ],
        },
    },

    // Tailwind config
    tailwindcss: {
        configPath: './tailwind.config.js',
    },

    devtools: { enabled: false },

    compatibilityDate: '2025-03-12',
})
