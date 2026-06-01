<template>
  <section id="process" class="relative z-10 py-20 overflow-hidden sm:py-24 md:py-28 lg:py-32">
    <!-- Animated mesh background -->
    <div class="mesh-bg" aria-hidden="true" />

    <!-- Floating particles -->
    <div class="particles" aria-hidden="true">
      <div
        v-for="particle in particles"
        :key="particle.id"
        class="particle"
        :style="particle.style"
      />
    </div>

    <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 text-center sm:mb-20 md:mb-24">
        <div class="badge">
          <span class="badge-dot" />
          PROCESS
        </div>
        <h2 class="section-title">
          How I Bring Ideas<br class="hidden sm:block" /> to Life
        </h2>
        <p class="section-subtitle">
          A thoughtful 4-step journey that turns your vision into a polished, user-centered product.
        </p>
      </div>

      <!-- Process Grid -->
      <div class="process-grid">
        <!-- SVG Connection Line (desktop only) -->
        <div class="connection-line" aria-hidden="true">
          <svg viewBox="0 0 800 2" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
                <stop offset="33%" stop-color="#a855f7" stop-opacity="0.3" />
                <stop offset="66%" stop-color="#f59e0b" stop-opacity="0.3" />
                <stop offset="100%" stop-color="#10b981" stop-opacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M 0 1 Q 200 1, 400 1 T 800 1" />
          </svg>
        </div>

        <!-- Process Steps -->
        <div
          v-for="(step, index) in steps"
          :key="step.id"
          ref="cardRefs"
          class="process-card"
          :class="{ 'is-visible': isVisible }"
          :style="getCardStyle(step, index)"
          @mousemove="(e) => handleMouseMove(e, index)"
          @mouseleave="(e) => handleMouseLeave(e, index)"
        >
          <!-- Glow effect -->
          <div class="card-glow" aria-hidden="true" />

          <!-- Card content -->
          <div class="card-content">
            <div class="step-number" aria-hidden="true">{{ step.number }}</div>

            <div class="icon-box">
              <i :class="step.icon" />
            </div>

            <h3 class="card-title">{{ step.title }}</h3>
            <p class="card-desc">{{ step.description }}</p>
          </div>

          <!-- Progress bar -->
          <div class="card-progress" aria-hidden="true">
            <div class="card-progress-fill" />
          </div>
        </div>
      </div>

      <!-- Bottom Status -->
      <div class="flex justify-center mt-14 sm:mt-16 md:mt-20">
        <div class="status-bar">
          <div class="status-dot" />
          <span>Fully iterative & collaborative from start to finish</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const cardRefs = ref([])

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery',
    description: 'Deep diving into your goals, users, and business needs through research and meaningful conversations.',
    icon: 'fa-solid fa-magnifying-glass',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.2)',
    lightColor: '#60a5fa'
  },
  {
    id: 2,
    number: '02',
    title: 'Ideation',
    description: 'Exploring creative directions, sketching flows, and crafting the optimal user experience strategy.',
    icon: 'fa-solid fa-lightbulb',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.2)',
    lightColor: '#c084fc'
  },
  {
    id: 3,
    number: '03',
    title: 'Design & Prototype',
    description: 'Creating beautiful, high-fidelity interfaces and interactive prototypes that feel real.',
    icon: 'fa-solid fa-puzzle-piece',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.2)',
    lightColor: '#fbbf24'
  },
  {
    id: 4,
    number: '04',
    title: 'Test & Refine',
    description: 'Real user testing, feedback loops, and continuous refinement until the experience is just right.',
    icon: 'fa-solid fa-arrows-turn-to-dots',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.2)',
    lightColor: '#34d399'
  }
  // <i class="fa-solid fa-arrows-turn-to-dots"></i>
]

// Generate floating particles
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  style: {
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 15 + 10}s`,
    animationDelay: `${Math.random() * 10}s`,
    width: `${Math.random() * 3 + 1}px`,
    height: `${Math.random() * 3 + 1}px`
  }
}))

const getCardStyle = (step, index) => ({
  '--card-color': step.color,
  '--card-glow': step.glow,
  '--card-color-light': step.lightColor,
  '--card-delay': `${0.2 + index * 0.2}s`
})

const handleMouseMove = (e, index) => {
  const card = cardRefs.value[index]
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20

  card.style.transform = `translateY(-12px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

const handleMouseLeave = (e, index) => {
  const card = cardRefs.value[index]
  if (!card) return
  card.style.transform = ''
}

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>

<style scoped>
/* ============================================================
   MESH BACKGROUND
   ============================================================ */
.mesh-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.4;
  overflow: hidden;
}

.mesh-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background:
    radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 60%);
  animation: meshFloat 20s ease-in-out infinite;
}

@keyframes meshFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(2%, -2%) rotate(1deg); }
  66% { transform: translate(-1%, 1%) rotate(-1deg); }
}

/* ============================================================
   PARTICLES
   ============================================================ */
.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: floatUp linear infinite;
}

@keyframes floatUp {
  0% { transform: translateY(100vh) scale(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-10vh) scale(1); opacity: 0; }
}

