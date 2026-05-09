<template>
  <nav :class="[
    'fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300',
    'w-[calc(100%-2rem)] max-w-[1100px]',
    'border border-white/20',
    'shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_0_0_1px_rgba(255,255,255,0.1)]',
    isScrolled
      ? 'bg-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.15)]'
      : 'bg-white/10'
  ]" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);">
    <div class="flex items-center justify-between px-6 md:px-8 h-[60px]">

      <!-- Logo -->
      <a @click.prevent="scrollToSection('hero')" href="#hero" class="flex items-center gap-2 cursor-pointer">
        <img src="../assets/logo/my_logo.png" alt="Tawsif Tamim" class="object-contain w-auto h-8" />
        <span class="text-2xl font-bold tracking-tight text-[#16db65]">
          Tawsif <span class="text-white">Tamim</span>
        </span>
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-9">
        <li v-for="item in navItems" :key="item.id">

          <a :href="`#${item.id}`" @click.prevent="scrollToSection(item.id)" :class="[
            'relative text-sm font-semibold transition-colors duration-300',
            activeSection === item.id
              ? 'text-[#16db65]'
              : 'text-white hover:text-[#16db65]'
          ]">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button @click="toggleMenu" class="p-2 -mr-2 md:hidden" aria-label="Toggle menu">
        <div class="relative flex flex-col justify-between w-5 h-4">
          <span class="block h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
            :class="isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''" />
          <span class="block h-0.5 bg-white rounded-full transition-all duration-300"
            :class="isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''" />
          <span class="block h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
            :class="isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''" />
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="-translate-y-3 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
      <div v-if="isMobileMenuOpen"
        class="md:hidden absolute top-[calc(100%+12px)] left-0 w-full z-50 rounded-2xl overflow-hidden border border-white/10"
        style="backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); background: rgba(8, 12, 10, 0.85);">
        <ul class="px-2 py-2">
          <li v-for="(item) in navItems" :key="item.id">

            <a :href="`#${item.id}`" @click.prevent="scrollToSection(item.id); isMobileMenuOpen = false"
              class="flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-xl"
              :class="activeSection === item.id
                ? 'text-[#16db65] bg-[#16db65]/10'
                : 'text-white/70 hover:text-white hover:bg-white/5'">
              <span>{{ item.label }}</span>
              <span class="w-1.5 h-1.5 rounded-full bg-[#16db65] transition-opacity duration-200"
                :class="activeSection === item.id ? 'opacity-100' : 'opacity-0'" />
            </a>
          </li>
        </ul>

        <!-- <div class="flex items-center justify-between pt-2 mx-4 mb-3 border-t border-white/8">
          <span class="text-[11px] text-white/25 font-medium tracking-widest uppercase">Portfolio</span>
          <span class="text-[11px] text-[#16db65]/50 font-medium">tawsiftamim.dev</span>
        </div> -->
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { label: 'HOME', id: 'hero' },
  { label: 'ABOUT', id: 'about' },
  { label: 'EXPERIENCE', id: 'experience' },
  { label: 'SKILL', id: 'skill' },
  { label: 'PROJECT', id: 'project' },
  { label: 'CONTACT', id: 'contact' },
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  if (isMobileMenuOpen.value) isMobileMenuOpen.value = false
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.classList.remove('section-animate')
  void el.offsetWidth
  el.classList.add('section-animate')
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

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