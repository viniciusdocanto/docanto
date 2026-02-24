<template>
  <section class="bg-neutral-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
      <h3 class="text-2xl md:text-3xl font-bold mb-2">
          {{ $t('skillsTitle') }}
      </h3>
      <p class="text-neutral-400 mb-8">
          {{ $t('skillsSubtitle') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          
          <!-- Core Skills -->
          <div>
              <h4 class="text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 pb-2">Core & Front-end</h4>
              <div class="flex flex-wrap gap-2">
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">JavaScript</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">HTML</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">CSS</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">TailwindCSS</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">SASS</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">LESS</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Bootstrap</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Vue.js</span>
              </div>
          </div>

          <!-- Backend & DevOps -->
          <div>
              <h4 class="text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 pb-2">
                  {{ $t('skillsBackendTitle') }}
              </h4>
              <div class="flex flex-wrap gap-2">
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm font-medium border border-neutral-700">SQL</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Git / GitHub</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Unix</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-400 rounded-full text-sm font-medium border border-neutral-700">Docker</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-400 rounded-full text-sm font-medium border border-neutral-700">PHP</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-white rounded-full text-sm font-medium border border-neutral-700">Wordpress</span>
                  <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-400 rounded-full text-sm font-medium border border-neutral-700">Python</span>
              </div>
          </div>
      </div>
  </section>
</template>