/* ============================================================
   BADGE
   ============================================================ */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(22, 219, 101, 0.1);
  border: 1px solid rgba(22, 219, 101, 0.2);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #16db65;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(22, 219, 101, 0.2), transparent);
  animation: shimmer 3s ease-in-out infinite;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: #16db65;
  border-radius: 50%;
  display: inline-block;
}

@keyframes shimmer {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

/* ============================================================
   SECTION HEADER
   ============================================================ */
.section-title {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  /* background: linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #c7d2fe 100%); */
  background: linear-gradient(135deg, #058c42 0%, #0eb454 50%, #16db65 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ============================================================
   PROCESS GRID
   ============================================================ */
.process-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  position: relative;
}

@media (min-width: 640px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}

/* ============================================================
   CONNECTION LINE
   ============================================================ */
.connection-line {
  display: none;
  position: absolute;
  top: 60px;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  z-index: 0;
}

.connection-line svg {
  width: 100%;
  height: 100%;
}

.connection-line path {
  stroke: url(#lineGradient);
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 2s ease forwards 0.5s;
}

@media (min-width: 1024px) {
  .connection-line {
    display: block;
  }
}

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}

/* ============================================================
   PROCESS CARD
   ============================================================ */
.process-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 28px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  animation: cardReveal 0.8s ease forwards;
  animation-delay: var(--card-delay);
}

@media (min-width: 640px) {
  .process-card {
    padding: 32px;
  }
}

@keyframes cardReveal {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Gradient border on hover */
.process-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(135deg, transparent 40%, var(--card-color, #6366f1) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.process-card:hover::before {
  opacity: 1;
}

.process-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow:
    0 30px 60px -15px rgba(0, 0, 0, 0.5),
    0 0 40px -10px var(--card-glow, rgba(99, 102, 241, 0.2));
}

/* Glow orb */
.card-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--card-glow, rgba(99, 102, 241, 0.15));
  filter: blur(60px);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s ease;
  pointer-events: none;
  z-index: 0;
}

.process-card:hover .card-glow {
  transform: translate(-50%, -50%) scale(1);
}

/* Card content */
.card-content {
  position: relative;
  z-index: 1;
}

/* Step number */
.step-number {
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
  transition: all 0.5s ease;
  user-select: none;
}

@media (min-width: 640px) {
  .step-number {
    font-size: 3.5rem;
    top: 20px;
    right: 20px;
  }
}

@media (min-width: 1024px) {
  .step-number {
    font-size: 4rem;
  }
}

.process-card:hover .step-number {
  -webkit-text-stroke: 1px var(--card-color, rgba(99, 102, 241, 0.3));
  transform: scale(1.1);
}

/* Icon box */
.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.5s ease;
  color: #fff;
}

@media (min-width: 640px) {
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    font-size: 1.75rem;
    margin-bottom: 24px;
  }
}

.process-card:hover .icon-box {
  transform: rotate(12deg) scale(1.1);
  background: var(--card-color, rgba(99, 102, 241, 0.15));
  border-color: var(--card-color, rgba(99, 102, 241, 0.3));
  box-shadow: 0 0 30px -5px var(--card-glow, rgba(99, 102, 241, 0.3));
}

/* Title */
.card-title {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

@media (min-width: 640px) {
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }
}

.process-card:hover .card-title {
  color: var(--card-color, #fff);
}

/* Description */
.card-desc {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.7;
  transition: color 0.3s ease;
}

@media (min-width: 640px) {
  .card-desc {
    font-size: 0.9rem;
  }
}

.process-card:hover .card-desc {
  color: #9ca3af;
}

/* Progress bar */
.card-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0 0 24px 24px;
  overflow: hidden;
}

.card-progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--card-color, #6366f1), var(--card-color-light, #818cf8));
  border-radius: 0 0 24px 24px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.process-card:hover .card-progress-fill {
  width: 100%;
}

/* ============================================================
   STATUS BAR
   ============================================================ */
.status-bar {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  font-size: 0.875rem;
  color: #6b7280;
  position: relative;
  overflow: hidden;
}

.status-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
  animation: shimmer 4s ease-in-out infinite;
}

.status-dot {
  position: relative;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}

.status-dot::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.status-dot::after {
  content: '';
  position: absolute;
  inset: -4px;
  background: rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite 0.3s;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0; }
}

/* ============================================================
   ENTRANCE ANIMATIONS
   ============================================================ */
.section-title,
.section-subtitle,
.badge,
.status-bar {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
}

.badge { animation-delay: 0.1s; }
.section-title { animation-delay: 0.2s; }
.section-subtitle { animation-delay: 0.3s; }
.status-bar { animation-delay: 1.2s; }

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* ============================================================
   REDUCED MOTION
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  .mesh-bg::before,
  .particle,
  .badge::before,
  .connection-line path,
  .status-bar::before,
  .status-dot::before,
  .status-dot::after {
    animation: none;
  }

  .section-title,
  .section-subtitle,
  .badge,
  .status-bar,
  .process-card {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .process-card:hover {
    transform: none;
  }

  .card-glow,
  .icon-box,
  .step-number,
  .card-title,
  .card-desc,
  .card-progress-fill {
    transition: none;
  }
}

/* ============================================================
   TOUCH DEVICES
   ============================================================ */
@media (hover: none) {
  .process-card:hover {
    transform: none;
  }

  .process-card:active {
    transform: scale(0.98);
  }
}
</style>