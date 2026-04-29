<template>
  <section class="relative flex items-center justify-center h-screen overflow-hidden text-white bg-black">

    <!-- center glow -->
    <div class="absolute w-[600px] h-[600px] rounded-full bg-teal-400/20 blur-3xl"></div>

    <!-- orbit container -->
    <div class="relative w-[500px] h-[500px] flex items-center justify-center">

      <!-- circles -->
      <div class="absolute w-full h-full border border-dashed rounded-full border-white/10"></div>
      <div class="absolute w-[350px] h-[350px] rounded-full border border-white/10 border-dashed"></div>

      <!-- 🔵 ROTATING GLOBE -->
      <div
        class="absolute w-full h-full"
        :style="rotateStyle"
      >
        <div class="absolute top-0 -translate-x-1/2 left-1/2">
          🌐
        </div>
      </div>

      <!-- static tags -->
      <div class="tag top-10 right-10">Finsweet</div>
      <div class="right-0 tag bottom-16">Figma</div>
      <div class="left-0 -translate-y-1/2 tag top-1/2">Client-First</div>
      <div class="right-0 -translate-y-1/2 tag top-1/2">Attributes</div>

      <!-- center text -->
      <div class="z-10 text-center">
        <h1 class="text-5xl font-bold leading-tight">
          10+ YEARS OF <br />
          EXPERIENCE IN <br />
          WEB DEVELOPMENT
        </h1>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

/* OPTION 1: Auto rotate (simple) */
const angle = ref(0)

onMounted(() => {
  setInterval(() => {
    angle.value += 0.5
  }, 16)
})

const rotateStyle = {
  transform: `rotate(${angle.value}deg)`
}

/* OPTION 2 (better): Scroll-based */
// Uncomment if you want Webflow-like behavior

/*
import { useScrollProgress } from '@/composables/useScrollProgress'
const { progress } = useScrollProgress()

const rotateStyle = computed(() => ({
  transform: `rotate(${progress.value * 360}deg)`
}))
*/
</script>

<style scoped>
.tag {
  position: absolute;
  padding: 6px 14px;
  background: rgba(30, 41, 59, 0.8);
  border-radius: 9999px;
  font-size: 14px;
  backdrop-filter: blur(6px);
}
</style>