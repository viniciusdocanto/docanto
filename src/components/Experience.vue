<template>
  <section class="mb-16" id="experience-section">
      <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center uppercase tracking-wide">
          {{ $t('expTitle') }}
      </h3>
      
      <div class="relative">
          <!-- Timeline Line -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-200 dark:bg-neutral-700"></div>

          <div v-for="(job, index) in visibleJobs" :key="job.id" class="relative flex flex-col md:flex-row items-center justify-between mb-12 group transition-opacity duration-500" :class="[selectedSkill && !matchesSkill(job.desc) ? 'opacity-30 grayscale' : 'opacity-100']">
              <!-- Left Side -->
              <div :class="['md:w-5/12', index % 2 === 0 ? 'order-2 md:order-1' : 'order-3 md:order-1']">
                  <div v-if="index % 2 === 0" class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-2 w-full" :class="[job.color === 'orange' ? 'border-orange-500' : 'border-neutral-700 dark:border-neutral-600', selectedSkill && matchesSkill(job.desc) ? 'ring-2 ring-orange-500 scale-105 z-10' : '']">
                      <h4 class="text-xl font-bold text-neutral-800 dark:text-neutral-100">{{ job.title }}</h4>
                      <div class="text-orange-800 dark:text-orange-400 font-semibold mb-2">{{ job.company }} <span v-if="job.period">| {{ job.period }}</span></div>
                      <p class="text-neutral-600 dark:text-neutral-300">{{ job.desc }}</p>
                  </div>
              </div>
              
              <!-- Center Icon -->
              <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-neutral-900 shadow items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex" :class="job.color === 'orange' ? 'bg-orange-500' : 'bg-neutral-700 dark:bg-neutral-600'">
                  <i :class="[job.icon, 'text-white text-xs']"></i>
              </div>

              <!-- Right Side -->
              <div :class="['md:w-5/12', index % 2 === 0 ? 'order-3 md:order-2' : 'order-2 md:order-2']">
                  <div v-if="index % 2 !== 0" class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-2 w-full" :class="[job.color === 'orange' ? 'border-orange-500' : 'border-neutral-700 dark:border-neutral-600', selectedSkill && matchesSkill(job.desc) ? 'ring-2 ring-orange-500 scale-105 z-10' : '']">
                      <h4 class="text-xl font-bold text-neutral-800 dark:text-neutral-100">{{ job.title }}</h4>
                      <div class="text-orange-800 dark:text-orange-400 font-semibold mb-2">{{ job.company }} <span v-if="job.period">| {{ job.period }}</span></div>
                      <p class="text-neutral-600 dark:text-neutral-300">{{ job.desc }}</p>
                  </div>
              </div>
          </div>
      </div>

      <!-- Botão Carregar Mais -->
      <div v-if="!showAll && allJobs.length > 2" class="mt-8 text-center">
          <button @click="showAll = true" class="px-8 py-3 bg-white dark:bg-neutral-800 border-2 border-orange-500 text-orange-600 dark:text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all shadow-md cursor-pointer uppercase text-sm tracking-wide">
              {{ $t('loadMore') }}
          </button>
      </div>
  </section>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const selectedSkill = inject('selectedSkill', ref(''))
const showAll = ref(false)

const matchesSkill = (desc) => {
    if (!selectedSkill.value) return false
    const skill = selectedSkill.value.toLowerCase().replace(/ \/ .*/, '') // Lidar com "Git / GitHub"
    return desc.toLowerCase().includes(skill)
}

// Exibir apenas as 2 primeiras por padrão
const allJobs = computed(() => tm('experiences'))
const visibleJobs = computed(() => {
    return showAll.value ? allJobs.value : allJobs.value.slice(0, 2)
})
</script>
