<!-- GlassNavbar.vue -->
<template>
  <nav
    :class="[
      'fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-2xl transition-all duration-300',
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
      <div class="flex items-center gap-2">
        <span class="text-2xl font-bold tracking-tight text-[#16db65]">
          Tawsif <span class="text-white">Tamim</span>
        </span>
      </div>

      <!-- Desktop Navigation -->
      <ul class="items-center hidden p-0 m-0 list-none md:flex gap-9">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            :class="[
              'relative text-sm font-semibold tracking-wide transition-colors duration-300 no-underline',
              activeSection === item.href
                ? 'text-[#16db65]'
                : 'text-gray-700 hover:text-[#16db65]'
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute -bottom-1 left-0 h-0.5 bg-[#16db65] transition-all duration-300',
                activeSection === item.href ? 'w-full' : 'w-0'
              ]"
            />
          </a>
        </li>
      </ul>

      <!-- Right Side -->
      <div class="flex items-center gap-4">
        <!-- Search Button -->
        <button
          @click="toggleSearch"
          class="p-2 text-[#16db65] hover:scale-110 transition-transform duration-200 bg-transparent border-none cursor-pointer"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21L16.65 16.65" />
          </svg>
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
        >
          <span
            v-for="i in 3"
            :key="i"
            class="block w-6 h-0.5 bg-gray-900 transition-all duration-300"
            :class="{
              'rotate-45 translate-y-[7px]': isMobileMenuOpen && i === 1,
              'opacity-0': isMobileMenuOpen && i === 2,
              '-rotate-45 -translate-y-[7px]': isMobileMenuOpen && i === 3
            }"
          />
        </button>
      </div>
    </div>

    <!-- Search Overlay -->
    <div
      :class="[
        'absolute top-0 left-0 w-full h-full flex items-center px-5 transition-all duration-300',
        isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      ]"
    >
      <div
        class="flex items-center w-full gap-2.5 px-4 py-2 rounded-xl border border-white/30"
        style="background: rgba(255,255,255,0.2); backdrop-filter: blur(10px);"
      >
        <input
          ref="searchInput"
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="flex-1 bg-transparent border-none outline-none text-gray-900 text-base font-[inherit] placeholder:text-black/40"
          @keyup.enter="performSearch"
        />
        <button
          @click="toggleSearch"
          class="p-1 text-gray-500 bg-transparent border-none cursor-pointer hover:text-gray-700"
        >
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'md:hidden absolute top-full left-0 w-full mt-2.5 rounded-2xl overflow-hidden border border-white/20 transition-all duration-300',
        isMobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
      ]"
      style="background: rgba(255,255,255,0.15); backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(0,0,0,0.3);"
    >
      <ul class="p-5 m-0 list-none">
        <li v-for="item in navItems" :key="item.href" class="mb-4 last:mb-0">
          <a
            :href="item.href"
            class="block py-2 text-gray-900 font-semibold no-underline hover:text-[#00A8E8] transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'MY WORK', href: '#work' },
  { label: 'CONTACT', href: '#contact' }
]

const isScrolled = ref(false)
const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const activeSection = ref('#home')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleSearch = async () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    await nextTick()
    searchInput.value?.focus()
  }
}

const performSearch = () => {
  console.log('Searching for:', searchQuery.value)
}

// Optional: Update active section on scroll
const observeSections = () => {
  const sections = navItems.map(item => document.querySelector(item.href))
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = `#${entry.target.id}`
        }
      })
    },
    { threshold: 0.5 }
  )
  sections.forEach(section => section && observer.observe(section))
  return observer
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const observer = observeSections()
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    observer.disconnect()
  })
})
</script>