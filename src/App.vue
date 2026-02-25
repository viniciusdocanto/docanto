<script setup>
import LangToggle from './components/LangToggle.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Hero from './components/Hero.vue'
import Summary from './components/Summary.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
import { onMounted, ref, provide } from 'vue'

const selectedSkill = ref('')
provide('selectedSkill', selectedSkill)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
<div :class="['antialiased min-h-screen bg-slate-50 dark:bg-neutral-900 transition-colors duration-300', `lang-${$i18n.locale}`]">
  <div class="fixed top-4 right-4 z-50 flex items-center gap-2">
    <ThemeToggle />
    <LangToggle />
  </div>
  <Hero />
  <main class="container mx-auto px-6 -mt-12 relative z-20 pb-20">
    <Summary class="reveal" />
    <Experience class="reveal" />
    <!-- <Projects /> -->
    <Skills class="reveal" />
  </main>
  <Footer />
</div>
</template>
