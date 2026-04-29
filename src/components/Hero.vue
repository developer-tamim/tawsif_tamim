<!-- Hero.vue -->
<template>
  <div class="hero-wrapper">
  <Navbar />
  <div class="hero">
    <h1>Hey there, I'm <span>Tawsif Tamim</span></h1>
    <h1>
      with the experience of
      <span
        ref="scrambleEl"
        class="scramble-text"
        @mouseenter="replay"
      >
        {{ displayText }}
      </span>
    </h1>
    <p class="subtitle">Let me show You...</p>
  </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
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
const isAnimating = ref(false)
const frameRequest = ref(null)
const intervalId = ref(null)

const scramble = (text) => {
  const length = text.length
  queue.value = []

  for (let i = 0; i < length; i++) {
    queue.value.push({
      to: text[i],
      start: Math.floor(Math.random() * 20),
      end: Math.floor(Math.random() * 20 + 20)
    })
  }

  frame.value = 0
  isAnimating.value = true
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
      if (Math.random() < props.scrambleChance) {
        output += to
      } else {
        const randomChar = props.chars[Math.floor(Math.random() * props.chars.length)]
        output += randomChar
      }
    } else {
      output += props.chars[Math.floor(Math.random() * props.chars.length)]
    }
  }

  displayText.value = output

  if (complete === queue.value.length) {
    isAnimating.value = false
    frameRequest.value = null
  } else {
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
  intervalId.value = setInterval(() => nextWord(), props.autoRotateInterval)
}

const replay = () => {
  if (frameRequest.value) cancelAnimationFrame(frameRequest.value)
  scramble(props.words[currentIndex.value])
}

onMounted(() => {
  setTimeout(() => start(), props.startDelay)
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
/* .hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
} */
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.hero h1 span {
  color: #a786ff;
}

.scramble-text {
  font-size: 3rem;
  font-weight: 700;
  color: #fffffe;
  display: inline-block;
  min-width: 16ch;
  position: relative;
  color: #a786ff;
}

/* Cursor blink */
.scramble-text::after {
  content: '|';
  color: #a786ff;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  50% { opacity: 0; }
}

.subtitle {
  font-size: 1.2rem;
  color: #94a1b2;
  margin-top: 1.5rem;
}
</style>