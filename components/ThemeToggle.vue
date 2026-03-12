<template>
  <button
    class="theme-btn bg-white/90 dark:bg-neutral-800/90 backdrop-blur text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700 font-bold hover:bg-white dark:hover:bg-neutral-700 hover:text-orange-700 transition-colors flex items-center justify-center cursor-pointer"
    :title="isDark ? $t('themeToggleLightAria') : $t('themeToggleDarkAria')"
    :aria-label="isDark ? $t('themeToggleLightAria') : $t('themeToggleDarkAria')"
    @click="toggleTheme"
  >
    <Sun v-if="isDark" class="w-5 h-5" />
    <Moon v-else class="w-5 h-5" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Only runs on client — safe for SSG
onMounted(() => {
  // Read the class applied by the inline script in nuxt.config.ts
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>

<style scoped>
.theme-btn {
  transition: transform 0.2s;
  width: 42px;
  height: 42px;
  padding: 0;
}
.theme-btn:active {
  transform: scale(0.95);
}
</style>
