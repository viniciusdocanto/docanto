<template>
  <footer
    class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8 transition-colors duration-300"
  >
    <div class="container mx-auto px-6 text-center">
      <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
        &copy; 2007 - {{ currentYear }} Vinicius Silva do Canto. {{ $t('footerRights') }}
      </p>
      <div class="flex justify-center gap-6">
        <a
          href="mailto:eu@viniciusdocanto.com.br"
          aria-label="E-mail"
          class="text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors"
        >
          <Mail class="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/viniciusdocanto"
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors"
        >
          <Linkedin class="w-5 h-5" />
        </a>
        <a
          href="https://github.com/viniciusdocanto"
          aria-label="GitHub"
          target="_blank"
          class="text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors"
        >
          <Github class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Linkedin, Github } from 'lucide-vue-next'
const currentYear = new Date().getFullYear()
</script>
