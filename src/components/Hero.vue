<template>
  <section id="hero" class="relative w-full overflow-x-hidden hero-wrapper">

    <div class="relative z-10 w-full max-w-6xl px-3 mx-auto sm:px-4 md:px-6 lg:px-8">
      <!-- 
        Responsive grid:
        - Mobile (<640px): single column, auto height
        - Tablet (640px-1023px): single column, comfortable spacing
        - Desktop (≥1024px): two columns side by side
      -->
      <div class="grid grid-cols-1 gap-6 items-center pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:grid-cols-2 lg:gap-10 lg:pt-6 lg:pb-0 xl:gap-12 min-h-[auto] md:min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-80px)]">

        <!-- LEFT SIDE -->
        <div class="flex flex-col justify-center order-1 hero-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-xs md:text-sm font-medium border border-[#04471c] rounded-full bg-black/80 backdrop-blur-md w-max max-w-full">
            <span class="relative flex w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 flex-shrink-0">
              <span class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#16db65]"></span>
              <span class="relative inline-flex w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#16db65]"></span>
            </span>
            <span class="truncate">Available for Freelance & Opportunities</span>
          </div>

          <!-- Main Heading -->
          <h1 class="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tighter text-white">
            Hey there, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] via-[#0eb454] to-[#16db65]">Tawsif Tamim</span>
          </h1>

          <!-- Subtitle with scramble -->
          <div class="mt-2 sm:mt-3 md:mt-4">
            <h2 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] text-white">
              with the experience of
            </h2>
            <div class="mt-1 sm:mt-2">
              <span
                ref="scrambleEl"
                class="scramble-text inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#16db65] min-w-[10ch] sm:min-w-[14ch] md:min-w-[16ch] cursor-pointer"
                @mouseenter="replay"
              >
                {{ displayText }}
              </span>
            </div>
          </div>

          <p class="max-w-lg mt-3 text-sm text-gray-400 sm:mt-4 md:mt-5 sm:text-base md:text-lg">
            Pixel-perfect by design. Performance-driven by default.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col flex-wrap gap-3 mt-5 sm:flex-row sm:gap-4 sm:mt-6 md:mt-8">
            <a :href="resumePdf" target="_blank" class="inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black transition bg-green-400 rounded-xl hover:bg-green-500 w-full sm:w-auto">
              <i class="flex-shrink-0 fa-regular fa-file-lines"></i>
              <span>Resume</span>
            </a>
            <button class="inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition border rounded-xl border-white/20 hover:bg-white/10 w-full sm:w-auto">
              <i class="flex-shrink-0 fa-solid fa-sagittarius"></i>
              <span>Hire me</span>
            </button>
          </div>

          <!-- Trust / Stats -->
          <div class="flex flex-wrap items-center gap-4 pt-5 text-sm sm:gap-6 md:gap-8 lg:gap-10 sm:pt-6 md:pt-8">
            <div class="min-w-[80px] sm:min-w-[90px]">
              <span class="font-mono text-lg sm:text-xl md:text-2xl font-bold text-[#16db65]">15+</span>
              <p class="text-[11px] sm:text-xs md:text-sm text-gray-500 mt-0.5">Projects Delivered</p>
            </div>
            <div class="min-w-[80px] sm:min-w-[90px]">
              <span class="font-mono text-lg sm:text-xl md:text-2xl font-bold text-[#16db65]">8+</span>
              <p class="text-[11px] sm:text-xs md:text-sm text-gray-500 mt-0.5">Happy Clients</p>
            </div>
            <div class="min-w-[80px] sm:min-w-[90px]">
              <span class="font-mono text-lg sm:text-xl md:text-2xl font-bold text-[#16db65]">2</span>
              <p class="text-[11px] sm:text-xs md:text-sm text-gray-500 mt-0.5">Years Experience</p>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="flex justify-center order-2 mt-6 hero-right sm:mt-8 md:mt-10 sm:mt-4 md:mt-6 lg:mt-0">
          <div class="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full">
            <!-- 
              Card with responsive padding:
              - Mobile: p-3 (very compact)
              - Small tablet: p-4
              - Tablet: p-6
              - Desktop: p-8
            -->
            <div class="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
              <!-- Decorative blur elements - hidden on mobile for performance -->
              <div class="hidden sm:block absolute -right-12 top-12 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-[#16db65]/20 blur-3xl"></div>
              <div class="hidden sm:block absolute -left-10 bottom-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-[#0eb454]/15 blur-3xl"></div>

              <div class="relative">
                <span class="inline-flex px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-[#16db65] bg-white/5 rounded-full">
                  Product-led design
                </span>
                <h3 class="mt-3 text-xl font-semibold leading-tight text-white sm:mt-4 md:mt-6 sm:text-2xl md:text-3xl lg:text-4xl">
                  Interfaces built to convert and delight
                </h3>
                <p class="max-w-xl mt-2 text-xs leading-relaxed text-gray-400 sm:mt-3 md:mt-4 sm:text-sm md:text-base">
                  I deliver premium landing pages, dashboards, and brand experiences with sharp motion, polished visuals, and strong conversion focus.
                </p>
              </div>

              <!-- 
                Stats grid inside card:
                - Mobile: single column for readability
                - Tablet+: two columns
              -->
              <div class="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2 sm:gap-3 md:gap-4 sm:mt-6 md:mt-8">
                <div class="p-2.5 sm:p-3 md:p-5 border rounded-xl sm:rounded-2xl md:rounded-3xl border-white/10 bg-black/50">
                  <p class="text-[11px] sm:text-xs md:text-sm text-gray-400">Launch speed</p>
                  <p class="mt-1 text-xl font-bold text-white sm:mt-2 md:mt-3 sm:text-2xl md:text-3xl">2 weeks</p>
                </div>
                <div class="p-2.5 sm:p-3 md:p-5 border rounded-xl sm:rounded-2xl md:rounded-3xl border-white/10 bg-black/50">
                  <p class="text-[11px] sm:text-xs md:text-sm text-gray-400">Design systems</p>
                  <p class="mt-1 text-xl font-bold text-white sm:mt-2 md:mt-3 sm:text-2xl md:text-3xl">Scalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from './Navbar.vue'
