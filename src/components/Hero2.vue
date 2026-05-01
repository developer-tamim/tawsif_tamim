<template>
  <section class="relative flex items-center min-h-screen overflow-hidden bg-gray-950">
    <!-- Background Gradient & Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent"></div>
    
    <!-- Subtle Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293730_1px,transparent_1px),linear-gradient(to_bottom,#1f293730_1px,transparent_1px)] bg-[size:60px_60px]"></div>

    <div class="relative z-10 max-w-6xl px-6 pt-20 mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
        
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full bg-gray-900/80 backdrop-blur-md border-[#04471c]">
            <span class="relative flex w-3 h-3">
              <span class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#16db65]"></span>
              <span class="relative inline-flex w-3 h-3 rounded-full bg-[#16db65]"></span>
            </span>
            Available for Freelance & Opportunities
          </div>

          <!-- Main Heading -->
          <h1 class="text-6xl font-bold leading-tight tracking-tighter text-white md:text-7xl">
            Hey there, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#058c42] via-[#0eb454] to-[#16db65]">Tawsif Tamim</span>
          </h1>

          <h2 class="text-4xl font-semibold text-gray-300 md:text-5xl">
            Frontend Developer &amp; UI Engineer
          </h2>

          <p class="max-w-lg text-lg text-gray-400">
            Crafting beautiful, high-performance web experiences with Vue.js, 
            Tailwind CSS, and modern design systems.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-6">
            <a
              href="#contact"
              class="flex items-center gap-3 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 bg-white rounded-2xl hover:bg-[#16db65] hover:text-black group"
            >
              Get In Touch
              <span class="transition-transform group-hover:rotate-45">→</span>
            </a>

            <a
              href="#experience"
              class="flex items-center gap-3 px-8 py-4 text-lg font-medium transition-all duration-300 border text-[#16db65] border-gray-600 hover:border-[#16db65] rounded-2xl"
            >
              View My Work
            </a>
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

        <!-- Right Side - Visual -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Main Profile / Visual Container -->
            <div class="p-2 border border-gray-700 shadow-2xl w-80 md:w-96 aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
              <div class="relative w-full h-full overflow-hidden bg-gray-950 rounded-2xl">
                <!-- You can replace this with your actual photo -->
                <img 
                  src="../assets/me.jpg" 
                  alt="Tawsif"
                  class="w-full h-full object-cover grayscale-[0.6] hover:grayscale-0 transition-all duration-500"
                >
                
                <!-- Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <!-- Status Badge -->
                <div class="absolute flex items-center gap-2 px-5 py-2 text-sm border bottom-6 left-6 bg-black/70 backdrop-blur-md rounded-2xl border-green-400/30">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Open to Work
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute p-4 bg-gray-900 border shadow-xl -top-6 -right-6 border-[#04471c] rounded-2xl">
              <div class="flex items-center gap-3">
                <div class="text-3xl">⚡</div>
                <div>
                  <p class="text-xs text-gray-400">Currently Building</p>
                  <p class="font-semibold">Modern Portfolio</p>
                </div>
              </div>
            </div>

            <!-- <div class="absolute p-5 bg-gray-900 border shadow-xl -bottom-8 -left-8 border-purple-400/30 rounded-2xl">
              <div class="text-center">
                <p class="text-2xl font-bold text-purple-400">Vue 3</p>
                <p class="text-xs text-gray-400">+ Tailwind Expert</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute flex flex-col items-center gap-2 transform -translate-x-1/2 bottom-10 left-1/2">
      <p class="text-xs tracking-widest text-gray-500">SCROLL</p>
      <div class="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
// You can add scroll animations or Intersection Observer here if needed
</script>