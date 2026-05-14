<template>
  <section id="project" class="min-h-screen px-4 py-20 sm:px-6">

    <!-- Header -->
    <div class="mb-12 text-center">
      <p class="text-[#16db65] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Portfolio</p>
      <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
        My <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] to-[#16db65]">Projects</span>
      </h2>
      <p class="max-w-md mx-auto mt-3 text-base text-gray-500">A curated selection of work across UI/UX, Web, and Graphics Design</p>
    </div>

    <!-- Filter Tabs -->
    <div class="flex flex-wrap justify-center gap-2 mb-10">
      <button
        v-for="f in filters"
        :key="f.value"
        @click="activeFilter = f.value"
        :class="[
          'px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200',
          activeFilter === f.value
            ? 'bg-[#16db65] border-[#16db65] text-black'
            : 'border-white/15 text-white/50 hover:text-white hover:border-white/30'
        ]"
      >
        {{ f.label }}
      </button>
    </div>

    <!-- Featured Projects Grid — modern asymmetric layout -->
    <div class="max-w-6xl mx-auto">

      <!-- Row 1: large + small stack -->
      <div class="grid grid-cols-1 gap-3 mb-3 lg:grid-cols-5">
        <!-- Large card -->
        <div
          v-if="filteredFeatured[0]"
          class="lg:col-span-3 rounded-2xl overflow-hidden cursor-pointer relative border border-white/6 group h-[320px]"
          @click="openModal(filteredFeatured[0])"
        >
          <img :src="filteredFeatured[0].image" :alt="filteredFeatured[0].title"
            class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
            <span :class="['inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold mb-2 w-fit', tagClass(filteredFeatured[0].category)]">
              {{ filteredFeatured[0].categoryLabel }}
            </span>
            <p class="text-xl font-bold leading-snug text-white">{{ filteredFeatured[0].title }}</p>
            <p class="mt-1 text-xs text-white/50">{{ filteredFeatured[0].sub }}</p>
            <div class="flex items-center gap-2 mt-4 transition-all duration-300 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <button class="flex items-center justify-center text-xs text-white transition-colors rounded-full w-7 h-7 bg-white/15 hover:bg-white/25" @click.stop="toggleLike(filteredFeatured[0])">
                <i :class="['fa-heart', filteredFeatured[0].liked ? 'fa-solid text-[#16db65]' : 'fa-regular']"></i>
              </button>
              <button class="flex-1 py-1.5 rounded-lg bg-[#16db65] text-black text-xs font-bold hover:bg-green-400 transition-colors">View Project</button>
            </div>
          </div>
        </div>

        <!-- Right stack: 2 small cards -->
        <div class="flex flex-col gap-3 lg:col-span-2">
          <div
            v-for="p in filteredFeatured.slice(1, 3)"
            :key="p.id"
            class="rounded-2xl overflow-hidden cursor-pointer relative border border-white/6 group flex-1 min-h-[152px]"
            @click="openModal(p)"
          >
            <img :src="p.image" :alt="p.title" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
              <span :class="['inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1.5 w-fit', tagClass(p.category)]">{{ p.categoryLabel }}</span>
              <p class="text-sm font-semibold leading-tight text-white">{{ p.title }}</p>
              <p class="text-white/45 text-[11px] mt-0.5">{{ p.sub }}</p>
              <div class="flex items-center gap-2 mt-3 transition-all duration-300 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <button class="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white text-[10px] hover:bg-white/25 transition-colors" @click.stop="toggleLike(p)">
                  <i :class="['fa-heart', p.liked ? 'fa-solid text-[#16db65]' : 'fa-regular']"></i>
                </button>
                <button class="flex-1 py-1 rounded-lg bg-[#16db65] text-black text-[10px] font-bold hover:bg-green-400 transition-colors">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: three equal cards -->
      <div class="grid grid-cols-1 gap-3 mb-10 sm:grid-cols-3">
        <div
          v-for="p in filteredFeatured.slice(3, 6)"
          :key="p.id"
          class="rounded-2xl overflow-hidden cursor-pointer relative border border-white/6 group h-[210px]"
          @click="openModal(p)"
        >
          <img :src="p.image" :alt="p.title" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/15 to-transparent">
            <span :class="['inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1.5 w-fit', tagClass(p.category)]">{{ p.categoryLabel }}</span>
            <p class="text-sm font-semibold text-white">{{ p.title }}</p>
            <p class="text-white/45 text-[11px] mt-0.5">{{ p.sub }}</p>
            <div class="flex items-center gap-2 mt-3 transition-all duration-300 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <button class="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white text-[10px] hover:bg-white/25 transition-colors" @click.stop="toggleLike(p)">
                <i :class="['fa-heart', p.liked ? 'fa-solid text-[#16db65]' : 'fa-regular']"></i>
              </button>
              <button class="flex-1 py-1 rounded-lg bg-[#16db65] text-black text-[10px] font-bold hover:bg-green-400 transition-colors">View Project</button>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="flex justify-center">
        <router-link
          to="/projects"
          class="group inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl border border-white/15 text-white font-semibold text-sm hover:border-[#16db65]/60 hover:bg-[#16db65]/8 transition-all duration-300"
        >
          <span>View All Projects</span>
          <span class="w-7 h-7 rounded-full bg-white/8 border border-white/12 flex items-center justify-center group-hover:bg-[#16db65]/20 group-hover:border-[#16db65]/40 transition-all duration-300">
            <i class="fa-solid fa-arrow-right text-[11px] text-[#16db65] group-hover:translate-x-0.5 transition-transform duration-200"></i>
          </span>
        </router-link>
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
                <span :class="['inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3', tagClass(selectedProject.category)]">
                  {{ selectedProject.categoryLabel }}
                </span>
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
            <div class="flex flex-wrap gap-3">
              <a :href="selectedProject.liveUrl || '#'" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#16db65] text-black font-bold text-sm hover:bg-green-400 transition-colors">
                <i class="text-xs fa-solid fa-arrow-up-right-from-square"></i> Live Preview
              </a>
              <button class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/7 transition-colors">
                <i class="text-xs fa-regular fa-file-lines"></i> Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { allProjects } from '../data/projects.js'

const filters = [
  { label: 'All Work', value: 'all' },
  { label: 'UI/UX Design', value: 'uiux' },
  { label: 'Web Design', value: 'web' },
  { label: 'Graphics Design', value: 'graphics' },
]

const activeFilter = ref('all')
const selectedProject = ref(null)

// Show only first 6 as "featured" on home section
const featuredProjects = computed(() => allProjects.slice(0, 6))

const filteredFeatured = computed(() =>
  activeFilter.value === 'all'
    ? featuredProjects.value
    : featuredProjects.value.filter(p => p.category === activeFilter.value)
)

const tagClass = (cat) => ({
  uiux: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  web: 'bg-[#16db65]/15 text-[#16db65] border border-[#16db65]/25',
  graphics: 'bg-amber-500/15 text-amber-400 border border-amber-500/25',
}[cat])

function openModal(project) {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedProject.value = null
  document.body.style.overflow = ''
}

function navigate(dir) {
  const visible = filteredFeatured.value
  const idx = visible.findIndex(p => p.id === selectedProject.value.id)
  const next = visible[idx + dir]
  if (next) selectedProject.value = next
}

function toggleLike(project) {
  project.liked = !project.liked
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity .25s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active > div, .modal-leave-active > div { transition: transform .3s cubic-bezier(.23,1,.32,1); }
.modal-enter-from > div, .modal-leave-to > div { transform: scale(.95) translateY(16px); }
</style>