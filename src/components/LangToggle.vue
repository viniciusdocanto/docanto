<template>
  <div class="fixed top-4 right-4 z-50">
      <button @click="toggleLanguage" class="lang-btn bg-white/90 backdrop-blur text-neutral-800 px-4 py-2 rounded-full shadow-lg border border-neutral-200 font-bold hover:bg-white hover:text-orange-700 transition-colors flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-globe"></i>
          <span>{{ currentLang === 'pt' ? 'EN' : 'PT' }}</span>
      </button>
  </div>
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
