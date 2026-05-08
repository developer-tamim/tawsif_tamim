<template>
  <section id="hero" class="relative w-full overflow-x-hidden hero-wrapper">
    <!-- Background ambient glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#16db65]/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0eb454]/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl px-3 mx-auto sm:px-4 md:px-6 lg:px-8">
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

        <!-- RIGHT SIDE - 3D Logo Card -->
        <div class="flex justify-center order-2 mt-6 hero-right sm:mt-8 md:mt-10 sm:mt-4 md:mt-6 lg:mt-0">
          <div class="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full">

            <!-- 3D Tilt Card -->
            <div
              ref="cardRef"
              class="relative cursor-pointer card-3d"
              :style="tiltStyle"
              @mousemove="handleMouseMove"
              @mouseleave="handleMouseLeave"
            >
              <!-- Card glow border effect -->
              <div class="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#16db65]/30 via-transparent to-[#0eb454]/20 blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <!-- TRANSPARENT CARD -->
              <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm shadow-2xl p-8 sm:p-12 md:p-16 lg:p-20">

                <!-- Animated background particles -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                  <div v-for="n in 8" :key="n" 
                    class="absolute w-1 h-1 rounded-full bg-[#16db65]/50"
                    :style="{
                      left: `${10 + n * 10}%`,
                      top: `${15 + (n % 4) * 20}%`,
                      animation: `float-particle ${3 + n * 0.4}s ease-in-out infinite`,
                      animationDelay: `${n * 0.3}s`
                    }"
                  ></div>
                </div>

                <!-- Decorative blurred orbs -->
                <div class="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#16db65]/8 blur-3xl"></div>
                <div class="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#0eb454]/8 blur-3xl"></div>

                <!-- Logo Container -->
                <div class="relative flex items-center justify-center">
                  <!-- Pulsing ring behind logo -->
                  <div class="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border border-[#16db65]/15 animate-pulse-slow"></div>
                  <div class="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border border-[#16db65]/10 animate-pulse-slow" style="animation-delay: 0.5s;"></div>

                  <!-- Logo with float animation -->
                  <div class="relative float-animation">
                    <img 
                      src="../assets/logo/logo_neon.png" 
                      alt="Tawsif Tamim Logo" 
                      class="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-[0_0_40px_rgba(22,219,101,0.4)]"
                    />
                  </div>

                  <!-- FLOATING ICONS AROUND LOGO -->
                  <!-- Vue -->
                  <div class="absolute icon-orbit" style="--orbit-angle: 0deg; --orbit-delay: 0s;">
                    <div class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#42b883]/15 border border-[#42b883]/30 backdrop-blur-md float-icon">
                      <!-- <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#42b883]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
                      </svg> -->
                    <div class="w-4 h-4 sm:w-5 sm:h-5 text-[#42b883]">
                      <i class="fa-brands fa-vuejs"></i>
                    </div>
                    </div>
                  </div>

                  <!-- React -->
                  <div class="absolute icon-orbit" style="--orbit-angle: 60deg; --orbit-delay: 0.5s;">
                    <div class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#61dafb]/15 border border-[#61dafb]/30 backdrop-blur-md float-icon">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#61dafb]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Figma -->
                  <div class="absolute icon-orbit" style="--orbit-angle: 120deg; --orbit-delay: 1s;">
                    <div class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f24e1e]/15 border border-[#f24e1e]/30 backdrop-blur-md float-icon">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#f24e1e]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.588 4.539zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02c1.692 0 3.069-1.382 3.069-3.069v-2.97H8.147zM8.148 8.981c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.147zM8.148 15.02c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V7.51H8.147zM15.852 15.02c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Tailwind -->
                  <div class="absolute icon-orbit" style="--orbit-angle: 180deg; --orbit-delay: 1.5s;">
                    <div class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 backdrop-blur-md float-icon">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    </div>
                  </div>

                  <!-- JavaScript -->
                  <div class="absolute icon-orbit" style="--orbit-angle: 240deg; --orbit-delay: 2s;">
                    <div class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f7df1e]/15 border border-[#f7df1e]/30 backdrop-blur-md float-icon">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#f7df1e]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Git -->
                  <div class="absolute icon-orbit" style="--orbit-angle: 300deg; --orbit-delay: 2.5s;">
                    <div class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f05032]/15 border border-[#f05032]/30 backdrop-blur-md float-icon">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#f05032]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.659 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.527 4.647 6.491c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l6.232-6.227c.605-.603.605-1.582 0-2.187z"/>
                      </svg>
                    </div>
                  </div>

                </div>

                <!-- Subtle bottom reflection/shine -->
                <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#16db65]/20 to-transparent"></div>
              </div>
            </div>

            <!-- Floating decorative elements around card -->
            <div class="absolute -top-4 -right-4 w-8 h-8 border border-[#16db65]/20 rounded-lg rotate-12 float-animation" style="animation-delay: 1s;"></div>
            <div class="absolute -bottom-6 -left-6 w-6 h-6 bg-[#16db65]/10 rounded-full float-animation" style="animation-delay: 2s;"></div>
            <div class="absolute w-4 h-4 border rounded-full top-1/2 -right-8 border-white/10 float-animation" style="animation-delay: 1.5s;"></div>

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
  },
  // logoSrc: {
  //   type: String,
  //   default: '../assets/logo/logo_neon.png'
  // }
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
  50% { opacity: 0; }
}

/* 3D Card Styles */
.card-3d {
  transform-style: preserve-3d;
}

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* Slow Pulse */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Floating Particles */
@keyframes float-particle {
  0%, 100% { 
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
  transform: rotate(var(--orbit-angle)) translateX(110px) rotate(calc(-1 * var(--orbit-angle)));
}

@keyframes icon-float {
  0%, 100% { 
    transform: translateY(0) scale(1); 
    opacity: 0.7;
  }
  50% { 
    transform: translateY(-8px) scale(1.1); 
    opacity: 1;
  }
}

.float-icon {
  animation: icon-float 3s ease-in-out infinite;
  animation-delay: var(--orbit-delay);
}

/* Responsive orbit radius */
@media (min-width: 640px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(130px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

@media (min-width: 768px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(150px) rotate(calc(-1 * var(--orbit-angle)));
  }
}

@media (min-width: 1024px) {
  .icon-orbit {
    transform: rotate(var(--orbit-angle)) translateX(160px) rotate(calc(-1 * var(--orbit-angle)));
  }
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
</style>