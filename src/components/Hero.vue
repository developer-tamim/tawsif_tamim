<template>
  <div class="hero-wrapper">
    <Navbar />

    <div class="hero-container">

      <!-- LEFT SIDE -->
      <div class="hero-left">
        <h1>Hey there, I'm <span>Tawsif Tamim</span></h1>

        <h1>
          with the experience of
          <br>
          <span
            ref="scrambleEl"
            class="scramble-text"
            @mouseenter="replay"
          >
            {{ displayText }}
          </span>
        </h1>

        <div class="flex flex-col mt-8 gap-7">
          <div class="flex items-center text-2xl text-white gap-7">
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
          </div>

          <div class="flex flex-wrap gap-4">
            <a :href="resumePdf" target="_blank" class="inline-block px-6 py-3 font-semibold text-black transition bg-green-400 rounded-xl hover:bg-green-500">
              Resume
            </a>
            <button class="px-6 py-3 font-semibold text-white transition border rounded-xl border-white/20 hover:bg-white/10">
              Hire me
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="hero-right">
        <div class="grid w-full max-w-xl grid-cols-2 gap-5">

          <!-- BIG CARD -->
          <div class="col-span-1 row-span-2 gradient-border">
            <div class="flex flex-col justify-between h-full p-6 card-inner">

              <div>
                <h2 class="text-4xl font-bold text-white">$500K</h2>
                <p class="mt-2 text-sm text-gray-400">
                  Saved Through <br />
                  Resource Optimization
                </p>
              </div>

              <!-- 3D Shape (placeholder) -->
              <div class="flex justify-center mt-6">
                <div class="w-32 h-32 bg-green-500/20 rounded-xl blur-2xl"></div>
              </div>

            </div>
          </div>

          <!-- IMAGE -->
          <div class="gradient-border">
            <div class="overflow-hidden card-inner">
              <img
                src="../assets/me.jpg"
                class="object-cover w-full h-full"
              />
            </div>
          </div>

          <!-- SMALL -->
          <div class="gradient-border">
            <div class="flex items-center justify-center p-5 card-inner">
              <p class="font-semibold text-white">100% Code Quality</p>
            </div>
          </div>

          <!-- SMALL -->
          <div class="gradient-border">
            <div class="p-5 text-center card-inner">
              <h3 class="text-3xl font-bold text-white">10+</h3>
              <p class="text-sm text-gray-400">Years of Coding</p>
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
.hero-wrapper {
  padding-top: 100px;
}

/* Layout */
.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  min-height: 80vh;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Text */
.hero-left h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.hero-left span {
  color: #16db65;
}

.scramble-text {
  font-size: 3rem;
  font-weight: 700;
  color: #16db65;
  min-width: 16ch;
  position: relative;
}

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

/* RIGHT */
.hero-right {
  display: flex;
  justify-content: center;
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

/* card */
.card-inner {
  border-radius: 16px;
  background: rgba(10, 15, 12, 0.92);
  backdrop-filter: blur(8px);
  height: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
  }

  .hero-right {
    margin-top: 40px;
  }
}
</style>