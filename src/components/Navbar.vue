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
      <span class="text-2xl font-bold tracking-tight text-[#16db65]">
        Tawsif <span class="text-white">Tamim</span>
      </span>

      <!-- Menu -->
      <ul class="hidden md:flex gap-9">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            :class="[
              'relative text-sm font-semibold transition-colors duration-300',
              activeSection === item.href
                ? 'text-[#16db65]'
                : 'text-white hover:text-[#16db65]'
            ]"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button
        @click="toggleMenu"
        class="md:hidden flex flex-col gap-[5px]"
      >
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

    <!-- 🌫 BACKDROP -->
    <div
      v-if="isMobileMenuOpen"
      @click="isMobileMenuOpen = false"
      class="fixed inset-0 z-40 md:hidden"
    ></div>

    <!-- 📱 MOBILE MENU -->
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
      <ul class="p-5 divide-y divide-white/10 backdrop-layer">

        <li
          v-for="(item, index) in navItems"
          :key="item.href"
          class="py-3 menu-item"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <a
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="block font-semibold text-white hover:text-[#16db65] transition-all duration-300"
            :class="isMobileMenuOpen
              ? 'opacity-100 translate-y-0 blur-80'
              : 'opacity-0 translate-y-3 blur-sm'"
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
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILL', href: '#skill' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECT', href: '#project' },
  { label: 'CONTACT', href: '#contact' }
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('#home')

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 🌫 BACKDROP (iOS style) */
.backdrop-layer {
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  background: rgba(10, 15, 12, 0.4);
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(18px);
  }
}

/* ✨ STAGGER ANIMATION */
.menu-item a {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease,
    filter 0.3s ease;
}
</style>