import resumePdf from '../assets/SYED_TAWSIF_AZAM_TAMIM.pdf'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  words: {
    type: Array,
    default: () => ['graphics design', 'ui/ux design', 'web design']
  },
  autoRotateInterval: {
    type: Number,
    default: 4000
  },
  chars: {
    type: String,
    default: '!<>-_\/[]{}—=+*^?#________'
  },
  scrambleChance: {
    type: Number,
    default: 0.28
  },
  startDelay: {
    type: Number,
    default: 500
  }
})

const scrambleEl = ref(null)
const displayText = ref('')
const currentIndex = ref(0)
const frame = ref(0)
const queue = ref([])
const frameRequest = ref(null)
const intervalId = ref(null)

const scramble = (text) => {
  queue.value = []

  for (let i = 0; i < text.length; i++) {
    queue.value.push({
      to: text[i],
      start: Math.floor(Math.random() * 20),
      end: Math.floor(Math.random() * 20 + 20)
    })
  }

  frame.value = 0
  update()
}

const update = () => {
  let output = ''
  let complete = 0

  for (let i = 0; i < queue.value.length; i++) {
    const { to, start, end } = queue.value[i]

    if (frame.value >= end) {
      complete++
      output += to
    } else if (frame.value >= start) {
      output += Math.random() < props.scrambleChance
        ? to
        : props.chars[Math.floor(Math.random() * props.chars.length)]
    } else {
      output += props.chars[Math.floor(Math.random() * props.chars.length)]
    }
  }

  displayText.value = output

  if (complete !== queue.value.length) {
    frame.value++
    frameRequest.value = requestAnimationFrame(update)
  }
}

const nextWord = () => {
  const word = props.words[currentIndex.value]
  currentIndex.value = (currentIndex.value + 1) % props.words.length
  scramble(word)
}

const start = () => {
  nextWord()
  intervalId.value = setInterval(nextWord, props.autoRotateInterval)
}

const replay = () => {
  if (frameRequest.value) cancelAnimationFrame(frameRequest.value)
  scramble(props.words[currentIndex.value])
}

onMounted(() => {
  setTimeout(start, props.startDelay)
})

onUnmounted(() => {
  if (frameRequest.value) cancelAnimationFrame(frameRequest.value)
  if (intervalId.value) clearInterval(intervalId.value)
})
</script>

<style scoped>
.scramble-text::after {
  content: '|';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* Responsive hero wrapper padding */
.hero-wrapper {
  padding-top: 0.5rem;
  padding-bottom: 2rem;
}

@media (min-width: 640px) {
  .hero-wrapper {
    padding-top: 0.75rem;
    padding-bottom: 3rem;
  }
}

@media (min-width: 768px) {
  .hero-wrapper {
    padding-top: 1rem;
    padding-bottom: 4rem;
  }
}

@media (min-width: 1024px) {
  .hero-wrapper {
    padding-top: 0.5rem;
    padding-bottom: 0;
  }
}

/* Ensure text doesn't overflow on very small screens */
@media (max-width: 359px) {
  .hero-left h1 {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  .hero-left h2 {
    font-size: 1.125rem;
  }

  .scramble-text {
    font-size: 1.125rem;
    min-width: 8ch !important;
  }
}

/* Smooth transitions for layout changes */
.hero-left,
.hero-right {
  transition: all 0.3s ease;
}

/* Prevent horizontal scroll from scramble text */
.scramble-text {
  word-break: keep-all;
  white-space: nowrap;
}

/* Gradient border style (kept for potential future use) */
.gradient-border {
  position: relative;
  border-radius: 16px;
  background:
    linear-gradient(#0b0f0c, #0b0f0c) padding-box,
    linear-gradient(135deg, rgba(34,197,94,0.6), rgba(34,197,94,0.05)) border-box;
  border: 1px solid transparent;
  box-shadow:
    0 0 0 1px rgba(34,197,94,0.1),
    0 10px 40px rgba(34,197,94,0.15);
}

.gradient-border::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.05);
  pointer-events: none;
}
</style>