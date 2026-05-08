<template>
  <nav
    :class="[
      'fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300',
      'w-[calc(100%-2rem)] max-w-[1100px]',
      'border border-white/20',
      'shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_0_0_1px_rgba(255,255,255,0.1)]',
      isScrolled
        ? 'bg-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.15)]'
        : 'bg-white/10'
    ]"
    style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
  >
    <div class="flex items-center justify-between px-6 md:px-8 h-[60px]">

      <!-- Logo -->
      <span
        @click="scrollToSection('hero')"
        class="text-2xl font-bold tracking-tight text-[#16db65] cursor-pointer"
      >
        Tawsif <span class="text-white">Tamim</span>
      </span>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-9">
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id)"
            :class="[
              'relative text-sm font-semibold transition-colors duration-300',
              activeSection === item.id
                ? 'text-[#16db65]'
                : 'text-white hover:text-[#16db65]'
            ]"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button @click="toggleMenu" class="md:hidden flex flex-col gap-[5px]">
        <span
          v-for="i in 3"
          :key="i"
          class="block w-6 h-0.5 bg-[#16db65] transition-all duration-300"
          :class="{
            'rotate-45 translate-y-[7px]': isMobileMenuOpen && i === 1,
            'opacity-0': isMobileMenuOpen && i === 2,
            '-rotate-45 -translate-y-[7px]': isMobileMenuOpen && i === 3
          }"
        />
      </button>
    </div>

    <!-- Backdrop -->
    <div
      v-if="isMobileMenuOpen"
      @click="isMobileMenuOpen = false"
      class="fixed inset-0 z-40 md:hidden"
    />

    <!-- Mobile Menu -->
    <div
      :class="[
        'md:hidden absolute top-full left-0 w-full mt-2.5 z-50 rounded-2xl overflow-hidden transition-all duration-300',
        'border border-white/20',
        isScrolled
          ? 'bg-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.15)]'
          : 'bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_0_0_1px_rgba(255,255,255,0.1)]',
        isMobileMenuOpen
          ? 'max-h-[320px] opacity-100 translate-y-0 scale-100'
          : 'max-h-0 opacity-0 -translate-y-2 scale-95 pointer-events-none'
      ]"
      style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
    >
      <ul class="p-5 divide-y divide-white/10">
        <li
          v-for="(item, index) in navItems"
          :key="item.id"
          class="py-3 menu-item"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <a :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id); isMobileMenuOpen = false"
            class="block font-semibold text-white hover:text-[#16db65] transition-all duration-300"
            :class="isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { label: 'HOME',       id: 'hero' },
  { label: 'ABOUT',      id: 'about' },
  { label: 'EXPERIENCE', id: 'experience' },
  { label: 'SKILL',      id: 'skill' },
  { label: 'PROJECT',    id: 'project' },
  { label: 'CONTACT',    id: 'contact' },
]

const isScrolled       = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection    = ref('hero')  // Changed from 'home' to 'hero'

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// ── Scroll to section + trigger animation ──────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  // Remove then re-add animation class so it replays on every click
  el.classList.remove('section-animate')
  void el.offsetWidth // force reflow
  el.classList.add('section-animate')

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ── Active section via IntersectionObserver ────────────────────────────────
let observer = null

function setupObserver() {
  const sections = navItems.map(i => document.getElementById(i.id)).filter(Boolean)
  if (!sections.length) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '-70px 0px -20% 0px'
    }
  )

  sections.forEach(sec => observer.observe(sec))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<style scoped>
.menu-item a {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease;
}
</style>

<!-- 🌐 Global styles for section animation (not scoped) -->
<style>
@keyframes sectionSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-animate {
  animation: sectionSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>