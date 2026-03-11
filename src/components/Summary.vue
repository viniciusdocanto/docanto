<template>
  <section
    class="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-12 border-l-4 border-orange-500 transition-colors duration-300"
  >
    <h3
      class="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center gap-3"
    >
      <CircleUser class="w-7 h-7 text-orange-700 dark:text-orange-500" />
      {{ $t('summaryTitle') }}
    </h3>
    <div class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
      <p>{{ $t('summaryP1') }}</p>
    </div>
    <div class="mt-4 text-neutral-600 dark:text-neutral-300">
      <p>{{ $t('summaryP2') }}</p>
    </div>
  </section>
</template>

<script setup>
import { CircleUser } from 'lucide-vue-next'
</script>
