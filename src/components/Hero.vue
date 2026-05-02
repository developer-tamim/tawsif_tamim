<template>
  <div class="pt-2 pb-20 hero-wrapper">
    <Navbar />

    <div class="relative z-10 max-w-6xl px-6 pt-5 mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
    <!-- <div class="hero-container grid grid-cols-2 gap-[50px] items-center min-h-[80vh] lg:grid-cols-1"> -->

      <!-- LEFT SIDE -->
      <div class="flex flex-col justify-center hero-left">
        <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#04471c] rounded-full bg-black/80 backdrop-blur-md w-max max-w-full">
            <span class="relative flex w-3 h-3">
              <span class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#16db65]"></span>
              <span class="relative inline-flex w-3 h-3 rounded-full bg-[#16db65]"></span>
            </span>
            Available for Freelance & Opportunities
          </div>

           <!-- Main Heading -->
         <h1 class="text-5xl font-bold leading-tight tracking-tighter text-white md:text-7xl">
            Hey there, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] via-[#0eb454] to-[#16db65]">Tawsif Tamim</span>
          </h1>

        <h1 class="text-5xl font-bold leading-[1.3] mb-4">
          with the experience of
          <br>
          <span
            ref="scrambleEl"
            class="scramble-text text-5xl font-bold text-[#16db65] min-w-[16ch] relative"
            @mouseenter="replay"
          >
            {{ displayText }}
          </span>
        </h1>

        <p class="max-w-lg text-lg text-gray-400">
            Pixel-perfect by design. Performance-driven by default.
          </p>

        <div class="flex flex-col mt-8 gap-7">
          <div class="flex flex-wrap gap-4">
            <a :href="resumePdf" target="_blank" class="inline-block px-6 py-3 font-semibold text-black transition bg-green-400 rounded-xl hover:bg-green-500">
              <i class="fa-regular fa-file-lines"></i>
              Resume
            </a>
            <button class="px-6 py-3 font-semibold text-white transition border rounded-xl border-white/20 hover:bg-white/10">
            <i class="fa-solid fa-sagittarius"></i>
              Hire me
            </button>
          </div>
          
        <!-- Icons -->
          <!-- <div class="flex items-center text-2xl text-white gap-7">
            <a href="https://t.me/+8801829725123" target="_blank" class="transition hover:text-green-400" aria-label="Telegram">
              <i class="fa-brands fa-telegram-plane"></i>
            </a>
            <a href="https://wa.me/8801829725123" target="_blank" class="transition hover:text-green-400" aria-label="WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/syed-tawsif-azam-tamim/" target="_blank" class="transition hover:text-green-400" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/tamimtawsif/" target="_blank" class="transition hover:text-green-400" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div> -->

        </div>

        <!-- Trust / Stats -->
          <div class="flex items-center gap-10 pt-8 text-sm">
            <div>
              <span class="font-mono text-2xl font-bold text-[#16db65]">15+</span>
              <p class="text-gray-500">Projects Delivered</p>
            </div>
            <div>
              <span class="font-mono text-2xl font-bold text-[#16db65]">8+</span>
              <p class="text-gray-500">Happy Clients</p>
            </div>
            <div>
              <span class="font-mono text-2xl font-bold text-[#16db65]">2</span>
              <p class="text-gray-500">Years Experience</p>
            </div>
          </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex justify-center hero-right lg:mt-10">
        <div class="relative w-full max-w-xl">
          <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-8 shadow-2xl">
            <div class="absolute -right-12 top-12 h-40 w-40 rounded-full bg-[#16db65]/20 blur-3xl"></div>
            <div class="absolute -left-10 bottom-8 h-32 w-32 rounded-full bg-[#0eb454]/15 blur-3xl"></div>

            <div class="relative">
              <span class="inline-flex px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#16db65] bg-white/5 rounded-full">
                Product-led design
              </span>
              <h3 class="mt-6 text-4xl font-semibold text-white">Interfaces built to convert and delight</h3>
              <p class="max-w-xl mt-4 text-gray-400">I deliver premium landing pages, dashboards, and brand experiences with sharp motion, polished visuals, and strong conversion focus.</p>
            </div>

            <div class="grid gap-4 mt-8 sm:grid-cols-2">
              <div class="p-5 border rounded-3xl border-white/10 bg-black/50">
                <p class="text-sm text-gray-400">Launch speed</p>
                <p class="mt-3 text-3xl font-bold text-white">2 weeks</p>
              </div>
              <div class="p-5 border rounded-3xl border-white/10 bg-black/50">
                <p class="text-sm text-gray-400">Design systems</p>
                <p class="mt-3 text-3xl font-bold text-white">Scalable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
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
</style>