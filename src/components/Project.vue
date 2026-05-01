<template>
  <section id="projects" class="py-24 bg-gray-50 dark:bg-gray-950">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      
      <!-- Header -->
      <div class="mb-20 text-center">
        <span class="inline-block px-5 py-2 text-xs font-medium tracking-widest uppercase border border-gray-300 rounded-full dark:border-gray-700 text-primary">
          Selected Works
        </span>
        <h2 class="mt-6 text-4xl font-bold tracking-tighter lg:text-5xl dark:text-white">
          Projects That Matter
        </h2>
        <p class="max-w-xl mx-auto mt-5 text-lg text-gray-600 dark:text-gray-400">
          A few things I've built with love, code, and way too much coffee.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        
        <!-- Project 1 -->
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="relative overflow-hidden transition-all duration-700 bg-white shadow-lg group dark:bg-gray-900 rounded-3xl hover:shadow-2xl hover:-translate-y-2"
          @mousemove="handleMouseMove($event, index)"
          @mouseleave="handleMouseLeave(index)"
          :style="{ transform: `perspective(1000px) rotateX(${tilt[index]?.x || 0}deg) rotateY(${tilt[index]?.y || 0}deg)` }"
        >
          <!-- Image Container -->
          <div class="relative overflow-hidden h-80">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="absolute inset-0 object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
            >
            
            <!-- Spotlight Glow -->
            <div 
              class="absolute transition-opacity duration-500 opacity-0 pointer-events-none -inset-px group-hover:opacity-40 rounded-3xl"
              :style="spotlightStyle[index]"
            ></div>

            <!-- Dark Overlay -->
            <div class="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-60 group-hover:opacity-80"></div>

            <!-- Tech Tags -->
            <div class="absolute flex flex-wrap gap-2 bottom-6 left-6">
              <span 
                v-for="(tech, i) in project.technologies.slice(0, 3)"
                :key="tech"
                class="px-4 py-1.5 text-xs font-medium bg-white/90 dark:bg-black/70 backdrop-blur-md text-gray-900 dark:text-white rounded-2xl shadow-sm transition-all duration-300 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                :style="{ transitionDelay: `${i * 60}ms` }"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-primary">
              {{ project.title }}
            </h3>
            
            <p class="mt-4 leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-400 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300">
              {{ project.description }}
            </p>

            <!-- Links -->
            <div class="flex gap-4 mt-8">
              <a 
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                class="flex-1 flex items-center justify-center gap-2 py-4 font-medium text-white bg-primary hover:bg-primary/90 rounded-2xl transition-all active:scale-[0.97]"
              >
                Live Demo
                <span class="text-xl">↗</span>
              </a>
              <a 
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="flex-1 py-4 font-medium text-center border border-gray-300 dark:border-gray-700 hover:border-gray-400 rounded-2xl transition-all active:scale-[0.97]"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="mt-20 text-center">
        <button 
          @click="viewAllProjects"
          class="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium transition-all border-2 border-gray-900 group dark:border-white rounded-3xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 active:scale-95"
        >
          Explore All Projects
          <span class="transition-transform group-active:rotate-45">→</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const projects = ref([
  {
    title: "NovaStore",
    description: "Modern full-stack e-commerce platform with real-time inventory, secure payments, and beautiful admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&fit=crop",
    technologies: ["Vue 3", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "FlowTask",
    description: "Intelligent task management app with drag & drop kanban, team collaboration, and AI-powered productivity insights.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&fit=crop",
    technologies: ["Nuxt 3", "TypeScript", "Supabase", "Pinia"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Aether Analytics",
    description: "Powerful SaaS analytics dashboard for AI products featuring real-time charts, predictive metrics, and dark mode.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop",
    technologies: ["React", "Recharts", "Firebase", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Pulse Social",
    description: "Minimalist social media platform focused on meaningful connections with encrypted messaging and content discovery.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  }
])

const tilt = reactive({})
const spotlightStyle = reactive({})

const handleMouseMove = (e, index) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const rotateX = ((y - rect.height / 2) / 18) * -1
  const rotateY = ((x - rect.width / 2) / 18)
  
  tilt[index] = { x: rotateX, y: rotateY }

  // Dynamic spotlight
  const spotlightX = (x / rect.width) * 100
  const spotlightY = (y / rect.height) * 100
  
  spotlightStyle[index] = {
    background: `radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(255, 255, 255, 0.45), transparent 65%)`
  }
}

const handleMouseLeave = (index) => {
  tilt[index] = { x: 0, y: 0 }
  spotlightStyle[index] = { background: 'none' }
}

const viewAllProjects = () => {
  alert("Navigating to all projects page...")
  // router.push('/projects')
}
</script>