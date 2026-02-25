<template>
  <button @click="toggleLanguage" class="lang-btn bg-white/90 dark:bg-neutral-800/90 backdrop-blur text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700 font-bold hover:bg-white dark:hover:bg-neutral-700 hover:text-orange-700 transition-colors flex items-center gap-2 cursor-pointer h-[42px]">
      <i class="fa-solid fa-globe"></i>
      <span>{{ currentLang === 'pt' ? 'EN' : 'PT' }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLang = computed(() => locale.value)

const toggleLanguage = () => {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
  localStorage.setItem('preferredLang', locale.value)
}
</script>
