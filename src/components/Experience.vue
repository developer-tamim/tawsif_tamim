<template>
  <section id="experience" class="py-12 text-white bg-transparent sm:py-16 md:py-20">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center gap-3 mb-8 sm:gap-4 sm:mb-10 md:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.32em] uppercase">
          Experience
        </h2>
      </div>

      <div class="space-y-8 sm:space-y-10 md:space-y-12">
        <!-- Experience Item -->
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="relative pl-6 sm:pl-8 transition-all duration-300 border-l-2 border-gray-800 group hover:border-[#16db65]"
        >
          <div class="grid gap-4 sm:gap-6 md:grid-cols-12">
            <!-- Date -->
            <div class="md:col-span-3">
              <div class="font-mono text-xs sm:text-sm tracking-widest text-[#16db65]">
                {{ exp.period }}
              </div>
              <div class="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-400">
                {{ exp.location }}
              </div>
            </div>

            <!-- Content -->
            <div class="md:col-span-9">
              <div class="flex flex-wrap items-center gap-2 mb-2 sm:gap-3">
                <h3 class="text-lg font-semibold text-white sm:text-xl md:text-2xl">
                  {{ exp.role }}
                </h3>
                <span class="hidden text-gray-400 sm:inline">•</span>
                <a
                  :href="exp.companyLink"
                  target="_blank"
                  class="text-sm sm:text-base font-medium transition-colors text-[#09b94f] hover:text-[#16db65]"
                >
                  {{ exp.company }}
                </a>
              </div>

              <!-- Description -->
              <p class="mb-3 text-sm leading-relaxed text-gray-300 sm:mb-4 sm:text-base">
                {{ exp.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  v-for="tech in exp.technologies"
                  :key="tech"
                  class="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium transition-colors bg-gray-900 border border-gray-700 rounded-full text-[#16db65] hover:border-[#16db65]"
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
/* Subtle hover glow effect - disabled on touch devices via media query */
@media (hover: hover) {
  .group:hover {
    transform: translateX(4px);
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .group {
    transition: none;
  }
  .group:hover {
    transform: none;
  }
}
</style>