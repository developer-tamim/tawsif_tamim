<template>
  <section id="hero" class="relative w-full overflow-x-hidden hero-wrapper">
    <!-- Background ambient glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#16db65]/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0eb454]/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl px-3 mx-auto sm:px-4 md:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-6 items-center pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:grid-cols-2 lg:gap-10 lg:pt-6 lg:pb-0 xl:gap-12 min-h-[auto] md:min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-80px)]">

        <!-- LEFT SIDE -->
        <div class="flex flex-col justify-center order-1 hero-left">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-xs md:text-sm font-medium border border-[#04471c] rounded-full bg-black/80 backdrop-blur-md w-max max-w-full">
            <span class="relative flex w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 flex-shrink-0">
              <span class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#16db65]"></span>
              <span
                class="relative inline-flex w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#16db65]"></span>
            </span>
            <span class="truncate">Available for Freelance & Opportunities</span>
          </div>

          <!-- Main Heading -->
          <h1
            class="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tighter text-white break-words">
            Hey there, I'm <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] via-[#0eb454] to-[#16db65]">Tawsif
              Tamim</span>
          </h1>

          <!-- Subtitle with scramble -->
          <div class="min-w-0 mt-2 sm:mt-3 md:mt-4">
            <h2 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] text-white">
              with the experience of
            </h2>
            <div class="mt-1 overflow-hidden sm:mt-2">
              <span ref="scrambleEl"
                class="scramble-text inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#16db65] min-w-[10ch] sm:min-w-[14ch] md:min-w-[16ch] cursor-pointer"
                @mouseenter="replay">
                {{ displayText }}
              </span>
            </div>
          </div>

          <p class="max-w-lg mt-3 text-sm text-gray-400 sm:mt-4 md:mt-5 sm:text-base md:text-lg">
            Pixel-perfect by design. Performance-driven by default.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col flex-wrap gap-3 mt-5 sm:flex-row sm:gap-4 sm:mt-6 md:mt-8">
            <a :href="resumePdf" target="_blank"
              class="inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black transition bg-green-400 rounded-xl hover:bg-green-500 w-full sm:w-auto">
              <i class="flex-shrink-0 fa-regular fa-file-lines"></i>
              <span>Resume</span>
            </a>
            <a href="#contact"
              class="inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition border rounded-xl border-white/20 hover:bg-white/10 w-full sm:w-auto scroll-smooth">
              <i class="flex-shrink-0 fa-solid fa-sagittarius"></i>
              <span>Hire me</span>
            </a>
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

        <!-- RIGHT SIDE - 3D Logo Card -->
       <!-- RIGHT SIDE - 3D Logo Card -->
