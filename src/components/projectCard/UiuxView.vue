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
          <span class="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">UI/UX Design</span>
          <h1 class="mb-6 text-5xl font-bold tracking-tighter md:text-6xl">User Experience <span class="gradient-text">Portfolio</span></h1>
          <p class="max-w-2xl text-xl text-gray-400">Selected case studies showcasing user-centered design solutions.</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(project, index) in uiuxProjects" :key="project.id"
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

const uiuxProjects = [
  {
    id: 1,
    title: 'FinTrack Mobile App',
    description: 'Complete redesign of a personal finance app focusing on simplicity and data visualization.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&fit=crop',
    tags: [
      { name: 'Figma', class: 'bg-purple-900/30 text-purple-400' },
      { name: 'User Research', class: 'bg-blue-900/30 text-blue-400' },
      { name: 'Prototyping', class: 'bg-pink-900/30 text-pink-400' }
    ]
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Data-heavy SaaS dashboard redesigned for clarity and faster decision-making.',
    image: 'https://images.unsplash.com/photo-1559028016-481772bda87a?w=800&fit=crop',
    tags: [
      { name: 'Adobe XD', class: 'bg-purple-900/30 text-purple-400' },
      { name: 'Usability Testing', class: 'bg-green-900/30 text-green-400' },
      { name: 'Design System', class: 'bg-orange-900/30 text-orange-400' }
    ]
  },
  {
    id: 3,
    title: 'ShopFlow E-commerce',
    description: 'Streamlined checkout flow that increased conversion rates by 34%.',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&fit=crop',
    tags: [
      { name: 'Figma', class: 'bg-purple-900/30 text-purple-400' },
      { name: 'A/B Testing', class: 'bg-red-900/30 text-red-400' },
      { name: 'Wireframing', class: 'bg-indigo-900/30 text-indigo-400' }
    ]
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:deep(body) { font-family: 'Inter', sans-serif; }

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