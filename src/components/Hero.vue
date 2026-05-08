<template>
  <section id="hero" class="pt-2 pb-12 sm:pb-20 hero-wrapper">
    <Navbar />

    <div class="relative z-10 max-w-6xl px-4 pt-4 mx-auto sm:px-6 sm:pt-5">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">

        <!-- LEFT SIDE -->
        <div class="flex flex-col justify-center hero-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium border border-[#04471c] rounded-full bg-black/80 backdrop-blur-md w-max max-w-full">
            <span class="relative flex w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0">
              <span class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#16db65]"></span>
              <span class="relative inline-flex w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#16db65]"></span>
            </span>
            <span class="truncate">Available for Freelance & Opportunities</span>
          </div>

          <!-- Main Heading -->
          <h1 class="mt-4 text-3xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl sm:mt-6">
            Hey there, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] via-[#0eb454] to-[#16db65]">Tawsif Tamim</span>
          </h1>

          <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.3] mb-3 sm:mb-4 mt-2 sm:mt-3">
            with the experience of
            <br>
            <span
              ref="scrambleEl"
              class="scramble-text text-2xl sm:text-4xl md:text-5xl font-bold text-[#16db65] min-w-[12ch] sm:min-w-[16ch] relative inline-block"
              @mouseenter="replay"
            >
              {{ displayText }}
            </span>
          </h1>

          <p class="max-w-lg text-base text-gray-400 sm:text-lg">
            Pixel-perfect by design. Performance-driven by default.
          </p>

          <div class="flex flex-col gap-5 mt-6 sm:mt-8 sm:gap-7">
            <div class="flex flex-wrap gap-3 sm:gap-4">
              <a :href="resumePdf" target="_blank" class="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black transition bg-green-400 rounded-xl hover:bg-green-500">
                <i class="fa-regular fa-file-lines"></i>
                Resume
              </a>
              <button class="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition border rounded-xl border-white/20 hover:bg-white/10">
                <i class="fa-solid fa-sagittarius"></i>
                Hire me
              </button>
            </div>
          </div>

          <!-- Trust / Stats -->
          <div class="flex flex-wrap items-center gap-6 pt-6 text-sm sm:gap-10 sm:pt-8">
            <div>
              <span class="font-mono text-xl sm:text-2xl font-bold text-[#16db65]">15+</span>
              <p class="text-xs text-gray-500 sm:text-sm">Projects Delivered</p>
            </div>
            <div>
              <span class="font-mono text-xl sm:text-2xl font-bold text-[#16db65]">8+</span>
              <p class="text-xs text-gray-500 sm:text-sm">Happy Clients</p>
            </div>
            <div>
              <span class="font-mono text-xl sm:text-2xl font-bold text-[#16db65]">2</span>
              <p class="text-xs text-gray-500 sm:text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="flex justify-center mt-6 hero-right lg:mt-0">
          <div class="relative w-full max-w-xl">
            <div class="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-5 sm:p-8 shadow-2xl">
              <div class="absolute -right-12 top-12 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-[#16db65]/20 blur-3xl"></div>
              <div class="absolute -left-10 bottom-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-[#0eb454]/15 blur-3xl"></div>

              <div class="relative">
                <span class="inline-flex px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#16db65] bg-white/5 rounded-full">
                  Product-led design
                </span>
                <h3 class="mt-4 text-2xl font-semibold text-white sm:mt-6 sm:text-4xl">Interfaces built to convert and delight</h3>
                <p class="max-w-xl mt-3 text-sm text-gray-400 sm:mt-4 sm:text-base">I deliver premium landing pages, dashboards, and brand experiences with sharp motion, polished visuals, and strong conversion focus.</p>
              </div>

              <div class="grid grid-cols-2 gap-3 mt-6 sm:gap-4 sm:mt-8">
                <div class="p-3 border sm:p-5 rounded-2xl sm:rounded-3xl border-white/10 bg-black/50">
                  <p class="text-xs text-gray-400 sm:text-sm">Launch speed</p>
                  <p class="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl">2 weeks</p>
                </div>
                <div class="p-3 border sm:p-5 rounded-2xl sm:rounded-3xl border-white/10 bg-black/50">
                  <p class="text-xs text-gray-400 sm:text-sm">Design systems</p>
                  <p class="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl">Scalable</p>
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
    default: '!<>-_\\/[]{}—=+*^?#________'
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

.subtitle {
  font-size: 1.2rem;
  color: #94a1b2;
  margin-top: 1.5rem;
}

/* ✅ CORRECT BORDER (matches your image) */
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

/* inner subtle line */
.gradient-border::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.05);
  pointer-events: none;
}

/* Mobile-first hero wrapper padding adjustments */
@media (max-width: 640px) {
  .hero-wrapper {
    padding-top: 0.5rem;
    padding-bottom: 3rem;
  }
}
</style>