<div class="flex justify-center order-2 mt-6 hero-right sm:mt-8 md:mt-10 lg:mt-0">
  <div
    class="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-full px-4 sm:px-0">

    <!-- 3D Tilt Card -->
    <div ref="cardRef" class="relative group card-3d" :style="tiltStyle" @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave">
      <!-- Card glow border effect -->
      <div
        class="absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#16db65]/30 via-transparent to-[#0eb454]/20 blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      </div>

      <!-- TRANSPARENT CARD -->
      <div
        class="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">

        <!-- Animated background particles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div v-for="n in 8" :key="n" class="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-[#16db65]/50"
            :style="{
              left: `${10 + n * 10}%`,
              top: `${15 + (n % 4) * 20}%`,
              animation: `float-particle ${3 + n * 0.4}s ease-in-out infinite`,
              animationDelay: `${n * 0.3}s`
            }"></div>
        </div>

        <!-- Decorative blurred orbs -->
        <div
          class="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-[#16db65]/8 blur-3xl">
        </div>
        <div
          class="absolute -bottom-8 -left-8 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#0eb454]/8 blur-3xl">
        </div>

        <!-- Logo Container - THIS IS THE RELATIVE POSITIONING CONTEXT -->
        <div
          class="relative flex items-center justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
          <!-- Pulsing ring behind logo -->
          <div
            class="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border border-[#16db65]/15 animate-pulse-slow">
          </div>
          <div
            class="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full border border-[#16db65]/10 animate-pulse-slow"
            style="animation-delay: 0.5s;"></div>

          <!-- Logo with float animation -->
          <div class="relative float-animation">
            <img src="../assets/logo/logo_neon.png" alt="Tawsif Tamim Logo"
              class="relative z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-[0_0_30px_rgba(22,219,101,0.4)]" />
          </div>

          <!-- FLOATING ICONS AROUND LOGO - Positioned relative to logo container -->
          <!-- Tailwind -->
          <div class="absolute hidden icon-orbit sm:block" style="--orbit-angle: 0deg; --orbit-delay: 0s;">
            <div
              class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 backdrop-blur-md float-icon">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#38bdf8]" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
            </div>
          </div>

          <!-- Git -->
          <div class="absolute hidden icon-orbit sm:block" style="--orbit-angle: 60deg; --orbit-delay: 0.5s;">
            <div
              class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-[#f05032]/15 border border-[#f05032]/30 backdrop-blur-md float-icon">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#f05032]" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.659 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.527 4.647 6.491c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l6.232-6.227c.605-.603.605-1.582 0-2.187z" />
              </svg>
            </div>
          </div>

          <!-- Adobe Photoshop -->
          <div class="absolute hidden icon-orbit sm:block" style="--orbit-angle: 120deg; --orbit-delay: 1s;">
            <div
              class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#31a8ff]/15 border border-[#31a8ff]/30 backdrop-blur-md float-icon">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#31a8ff]" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M0 0v24h24V0H0zm13.1 6.5c2.3 0 3.9 1.4 3.9 3.6 0 2.3-1.7 3.8-4 3.8h-1.3v3.6H9.8V6.5h3.3zm-1.4 5.6h1.1c1.1 0 1.9-.6 1.9-1.9 0-1.2-.7-1.9-1.8-1.9h-1.2v3.8z" />
              </svg>
            </div>
          </div>

          <!-- Adobe Illustrator -->
          <div class="absolute hidden icon-orbit sm:block" style="--orbit-angle: 180deg; --orbit-delay: 1.5s;">
            <div
              class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-[#ff9a00]/15 border border-[#ff9a00]/30 backdrop-blur-md float-icon">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#ff9a00]" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm5.784 15.4l.65-2.1h3.3l.65 2.1h1.5l-3.1-9.2h-1.4l-3.1 9.2h1.4zm1.85-6l1.15 3.7h-2.3l1.15-3.7zm6.966 6V8.5h-1.4v8.2h1.4zm-.7-9.6c.4 0 .7-.3.7-.7s-.3-.7-.7-.7-.7.3-.7.7.3.7.7.7z" />
              </svg>
            </div>
          </div>

          <!-- Figma -->
          <div class="absolute hidden icon-orbit sm:block" style="--orbit-angle: 240deg; --orbit-delay: 2s;">
            <div
              class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-[#f24e1e]/15 border border-[#f24e1e]/30 backdrop-blur-md float-icon">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#f24e1e]" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.588 4.539zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02c1.692 0 3.069-1.382 3.069-3.069v-2.97H8.147zM8.148 8.981c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.147zM8.148 15.02c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V7.51H8.147zM15.852 15.02c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z" />
              </svg>
            </div>
          </div>

          <!-- Vue -->
          <div class="absolute hidden icon-orbit sm:block" style="--orbit-angle: 300deg; --orbit-delay: 2.5s;">
            <div
              class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-[#42b883]/15 border border-[#42b883]/30 backdrop-blur-md float-icon">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#42b883]" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Subtle bottom reflection/shine -->
        <div
          class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#16db65]/20 to-transparent">
        </div>
      </div>
    </div>

    <!-- Floating decorative elements around card -->
    <div
      class="absolute -top-3 -right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border border-[#16db65]/20 rounded-lg rotate-12 float-animation hidden sm:block"
      style="animation-delay: 1s;"></div>
    <div
      class="absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-[#16db65]/10 rounded-full float-animation hidden sm:block"
      style="animation-delay: 2s;"></div>
    <div
      class="absolute hidden w-3 h-3 border rounded-full sm:w-4 sm:h-4 top-1/2 -right-6 border-white/10 float-animation md:block"
      style="animation-delay: 1.5s;"></div>

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

// ---- Scramble Text Logic ----
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

// ---- 3D Tilt Card Logic ----
const cardRef = ref(null)
const tiltStyle = ref({})

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const rotateX = (y - rect.height / 2) / 20
  const rotateY = (rect.width / 2 - x) / 20
  tiltStyle.value = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`,
    transition: 'transform 0.1s ease-out'
  }
}

const handleMouseLeave = () => {
  tiltStyle.value = {
    transform: 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
  }
}
</script>

<style scoped>
.scramble-text::after {
  content: '|';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* 3D Card Styles */
.card-3d {
  transform-style: preserve-3d;
}

/* Float Animation */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* Slow Pulse */
@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Floating Particles */
@keyframes float-particle {

  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.4;
  }

  25% {
    transform: translateY(-15px) translateX(5px);
    opacity: 0.8;
  }

  50% {
    transform: translateY(-8px) translateX(-3px);
    opacity: 0.6;
  }

  75% {
    transform: translateY(-20px) translateX(8px);
    opacity: 0.9;
  }
}

/* Icon Orbit System */
.icon-orbit {
  /* Position icons in a circle around the logo */
  transform: rotate(var(--orbit-angle)) translateX(75px) rotate(calc(-1 * var(--orbit-angle)));
}

@keyframes icon-float {

  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }

  50% {
    transform: translateY(-6px) scale(1.08);
    opacity: 1;
  }
}

.float-icon {
  animation: icon-float 3s ease-in-out infinite;
  animation-delay: var(--orbit-delay);
}

/* Responsive orbit radius */
@media (min-width: 400px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(85px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

@media (min-width: 480px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(95px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

@media (min-width: 640px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(110px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

@media (min-width: 768px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(125px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

@media (min-width: 1024px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(140px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

@media (min-width: 1280px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(155px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

/* Responsive hero wrapper padding */
.hero-wrapper {
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  /* margin-top: 48px; */
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

/* Smooth scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
}
</style>