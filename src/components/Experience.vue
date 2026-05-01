<template>
  <section id="experience" class="py-20 text-white bg-gray-950">
    <div class="max-w-5xl px-6 mx-auto">
      <!-- Section Header -->
      <div class="flex items-center gap-4 mb-12">
        <!-- <div class="w-12 h-px bg-gradient-to-r from-cyan-400 to-purple-500"></div> -->
        <h2 class="text-4xl font-bold tracking-tight">
          Experience
        </h2>
      </div>

      <div class="space-y-12">
        <!-- Experience Item -->
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="relative pl-8 transition-all duration-300 border-l-2 border-gray-800 group hover:border-[#16db65]"
        >
          <!-- Timeline Dot -->
          <!-- <div class="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-gray-800 group-hover:bg-cyan-400 transition-colors duration-300"></div> -->

          <div class="grid gap-6 md:grid-cols-12">
            <!-- Date -->
            <div class="md:col-span-3">
              <div class="font-mono text-sm tracking-widest text-[#16db65]">
                {{ exp.period }}
              </div>
              <div class="mt-1 text-sm text-gray-400">
                {{ exp.location }}
              </div>
            </div>

            <!-- Content -->
            <div class="md:col-span-9">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="text-2xl font-semibold text-white">
                  {{ exp.role }}
                </h3>
                <span class="text-gray-400">•</span>
                <a
                  :href="exp.companyLink"
                  target="_blank"
                  class="font-medium transition-colors text-[#09b94f] hover:text-[#16db65]"
                >
                  {{ exp.company }}
                </a>
              </div>

              <!-- Description -->
              <p class="mb-4 leading-relaxed text-gray-300">
                {{ exp.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in exp.technologies"
                  :key="tech"
                  class="px-3 py-1 text-xs font-medium transition-colors bg-gray-900 border border-gray-700 rounded-full text-[#16db65] hover:border-[#16db65]"
                >
                  {{ tech }}
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

const experiences = ref([
  {
    period: "JAN 2025 - PRESENT",
    location: "Chattogram, Bangladesh",
    role: "Senior Frontend Developer",
    company: "TechNova Solutions",
    companyLink: "https://technova.com",
    description: "Leading the frontend architecture for multiple SaaS products. Built responsive web applications using Vue.js and Tailwind CSS, improving performance by 40%.",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "Vite", "Figma"]
  },
  {
    period: "JUN 2023 - DEC 2024",
    location: "Remote",
    role: "Frontend Developer",
    company: "PixelCraft Agency",
    companyLink: "#",
    description: "Developed modern, high-performance websites and web applications for various clients. Specialized in creating pixel-perfect, accessible user interfaces.",
    technologies: ["Vue 3", "Nuxt.js", "Tailwind", "JavaScript", "GSAP"]
  },
  {
    period: "MAR 2022 - MAY 2023",
    location: "Dhaka, Bangladesh",
    role: "Junior Web Developer",
    company: "BrightFuture IT",
    companyLink: "#",
    description: "Worked on full-stack web applications, focusing on frontend development with React and Vue. Collaborated with designers and backend teams to deliver quality products.",
    technologies: ["Vue.js", "React", "Laravel", "Bootstrap", "MySQL"]
  }
])
</script>

<style scoped>
/* Optional: Add subtle hover glow effect */
.group:hover {
  transform: translateX(4px);
}
</style>