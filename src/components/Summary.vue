<template>
  <section class="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-orange-500">
      <h3 class="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <i class="fa-solid fa-user-circle text-orange-700"></i> 
          {{ $t('summaryTitle') }}
      </h3>
      <div class="text-lg leading-relaxed text-neutral-600">
          <p>{{ $t('summaryP1') }}</p>
      </div>
      <div class="mt-4 text-neutral-600">
          <p>{{ $t('summaryP2') }}</p>
      </div>
  </section>
</template>
