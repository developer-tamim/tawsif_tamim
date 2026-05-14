<template>
  <div class="min-h-screen px-4 py-20 sm:px-6">

    <!-- Back nav -->
    <div class="max-w-6xl mx-auto mb-12">
      <router-link
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-white/40 hover:text-white group"
      >
        <span class="flex items-center justify-center transition-colors border rounded-full w-7 h-7 border-white/12 group-hover:border-white/30">
          <i class="fa-solid fa-chevron-left text-[10px]"></i>
        </span>
        Back to Home
      </router-link>
    </div>

    <!-- Header -->
    <div class="mb-12 text-center">
      <p class="text-[#16db65] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Portfolio</p>
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
        All <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] to-[#16db65]">Projects</span>
      </h1>
      <p class="max-w-md mx-auto mt-3 text-base text-gray-500">
        {{ filteredProjects.length }} projects across UI/UX, Web, and Graphics Design
      </p>
    </div>

    <!-- Filter Tabs -->
    <div class="flex flex-wrap justify-center gap-2 mb-10">
      <button
        v-for="f in filters"
        :key="f.value"
        @click="setFilter(f.value)"
        :class="[
          'px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200',
          activeFilter === f.value
            ? 'bg-[#16db65] border-[#16db65] text-black'
            : 'border-white/15 text-white/50 hover:text-white hover:border-white/30'
        ]"
      >
        {{ f.label }}
        <span :class="['ml-1.5 text-[10px] font-bold', activeFilter === f.value ? 'text-black/60' : 'text-white/25']">
          {{ countFor(f.value) }}
        </span>
      </button>
    </div>

    <!-- Masonry Grid -->
    <div class="max-w-6xl gap-3 mx-auto columns-1 sm:columns-2 lg:columns-3">
      <TransitionGroup name="fade">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="relative mb-3 overflow-hidden border cursor-pointer break-inside-avoid rounded-2xl border-white/6 group"
          @click="openModal(project)"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="block object-cover w-full transition-transform duration-500 group-hover:scale-105"
            :style="{ height: cardHeight(project.id) }"
          />
          <div class="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent group-hover:opacity-100">
            <span :class="['inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold mb-2 w-fit', tagClass(project.category)]">
              {{ project.categoryLabel }}
            </span>
            <p class="text-sm font-semibold leading-tight text-white">{{ project.title }}</p>
            <p class="text-white/50 text-xs mt-0.5">{{ project.sub }}</p>
            <div class="flex items-center gap-2 mt-3">
              <button class="flex items-center justify-center text-xs text-white transition-colors rounded-full w-7 h-7 bg-white/15 hover:bg-white/25" @click.stop="toggleLike(project)">
                <i :class="['fa-heart', project.liked ? 'fa-solid text-[#16db65]' : 'fa-regular']"></i>
              </button>
              <button class="flex-1 py-1.5 rounded-lg bg-[#16db65] text-black text-xs font-bold hover:bg-green-400 transition-colors">
                View Project
              </button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Empty state -->
    <div v-if="filteredProjects.length === 0" class="py-24 text-center text-white/30">
      <i class="block mb-4 text-4xl fa-regular fa-folder-open"></i>
      <p class="text-sm">No projects in this category yet.</p>
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
  </div>
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

// Varying heights for masonry visual rhythm
const heights = ['240px', '200px', '280px', '220px', '260px', '200px', '300px', '240px', '220px', '260px', '200px', '280px']
const cardHeight = (id) => heights[id % heights.length]

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter.value)
)

const countFor = (val) =>
  val === 'all' ? allProjects.length : allProjects.filter(p => p.category === val).length

function setFilter(val) {
  activeFilter.value = val
}

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
  const visible = filteredProjects.value
  const idx = visible.findIndex(p => p.id === selectedProject.value.id)
  const next = visible[idx + dir]
  if (next) selectedProject.value = next
}

function toggleLike(project) {
  project.liked = !project.liked
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s, transform .3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: scale(0.97); }

.modal-enter-active, .modal-leave-active { transition: opacity .25s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active > div, .modal-leave-active > div { transition: transform .3s cubic-bezier(.23,1,.32,1); }
.modal-enter-from > div, .modal-leave-to > div { transform: scale(.95) translateY(16px); }
</style>