<template>
  <section id="project" class="min-h-screen text-gray-100 bg-gray-950">
    <div class="min-h-screen bg-mesh">
      <div class="px-6 py-24 mx-auto max-w-7xl lg:px-8">

        <!-- Header -->
        <div class="mb-24 text-center">
          <span class="inline-block px-5 py-2 mb-6 text-xs font-medium tracking-widest uppercase border border-gray-700 rounded-full text-primary">
            What I Do
          </span>
          <h2 class="mb-6 text-5xl font-bold tracking-tighter md:text-7xl">
            <span class="gradient-text">Creative</span> Services
          </h2>
          <p class="max-w-2xl mx-auto text-xl leading-relaxed text-gray-400">
            Transforming ideas into stunning digital experiences. Click any card to explore my work.
          </p>
        </div>

        <!-- Service Cards Grid -->
        <div class="grid max-w-6xl gap-8 mx-auto md:grid-cols-3" style="perspective: 1000px;">

          <!-- UI/UX Card -->
          <RouterLink to="/uiux"
            @mousemove="handleMouseMove($event, 'uiux')"
            @mouseleave="handleMouseLeave('uiux')"
            class="cursor-pointer card-3d group"
            :style="tiltStyles.uiux"
          >
            <div class="relative h-full p-8 overflow-hidden bg-gray-900 border border-gray-800 shadow-xl rounded-3xl hover:shadow-2xl hover:shadow-primary/10">
              <div class="card-inner">
                <div class="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary float-animation">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>

                <h3 class="mb-3 text-2xl font-bold transition-colors group-hover:text-primary">UI/UX Design</h3>
                <p class="mb-6 leading-relaxed text-gray-400">
                  Crafting intuitive interfaces and seamless user experiences that delight and convert.
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">Figma</span>
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary">Adobe XD</span>
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">Prototyping</span>
                </div>

                <!-- <div class="flex items-center gap-2 font-semibold transition-all text-primary group-hover:gap-3">
                  <span>Explore Projects</span>
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div> -->
              </div>

              <div class="absolute w-40 h-40 transition-transform duration-700 rounded-full -bottom-20 -right-20 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl group-hover:scale-150"></div>
            </div>
          </RouterLink>

          <!-- Graphics Card -->
          <RouterLink to="/graphics"
            @mousemove="handleMouseMove($event, 'graphics')"
            @mouseleave="handleMouseLeave('graphics')"
            class="cursor-pointer card-3d group"
            :style="tiltStyles.graphics"
          >
            <div class="relative h-full p-8 overflow-hidden bg-gray-900 border border-gray-800 shadow-xl rounded-3xl hover:shadow-2xl hover:shadow-primary/10">
              <div class="card-inner">
                <div class="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-accent to-orange-500 float-animation" style="animation-delay: 0.5s;">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 class="mb-3 text-2xl font-bold transition-colors group-hover:text-accent">Graphics Design</h3>
                <p class="mb-6 leading-relaxed text-gray-400">
                  Visual storytelling through bold branding, illustrations, and marketing materials.
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">Illustrator</span>
                  <span class="px-3 py-1 text-xs font-medium text-orange-500 rounded-full bg-orange-500/10">Photoshop</span>
                  <span class="px-3 py-1 text-xs font-medium text-pink-500 rounded-full bg-pink-500/10">Branding</span>
                </div>

                <!-- <div class="flex items-center gap-2 font-semibold transition-all text-accent group-hover:gap-3">
                  <span>Explore Projects</span>
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div> -->
              </div>

              <div class="absolute w-40 h-40 transition-transform duration-700 rounded-full -bottom-20 -right-20 bg-gradient-to-br from-accent/20 to-orange-500/20 blur-3xl group-hover:scale-150"></div>
            </div>
          </RouterLink>

          <!-- Frontend Card -->
          <RouterLink to="/frontend"
            @mousemove="handleMouseMove($event, 'frontend')"
            @mouseleave="handleMouseLeave('frontend')"
            class="cursor-pointer card-3d group"
            :style="tiltStyles.frontend"
          >
            <div class="relative h-full p-8 overflow-hidden bg-gray-900 border border-gray-800 shadow-xl rounded-3xl hover:shadow-2xl hover:shadow-primary/10">
              <div class="card-inner">
                <div class="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 float-animation" style="animation-delay: 1s;">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <h3 class="mb-3 text-2xl font-bold transition-colors group-hover:text-emerald-500">Frontend Dev</h3>
                <p class="mb-6 leading-relaxed text-gray-400">
                  Building fast, responsive, and interactive web applications with modern technologies.
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500">React</span>
                  <span class="px-3 py-1 text-xs font-medium text-teal-500 rounded-full bg-teal-500/10">Vue.js</span>
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-500">TypeScript</span>
                </div>

                <!-- <div class="flex items-center gap-2 font-semibold transition-all text-emerald-500 group-hover:gap-3">
                  <span>Explore Projects</span>
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div> -->
              </div>

              <div class="absolute w-40 h-40 transition-transform duration-700 rounded-full -bottom-20 -right-20 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 blur-3xl group-hover:scale-150"></div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const tiltStyles = reactive({
  uiux: {},
  graphics: {},
  frontend: {}
})

const handleMouseMove = (e, cardId) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20

  tiltStyles[cardId] = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`,
    transition: 'transform 0.1s ease-out'
  }
}

const handleMouseLeave = (cardId) => {
  tiltStyles[cardId] = {
    transform: 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:deep(body) { font-family: 'Inter', sans-serif; }

.card-3d {
  transform-style: preserve-3d;
}

.card-inner {
  transform: translateZ(20px);
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-mesh {
  background: 
    radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.06) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(99, 102, 241, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.08) 0px, transparent 50%);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}
</style>