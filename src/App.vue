<script setup>
import LangToggle from './components/LangToggle.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Hero from './components/Hero.vue'
import Summary from './components/Summary.vue'
import { ref, provide, defineAsyncComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const Experience = defineAsyncComponent(() => import('./components/Experience.vue'))
const Projects = defineAsyncComponent(() => import('./components/Projects.vue'))
const Skills = defineAsyncComponent(() => import('./components/Skills.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))

const selectedSkill = ref('')
provide('selectedSkill', selectedSkill)

const { t, locale } = useI18n()

useHead(
  computed(() => ({
    title: t('metaTitle'),
    htmlAttrs: { lang: locale.value },
    meta: [
      { name: 'description', content: t('metaDesc') },
      { property: 'og:title', content: t('metaTitle') },
      { property: 'og:description', content: t('metaDesc') },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://docanto.net' },
      { property: 'og:image', content: t('metaImage') },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://docanto.net' },
      { property: 'twitter:title', content: t('metaTitle') },
      { property: 'twitter:description', content: t('metaDesc') },
      { property: 'twitter:image', content: t('metaImage') },
    ],
  }))
)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  },
  { threshold: 0.1 }
)

const vReveal = {
  mounted: (el) => {
    observer.observe(el)
  },
  unmounted: (el) => {
    observer.unobserve(el)
  },
}
</script>

<template>
  <div
    :class="[
      'antialiased min-h-screen bg-slate-50 dark:bg-neutral-900 transition-colors duration-300',
      `lang-${$i18n.locale}`,
    ]"
  >
    <div class="fixed top-4 right-4 z-50 flex items-center gap-2">
      <ThemeToggle />
      <LangToggle />
    </div>
    <Hero />
    <main class="container mx-auto px-6 -mt-12 relative z-20 pb-20">
      <Summary v-reveal class="reveal" />
      <Experience v-reveal class="reveal" />
      <Projects v-reveal class="reveal" />
      <Skills v-reveal class="reveal" />
    </main>
    <Footer />
  </div>
</template>
