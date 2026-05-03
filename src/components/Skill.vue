<template>
  <section class="min-h-screen bg-[#0a0c10] py-24 px-4 relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="mb-20 text-center">
        <p class="text-emerald-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">What I Do</p>
        <h2 class="text-5xl font-bold tracking-tight text-white">
          Skills & Expertise
        </h2>
        <div class="w-16 h-1 mx-auto mt-6 rounded-full bg-emerald-500"></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="group relative bg-[#13161f] border border-[#1e2230] rounded-2xl p-8 hover:border-[#2a3045] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1"
        >
          <!-- Glow effect on hover -->
          <div class="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent group-hover:opacity-100"></div>

          <!-- Category Header -->
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 rounded-xl bg-[#1a1f2e] border border-[#252b3d] flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300">
                <i :class="category.icon + ' text-emerald-400 text-xl'"></i>
              </div>
              <h3 class="text-xl font-semibold text-white">
                {{ category.title }}
              </h3>
            </div>

            <!-- Skills List -->
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                class="flex items-center gap-2.5 bg-[#1a1f2e] border border-[#252b3d] rounded-lg px-4 py-2.5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 cursor-default group/skill"
              >
                <template v-if="skill.svg">
                  <img
                    :src="skill.svg"
                    :alt="skill.name + ' icon'"
                    class="w-3.5 h-3.5 opacity-80 group-hover/skill:opacity-100 transition-opacity"
                  />
                </template>
                <template v-else>
                  <i :class="skill.icon + ' text-sm opacity-80 group-hover/skill:opacity-100 transition-opacity'" :style="{ color: skill.color }"></i>
                </template>
                <span class="text-sm font-medium text-gray-300 transition-colors group-hover/skill:text-emerald-300">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import figmaIcon from '../assets/icons/figma-svgrepo-com.svg'
import xdIcon from '../assets/icons/adobe-xd-svgrepo-com.svg'
import illustratorIcon from '../assets/icons/adobe-illustrator-svgrepo-com.svg'
import photoshopIcon from '../assets/icons/adobe-photoshop-svgrepo-com.svg'
import indesignIcon from '../assets/icons/indesign-icon.svg'
import canvaIcon from '../assets/icons/canva-icon.svg'

const skillCategories = ref([
  {
    title: 'UI Design',
    icon: 'fa-solid fa-layer-group',
    skills: [
      { name: 'Figma', svg: figmaIcon, color: '#F24E1E' },
      { name: 'Adobe XD', svg: xdIcon, color: '#FF61F6' },
      { name: 'Sketch', icon: 'fa-brands fa-sketch', color: '#F7B500' },
      { name: 'Prototyping', icon: 'fa-solid fa-wand-magic-sparkles', color: '#10b981' },
      { name: 'Design Systems', icon: 'fa-solid fa-cubes', color: '#10b981' },
      { name: 'Wireframing', icon: 'fa-solid fa-pen-ruler', color: '#10b981' }
    ]
  },
  {
    title: 'UX Design',
    icon: 'fa-solid fa-users-viewfinder',
    skills: [
      { name: 'User Research', icon: 'fa-solid fa-magnifying-glass-user', color: '#10b981' },
      { name: 'User Flows', icon: 'fa-solid fa-route', color: '#10b981' },
      { name: 'Usability Testing', icon: 'fa-solid fa-vial', color: '#10b981' },
      { name: 'Information Architecture', icon: 'fa-solid fa-sitemap', color: '#10b981' },
      { name: 'Journey Mapping', icon: 'fa-solid fa-map-location-dot', color: '#10b981' },
      { name: 'A/B Testing', icon: 'fa-solid fa-flask', color: '#10b981' }
    ]
  },
  {
    title: 'Graphic Design',
    icon: 'fa-solid fa-palette',
    skills: [
      { name: 'Adobe Illustrator', svg: illustratorIcon, color: '#FF9A00' },
      { name: 'Adobe Photoshop', svg: photoshopIcon, color: '#31A8FF' },
      { name: 'Adobe InDesign', svg: indesignIcon, color: '#FF3366' },
      { name: 'Canva', svg: canvaIcon, color: '#00C4CC' },
      { name: 'Brand Identity', icon: 'fa-solid fa-fingerprint', color: '#10b981' },
      { name: 'Print Design', icon: 'fa-solid fa-print', color: '#10b981' }
    ]
  },
  {
    title: 'Frontend Development',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
      { name: 'React.js', icon: 'fa-brands fa-react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'fa-solid fa-n', color: '#ffffff' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#06B6D4' },
      { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
      { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'fa-solid fa-t', color: '#3178C6' },
      { name: 'SASS', icon: 'fa-brands fa-sass', color: '#CC6699' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952B3' }
    ]
  },
  {
    title: 'Backend & Database',
    icon: 'fa-solid fa-database',
    skills: [
      { name: 'Node.js', icon: 'fa-brands fa-node', color: '#339933' },
      { name: 'Express.js', icon: 'fa-solid fa-server', color: '#ffffff' },
      { name: 'Laravel', icon: 'fa-brands fa-laravel', color: '#FF2D20' },
      { name: 'MySQL', icon: 'fa-solid fa-database', color: '#4479A1' },
      { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#47A248' },
      { name: 'REST APIs', icon: 'fa-solid fa-network-wired', color: '#10b981' }
    ]
  },
  {
    title: 'Mobile Development',
    icon: 'fa-solid fa-mobile-screen',
    skills: [
      { name: 'Flutter', icon: 'fa-solid fa-paper-plane', color: '#02569B' },
      { name: 'GetX', icon: 'fa-solid fa-rocket', color: '#8E24AA' },
      { name: 'Dart', icon: 'fa-solid fa-bullseye', color: '#0175C2' },
      { name: 'Responsive Design', icon: 'fa-solid fa-mobile-retro', color: '#10b981' },
      { name: 'Mobile UI', icon: 'fa-solid fa-hand-pointer', color: '#10b981' }
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: 'fa-solid fa-toolbox',
    skills: [
      { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
      { name: 'GitHub', icon: 'fa-brands fa-github', color: '#ffffff' },
      { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED' },
      { name: 'VS Code', icon: 'fa-solid fa-code', color: '#007ACC' },
      { name: 'NPM', icon: 'fa-brands fa-npm', color: '#CB3837' },
      { name: 'Webpack', icon: 'fa-solid fa-box-open', color: '#8DD6F9' }
    ]
  },
  {
    title: 'Soft Skills',
    icon: 'fa-solid fa-lightbulb',
    skills: [
      { name: 'Problem Solving', icon: 'fa-solid fa-puzzle-piece', color: '#10b981' },
      { name: 'Collaboration', icon: 'fa-solid fa-people-group', color: '#10b981' },
      { name: 'Communication', icon: 'fa-solid fa-comments', color: '#10b981' },
      { name: 'Time Management', icon: 'fa-solid fa-clock', color: '#10b981' },
      { name: 'Adaptability', icon: 'fa-solid fa-arrows-rotate', color: '#10b981' },
      { name: 'Attention to Detail', icon: 'fa-solid fa-eye', color: '#10b981' }
    ]
  }
])
</script>

<style scoped>
/* Smooth scrollbar */
section::-webkit-scrollbar {
  width: 8px;
}

section::-webkit-scrollbar-track {
  background: #0a0c10;
}

section::-webkit-scrollbar-thumb {
  background: #1e2230;
  border-radius: 4px;
}

section::-webkit-scrollbar-thumb:hover {
  background: #2a3045;
}
</style>