<template>
  <section class="mb-16 reveal" id="projects">
      <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center uppercase tracking-wide">
          {{ $t('projectsTitle') || 'Projetos e Clientes' }}
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="project in projects" :key="project.id" class="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-700 hover:shadow-xl transition-all group">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <i :class="[project.icon, 'text-orange-600 dark:text-orange-400 group-hover:text-white text-xl']"></i>
              </div>
              <h4 class="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">{{ project.name }}</h4>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {{ project.desc }}
              </p>
          </div>
      </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n()

const projects = computed(() => [
    { 
        id: 1, 
        name: 'Globo.com', 
        icon: 'fa-solid fa-tv', 
        desc: locale.value === 'pt' ? 'Desenvolvimento de interfaces para portais de notícias e entretenimento de alta escala.' : 'Interface development for high-scale news and entertainment portals.'
    },
    { 
        id: 2, 
        name: 'TIVIT', 
        icon: 'fa-solid fa-cloud', 
        desc: locale.value === 'pt' ? 'Modernização de esteiras de CI/CD e desenvolvimento de sistemas críticos para o setor financeiro.' : 'Modernization of CI/CD pipelines and development of critical systems for the financial sector.'
    },
    { 
        id: 3, 
        name: 'Teneo', 
        icon: 'fa-solid fa-briefcase', 
        desc: locale.value === 'pt' ? 'Desenvolvimento de soluções web para consultoria global estratégica sediada no Canadá.' : 'Web solutions development for a global strategic consultancy based in Canada.'
    }
])
</script>
