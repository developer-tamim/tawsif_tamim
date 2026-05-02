<template>
  <section id="experience" class="py-20 text-white bg-transparent">
    <div class="max-w-6xl px-6 mx-auto lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center gap-4 mb-12">
        <!-- <div class="w-12 h-px bg-gradient-to-r from-cyan-400 to-purple-500"></div> -->
        <h2 class="text-4xl font-bold tracking-[0.32em] uppercase">
          Experience
        </h2>
        <!-- <span class="text-sm font-medium tracking-[0.32em] uppercase text-[#16db65]">
            Experience
          </span> -->
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
    period: "NOV 2023 - DEC 2025",
    location: "Chattogram, Bangladesh",
    role: "UI/UX Designer",
    company: "Iconic Solutions (PVT) Ltd.",
    companyLink: "http://www.iconicsolutionz.com/",
    description: "Sole designer leading UX/UI for multiple SaaS and CRM products, including dashboards and mobile applications. Owned the full design lifecycle—user research, wireframing, prototyping, and high-fidelity mockups. Contributed to additional projects across the product suite, ensuring consistent design standards and user-centered solutions.",
    technologies: ["Figma", "Adobe XD"]
  },
  {
    period: "NOV 2023 - DEC 2025",
    location: "Chattogram, Bangladesh",
    role: "Graphic Designer",
    company: "Iconic Solutions (PVT) Ltd.",
    companyLink: "http://www.iconicsolutionz.com/",
    description: "Produced digital marketing assets including social media posters, thumbnails, and promotional graphics. Maintained brand consistency across all visual content while meeting tight deadlines for ongoing campaigns.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Canva"]
  },
  {
    period: "NOV 2023 - DEC 2025",
    location: "Chattogram, Bangladesh",
    role: "Web Designer & Frontend Developer",
    company: "Iconic Solutions (PVT) Ltd.",
    companyLink: "http://www.iconicsolutionz.com/",
    description: "Contributed to CRM frontend development and independently built client-facing websites including email signatures, portfolio sites, and a real estate platform. Translated designs into responsive, functional interfaces while collaborating with backend teams on integrated solutions.",
    technologies: ["Vue.js", "Tailwind CSS", "Laravel", "Bootstrap", "MySQL", "HTML", "CSS", "JavaScript", "Git", "GitHub"]
  }
])
</script>

<style scoped>
/* Optional: Add subtle hover glow effect */
.group:hover {
  transform: translateX(4px);
}
</style>