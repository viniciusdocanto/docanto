import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import messages from './locales/messages'

const savedLang = localStorage.getItem('preferredLang') || 'pt'

const i18n = createI18n({
    legacy: false,
    locale: savedLang,
    fallbackLocale: 'en',
    messages,
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
