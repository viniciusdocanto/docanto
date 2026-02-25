<template>
  <button @click="toggleTheme" class="theme-btn bg-white/90 dark:bg-neutral-800/90 backdrop-blur text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700 font-bold hover:bg-white dark:hover:bg-neutral-700 hover:text-orange-700 transition-colors flex items-center justify-center cursor-pointer" :title="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'">
      <i :class="['fa-solid', isDark ? 'fa-sun' : 'fa-moon']"></i>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
.theme-btn {
    transition: transform 0.2s;
    width: 42px;
    height: 42px;
}
.theme-btn:active {
    transform: scale(0.95);
}
</style>
