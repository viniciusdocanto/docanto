<template>
  <section class="mb-16 reveal" id="projects">
      <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center uppercase tracking-wide">
          {{ $t('projectsTitle') || 'Projetos e Clientes' }}
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a v-for="project in projects" :key="project.id" :href="project.url" target="_blank" 
             class="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-700 hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer no-underline">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <i :class="[project.icon, 'text-orange-600 dark:text-orange-400 group-hover:text-white text-xl']"></i>
              </div>
              <h4 class="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">{{ project.name }}</h4>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">
                  {{ project.desc }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mt-auto">
                <span v-for="tech in project.tech" :key="tech" 
                      class="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-[10px] font-bold rounded uppercase tracking-wider">
                  {{ tech }}
                </span>
              </div>

              <div class="mt-4 pt-4 border-t border-neutral-50 dark:border-neutral-700 flex items-center justify-between text-orange-600 dark:text-orange-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>{{ locale === 'pt' ? 'Ver Projeto' : 'View Project' }}</span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
          </a>
      </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const projects = computed(() => [
    { 
        id: 1, 
        name: 'PuxaVagas', 
        icon: 'fa-solid fa-search-dollar', 
        url: 'https://vagas.docanto.net',
        tech: ['Vue 3', 'Vite', 'Tailwind', 'Supabase'],
        desc: locale.value === 'pt' ? 'Dashboard em tempo real que agrega oportunidades de emprego Front-end com filtros avançados de tecnologia e senioridade.' : 'Real-time dashboard aggregating Front-end job opportunities with advanced tech stack and seniority filters.'
    },
    { 
        id: 2, 
        name: 'WeatherTrip', 
        icon: 'fa-solid fa-cloud-sun-rain', 
        url: 'https://sites.docanto.net/weathertrip/',
        tech: ['JavaScript', 'Leaflet.js', 'Weather API'],
        desc: locale.value === 'pt' ? 'Ferramenta de planejamento de viagens que exibe a previsão do tempo ao longo da rota em um mapa interativo.' : 'Trip planning tool that displays weather forecasts along the route on an interactive map.'
    },
    { 
        id: 3, 
        name: 'Teneo', 
        icon: 'fa-solid fa-briefcase', 
        url: 'https://www.teneo.com',
        tech: ['WordPress', 'PHP', 'Tailwind'],
        desc: locale.value === 'pt' ? 'Consultoria global estratégica. Atuação no desenvolvimento de soluções web corporativas e plataformas de comunicação.' : 'Global strategic consultancy. Worked on developing corporate web solutions and communication platforms.'
    },
    { 
        id: 4, 
        name: 'CIBC Capital Markets', 
        icon: 'fa-solid fa-chart-line', 
        url: 'https://wtsiegelindex.cibccm.com/',
        tech: ['Alpine.js', 'Tailwind', 'Chart.js'],
        desc: locale.value === 'pt' ? 'Plataforma financeira de alto nível para o CIBC Capital Markets, com foco em visualização de dados e performance.' : 'High-level financial platform for CIBC Capital Markets, focusing on data visualization and performance.'
    }
])
</script>
