<template>
  <section class="mb-16">
      <h3 class="text-2xl font-bold text-neutral-800 mb-8 text-center uppercase tracking-wide">
          {{ $t('expTitle') }}
      </h3>
      
      <div class="relative">
          <!-- Timeline Line -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-200"></div>

          <div v-for="(job, index) in visibleJobs" :key="job.id" class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
              <!-- Left Side -->
              <div :class="['md:w-5/12', index % 2 === 0 ? 'order-2 md:order-1' : 'order-3 md:order-1']">
                  <div v-if="index % 2 === 0" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 w-full" :class="job.color === 'orange' ? 'border-orange-500' : 'border-neutral-700'">
                      <h4 class="text-xl font-bold text-neutral-800">{{ job.title }}</h4>
                      <div class="text-orange-800 font-semibold mb-2">{{ job.company }} <span v-if="job.period">| {{ job.period }}</span></div>
                      <p class="text-neutral-600">{{ job.desc }}</p>
                  </div>
              </div>
              
              <!-- Center Icon -->
              <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex" :class="job.color === 'orange' ? 'bg-orange-500' : 'bg-neutral-700'">
                  <i :class="[job.icon, 'text-white text-xs']"></i>
              </div>

              <!-- Right Side -->
              <div :class="['md:w-5/12', index % 2 === 0 ? 'order-3 md:order-2' : 'order-2 md:order-2']">
                  <div v-if="index % 2 !== 0" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 w-full" :class="job.color === 'orange' ? 'border-orange-500' : 'border-neutral-700'">
                      <h4 class="text-xl font-bold text-neutral-800">{{ job.title }}</h4>
                      <div class="text-orange-800 font-semibold mb-2">{{ job.company }} <span v-if="job.period">| {{ job.period }}</span></div>
                      <p class="text-neutral-600">{{ job.desc }}</p>
                  </div>
              </div>
          </div>
      </div>

      <!-- Botão Carregar Mais -->
      <div v-if="!showAll && allJobs.length > 2" class="mt-8 text-center">
          <button @click="showAll = true" class="px-8 py-3 bg-white border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-md cursor-pointer uppercase text-sm tracking-wide">
              {{ $t('loadMore') }}
          </button>
      </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const showAll = ref(false)

// Exibir apenas as 2 primeiras por padrão
const allJobs = computed(() => tm('experiences'))
const visibleJobs = computed(() => {
    return showAll.value ? allJobs.value : allJobs.value.slice(0, 2)
})
</script>
