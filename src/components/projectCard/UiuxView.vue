<template>
  <section id="project" class="min-h-screen px-4 py-20 sm:px-6 bg-black">
    <div class="max-w-6xl mx-auto">

      <!-- Back Button -->
      <RouterLink to="/" class="group inline-flex items-center gap-3 px-6 py-3 mb-12 rounded-2xl border border-white/15 text-white font-semibold text-sm hover:border-[#16db65]/60 hover:bg-[#16db65]/8 transition-all duration-300">
        <span class="w-7 h-7 rounded-full bg-white/8 border border-white/12 flex items-center justify-center group-hover:bg-[#16db65]/20 group-hover:border-[#16db65]/40 transition-all duration-300">
          <i class="fa-solid fa-arrow-left text-[11px] text-[#16db65] group-hover:-translate-x-0.5 transition-transform duration-200"></i>
        </span>
        <span>Back to Services</span>
      </RouterLink>

      <!-- Header -->
      <div class="mb-16 page-transition">
        <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-[#16db65]/15 text-[#16db65] border border-[#16db65]/25">UI/UX Design</span>
        <h1 class="mb-6 text-5xl font-bold tracking-tighter text-white md:text-6xl">
          User Experience <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] to-[#16db65]">Portfolio</span>
        </h1>
        <p class="max-w-2xl text-xl text-gray-500">Selected case studies showcasing user-centered design solutions.</p>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in uiuxProjects"
          :key="project.id"
          class="rounded-2xl overflow-hidden cursor-pointer relative border border-white/6 group bg-[#0a0a0a] project-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
          @click="openModal(project)"
        >
          <div class="h-64 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                :class="[
                  'inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-300 hover:-translate-y-0.5',
                  tagClass(tag.type)
                ]"
              >
                {{ tag.name }}
              </span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white">{{ project.title }}</h3>
            <p class="text-sm text-gray-500">{{ project.description }}</p>
            <!-- <div class="flex items-center gap-2 mt-4 transition-all duration-300 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <button class="flex items-center justify-center text-xs text-white transition-colors rounded-full w-7 h-7 bg-white/15 hover:bg-white/25" @click.stop="toggleLike(project)">
                <i :class="['fa-heart', project.liked ? 'fa-solid text-[#16db65]' : 'fa-regular']"></i>
              </button>
              <button class="flex-1 py-1.5 rounded-lg bg-[#16db65] text-black text-xs font-bold hover:bg-green-400 transition-colors">View Project</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Overlay -->
    <Transition name="modal">
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-[100] bg-black/88 flex items-center justify-center p-4 sm:p-6"
        @click.self="closeModal"
      >
        <div class="relative bg-[#0d1410] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <button @click="closeModal" class="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-white/15 transition-colors backdrop-blur-md">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full rounded-t-3xl object-cover max-h-[400px]" />
          <div class="p-6 sm:p-7">
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="tag in selectedProject.tags"
                    :key="tag.name"
                    :class="['inline-flex px-3 py-1 rounded-full text-xs font-semibold', tagClass(tag.type)]"
                  >
                    {{ tag.name }}
                  </span>
                </div>
                <h3 class="text-2xl font-bold tracking-tight text-white">{{ selectedProject.title }}</h3>
                <p class="text-gray-500 text-sm mt-0.5">{{ selectedProject.sub }}</p>
              </div>
              <div class="flex gap-2">
                <button @click="navigate(-1)" class="flex items-center justify-center text-white transition-colors border rounded-full w-9 h-9 bg-white/7 border-white/12 hover:bg-white/15">
                  <i class="text-xs fa-solid fa-chevron-left"></i>
                </button>
                <button @click="navigate(1)" class="flex items-center justify-center text-white transition-colors border rounded-full w-9 h-9 bg-white/7 border-white/12 hover:bg-white/15">
                  <i class="text-xs fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <p class="mt-4 mb-5 text-sm leading-relaxed text-gray-400">{{ selectedProject.description }}</p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span v-for="m in selectedProject.meta" :key="m.text" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs text-white/60">
                <i :class="`fa-regular ${m.icon} text-[13px]`"></i>{{ m.text }}
              </span>
            </div>
            <p class="text-[11px] font-semibold text-gray-600 uppercase tracking-widest mb-2">Tools used</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="t in selectedProject.tools" :key="t" class="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-xs text-white/70">{{ t }}</span>
            </div>
            <!-- <div class="flex flex-wrap gap-3">
              <a :href="selectedProject.liveUrl || '#'" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#16db65] text-black font-bold text-sm hover:bg-green-400 transition-colors">
                <i class="text-xs fa-solid fa-arrow-up-right-from-square"></i> Live Preview
              </a>
              <button class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/7 transition-colors">
                <i class="text-xs fa-regular fa-file-lines"></i> Case Study
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const selectedProject = ref(null)

const uiuxProjects = [
  {
    id: 1,
    title: 'CostCue Mobile App',
    sub: 'Mobile',
    description: 'Complete redesign of a personal finance app focusing on simplicity and data visualization.',
    // image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&fit=crop',
    image: new URL('../../assets/project/ui_ux/home.png', 
    import.meta.url).href,
    liked: false,
    tags: [
      { name: 'Mobile', type: 'mobile' },
      { name: 'Figma', type: 'tool' },
      { name: 'User Research', type: 'tool' }
    ],
    meta: [
      { text: '1 months', icon: 'fa-clock' },
      { text: 'Team of 1', icon: 'fa-user' }
    ],
    tools: ['Figma'],
    liveUrl: '#'
  },
  // {
  //   id: 2,
  //   title: 'Analytics Dashboard',
  //   sub: 'Web · 2024',
  //   description: 'Data-heavy SaaS dashboard redesigned for clarity and faster decision-making.',
  //   image: 'https://images.unsplash.com/photo-1559028016-481772bda87a?w=800&fit=crop',
  //   liked: false,
  //   tags: [
  //     { name: 'Web', type: 'web' },
  //     { name: 'Adobe XD', type: 'tool' },
  //     { name: 'Usability Testing', type: 'tool' }
  //   ],
  //   meta: [
  //     { text: '4 months', icon: 'fa-clock' },
  //     { text: 'Solo project', icon: 'fa-user' }
  //   ],
  //   tools: ['Adobe XD', 'Hotjar', 'Jira'],
  //   liveUrl: '#'
  // },
  // {
  //   id: 3,
  //   title: 'ShopFlow E-commerce',
  //   sub: 'Web · 2023',
  //   description: 'Streamlined checkout flow that increased conversion rates by 34%.',
  //   image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&fit=crop',
  //   liked: false,
  //   tags: [
  //     { name: 'Web', type: 'web' },
  //     { name: 'A/B Testing', type: 'tool' },
  //     { name: 'Wireframing', type: 'tool' }
  //   ],
  //   meta: [
  //     { text: '3 months', icon: 'fa-clock' },
  //     { text: 'Team of 3', icon: 'fa-user' }
  //   ],
  //   tools: ['Figma', 'Optimizely', 'Miro'],
  //   liveUrl: '#'
  // }
]

const tagClass = (type) => ({
  web: 'bg-[#16db65]/15 text-[#16db65] border border-[#16db65]/25',
  mobile: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  tool: 'bg-white/5 text-white/50 border border-white/10',
}[type])

function openModal(project) {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedProject.value = null
  document.body.style.overflow = ''
}

function navigate(dir) {
  const idx = uiuxProjects.findIndex(p => p.id === selectedProject.value.id)
  const next = uiuxProjects[idx + dir]
  if (next) selectedProject.value = next
}

function toggleLike(project) {
  project.liked = !project.liked
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:deep(body) { font-family: 'Inter', sans-serif; }

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
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(22, 219, 101, 0.08);
}

/* Modal transitions */
.modal-enter-active, .modal-leave-active { transition: opacity .25s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active > div, .modal-leave-active > div { transition: transform .3s cubic-bezier(.23,1,.32,1); }
.modal-enter-from > div, .modal-leave-to > div { transform: scale(.95) translateY(16px); }
</style>