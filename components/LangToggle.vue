<template>
  <button
    class="lang-btn bg-white/90 dark:bg-neutral-800/90 backdrop-blur text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700 font-bold hover:bg-white dark:hover:bg-neutral-700 hover:text-orange-700 transition-colors flex items-center gap-2 cursor-pointer h-[42px]"
    :aria-label="$t('langToggleAria')"
    :title="$t('langToggleAria')"
    @click="toggleLanguage"
  >
    <Globe class="w-5 h-5" />
    <span>{{ currentLang === 'pt' ? 'EN' : 'PT' }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { Globe } from 'lucide-vue-next'

const { locale, setLocale } = useI18n()
const currentLang = computed(() => locale.value)

const toggleLanguage = () => {
  const nextLocale = locale.value === 'pt' ? 'en' : 'pt'
  setLocale(nextLocale)

  // Persist preference on client only
  if (import.meta.client) {
    localStorage.setItem('preferredLang', nextLocale)
  }
}
</script>
