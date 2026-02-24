<script setup>
import LangToggle from './components/LangToggle.vue'
import Hero from './components/Hero.vue'
import Summary from './components/Summary.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
</script>

<template>
<div :class="['antialiased text-neutral-700', `lang-${$i18n.locale}`]">
  <LangToggle />
  <Hero />
  <main class="container mx-auto px-6 -mt-12 relative z-20 pb-20">
    <Summary />
    <Experience />
    <Skills />
  </main>
  <Footer />
</div>
</template>
