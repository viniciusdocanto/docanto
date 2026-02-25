<template>
  <section class="bg-neutral-900 dark:bg-neutral-800/50 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl border border-transparent dark:border-neutral-700 transition-colors duration-300">
      <h3 class="text-2xl md:text-3xl font-bold mb-2">
          {{ $t('skillsTitle') }}
      </h3>
      <p class="text-neutral-400 mb-8">
          {{ $t('skillsSubtitle') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          
          <!-- Core Skills -->
          <div>
              <h4 class="text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 dark:border-neutral-600 pb-2">Core & Front-end</h4>
              <div class="flex flex-wrap gap-2">
                  <span v-for="skill in coreSkills" :key="skill" @click="toggleSkill(skill)" :class="['skill-tag px-3 py-1 rounded-full text-sm font-medium border cursor-pointer transition-all', selectedSkill === skill ? 'bg-orange-500 text-white border-orange-500 scale-110 shadow-lg' : 'bg-neutral-800 text-orange-300 border-neutral-700 hover:border-orange-500']">{{ skill }}</span>
              </div>
          </div>

          <!-- Backend & DevOps -->
          <div>
              <h4 class="text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 dark:border-neutral-600 pb-2">
                  {{ $t('skillsBackendTitle') }}
              </h4>
              <div class="flex flex-wrap gap-2">
                  <span v-for="skill in backendSkills" :key="skill" @click="toggleSkill(skill)" :class="['skill-tag px-3 py-1 rounded-full text-sm font-medium border cursor-pointer transition-all', selectedSkill === skill ? 'bg-orange-500 text-white border-orange-500 scale-110 shadow-lg' : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-orange-500']">{{ skill }}</span>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const selectedSkill = inject('selectedSkill', ref(''))

const coreSkills = ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'SASS', 'LESS', 'Bootstrap', 'Vue.js']
const backendSkills = ['SQL', 'Git / GitHub', 'Unix', 'Docker', 'PHP', 'Wordpress', 'Python']

const toggleSkill = (skill) => {
  if (selectedSkill.value === skill) {
    selectedSkill.value = ''
  } else {
    selectedSkill.value = skill
    // Voltar para a seção de experiência para ver o resultado
    document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
