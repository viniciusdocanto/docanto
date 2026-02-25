<template>
  <header class="text-white pt-20 pb-24 relative overflow-hidden bg-cover bg-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bg.webp');">
      <div class="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div class="flex flex-col md:flex-row items-center justify-between">
              <div>
                  <h1 class="text-4xl md:text-6xl font-bold mb-2 tracking-tight">Vinicius Silva do Canto</h1>
                  <h2 class="text-xl md:text-2xl text-orange-700 font-medium mb-6">
                      {{ $t('role') }}
                  </h2>
                  
                  <div class="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base text-neutral-300">
                      <a href="mailto:eu@viniciusdocanto.com.br" class="hover:text-white transition-colors flex items-center gap-2">
                          <i class="fa-solid fa-envelope"></i> eu@viniciusdocanto.com.br
                      </a>
                      <span class="hidden md:inline text-neutral-600">|</span>
                      <a href="tel:+5521969244912" class="hover:text-white transition-colors flex items-center gap-2">
                          <i class="fa-solid fa-phone"></i> +55 21 9 6924 4912
                      </a>
                      <span class="hidden md:inline text-neutral-600">|</span>
                      <a href="https://linkedin.com/in/viniciusdocanto" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
                          <i class="fa-brands fa-linkedin"></i> in/viniciusdocanto
                      </a>
                      <span class="hidden md:inline text-neutral-600">|</span>
                      <a href="https://github.com/viniciusdocanto" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
                          <i class="fa-brands fa-github"></i> /viniciusdocanto
                      </a>
                  </div>
              </div>
              
              <!-- Profile Picture -->
              <div class="mt-8 md:mt-0">
                  <img src="/profile.jpg" alt="Vinicius Silva do Canto" class="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-neutral-800 object-cover">
              </div>
          </div>
      </div>
  </header>
</template>
