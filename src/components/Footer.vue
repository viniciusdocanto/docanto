<template>
  <footer class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8 transition-colors duration-300">
      <div class="container mx-auto px-6 text-center">
          <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              &copy; 2007 - {{ currentYear }} Vinicius Silva do Canto. {{ $t('footerRights') }}
          </p>
          <div class="flex justify-center gap-6">
              <a href="mailto:eu@viniciusdocanto.com.br" alt="E-mail" class="text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">
                  <i class="fa-solid fa-envelope text-xl"></i> E-mail
              </a>
              <a href="https://linkedin.com/in/viniciusdocanto" alt="Linkedin" target="_blank" class="text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">
                  <i class="fa-brands fa-linkedin text-xl"></i> Linkedin
              </a>
              <a href="https://github.com/viniciusdocanto" alt="GitHub" target="_blank" class="text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">
                  <i class="fa-brands fa-github text-xl"></i> GitHub
              </a>
          </div>
      </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
