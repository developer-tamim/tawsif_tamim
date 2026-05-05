<template>
  <div class="min-h-screen text-gray-100 bg-transparent">
    <Navbar />
    <div class="min-h-screen bg-mesh">
      <div class="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <RouterLink to="/" class="inline-flex items-center gap-2 px-6 py-3 mb-12 font-medium transition-all duration-300 bg-gray-900 rounded-full shadow-lg back-btn hover:shadow-xl">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </RouterLink>

        <div class="mb-16 page-transition">
          <span class="inline-block px-4 py-1.5 text-sm font-medium bg-emerald-500/10 text-emerald-500 rounded-full mb-4">Frontend Development</span>
          <h1 class="mb-6 text-5xl font-bold tracking-tighter md:text-6xl">Code <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Craftsmanship</span></h1>
          <p class="max-w-2xl text-xl text-gray-400">Web applications built with performance, accessibility, and beautiful interactions in mind.</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(project, index) in frontendProjects" :key="project.id"
            class="overflow-hidden bg-gray-900 border border-gray-800 shadow-lg project-card rounded-3xl"
            :style="{ animationDelay: `${index * 0.15}s` }">
            <div class="h-64 overflow-hidden image-reveal">
              <img :src="project.image" :alt="project.title" class="object-cover w-full h-full transition-transform duration-700 hover:scale-110">
            </div>
            <div class="p-6">
              <h3 class="mb-2 text-xl font-bold">{{ project.title }}</h3>
              <p class="mb-4 text-sm text-gray-400">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag.name"
                  class="tag-bounce px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                  :class="tag.class">{{ tag.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Navbar from '../Navbar.vue';

const frontendProjects = [
  {
    id: 1,
    title: 'DataViz Dashboard',
    description: 'Real-time analytics platform with interactive charts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop',
    tags: [
      { name: 'React', class: 'bg-cyan-900/30 text-cyan-400' },
      { name: 'TypeScript', class: 'bg-blue-900/30 text-blue-400' },
      { name: 'D3.js', class: 'bg-emerald-900/30 text-emerald-400' }
    ]
  },
  {
    id: 2,
    title: 'ShopNexus Platform',
    description: 'Full-stack e-commerce with real-time inventory and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop',
    tags: [
      { name: 'Vue 3', class: 'bg-green-900/30 text-green-400' },
      { name: 'Pinia', class: 'bg-orange-900/30 text-orange-400' },
      { name: 'Tailwind', class: 'bg-sky-900/30 text-sky-400' }
    ]
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    description: 'Award-winning portfolio site with smooth animations and 3D elements.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&fit=crop',
    tags: [
      { name: 'Next.js', class: 'bg-cyan-900/30 text-cyan-400' },
      { name: 'Three.js', class: 'bg-purple-900/30 text-purple-400' },
      { name: 'Framer Motion', class: 'bg-yellow-900/30 text-yellow-400' }
    ]
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:deep(body) { font-family: 'Inter', sans-serif; }

.bg-mesh {
  background: 
    radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.06) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(99, 102, 241, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.08) 0px, transparent 50%);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.page-transition {
  animation: slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.project-card {
  animation: slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.15);
}

.back-btn {
  position: relative;
  overflow: hidden;
}

.back-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  transition: left 0.5s;
}

.back-btn:hover::before {
  left: 100%;
}

.image-reveal {
  overflow: hidden;
}

.tag-bounce {
  cursor: default;
}
</style>