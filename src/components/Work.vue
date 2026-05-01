<template>
  <section id="process" class="py-24 bg-white dark:bg-gray-950">
    <div class="max-w-6xl px-6 mx-auto lg:px-8">
      
      <!-- Header -->
      <div class="mb-20 text-center">
        <span class="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-[2px] rounded-full mb-4">
          PROCESS
        </span>
        <h2 class="text-4xl font-bold text-gray-900 lg:text-5xl dark:text-white">
          How I Bring Ideas to Life
        </h2>
        <p class="max-w-lg mx-auto mt-5 text-lg text-gray-600 dark:text-gray-400">
          A thoughtful 4-step journey that turns your vision into a polished, user-centered product.
        </p>
      </div>

      <!-- Process Steps -->
      <div class="relative">
        <!-- Subtle Background Line (diagonal-ish on large screens) -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

        <div class="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          
          <!-- Step 1 -->
          <div class="relative p-8 transition-all duration-300 bg-white border border-transparent group dark:bg-gray-900 rounded-3xl hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-2">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center justify-center text-3xl transition-transform bg-blue-100 w-14 h-14 dark:bg-blue-950 rounded-2xl group-hover:rotate-12">
                🔍
              </div>
              <div class="text-5xl font-bold text-gray-100 transition-colors dark:text-gray-800 group-hover:text-blue-100 dark:group-hover:text-blue-950">
                01
              </div>
            </div>
            
            <h3 class="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Discovery</h3>
            <p class="leading-relaxed text-gray-600 dark:text-gray-400">
              Deep diving into your goals, users, and business needs through research and meaningful conversations.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="relative p-8 transition-all duration-300 bg-white border border-transparent group dark:bg-gray-900 rounded-3xl hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-2">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center justify-center text-3xl transition-transform bg-purple-100 w-14 h-14 dark:bg-purple-950 rounded-2xl group-hover:rotate-12">
                💡
              </div>
              <div class="text-5xl font-bold text-gray-100 transition-colors dark:text-gray-800 group-hover:text-purple-100 dark:group-hover:text-purple-950">
                02
              </div>
            </div>
            
            <h3 class="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Ideation</h3>
            <p class="leading-relaxed text-gray-600 dark:text-gray-400">
              Exploring creative directions, sketching flows, and crafting the optimal user experience strategy.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative p-8 transition-all duration-300 bg-white border border-transparent group dark:bg-gray-900 rounded-3xl hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-2">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center justify-center text-3xl transition-transform w-14 h-14 bg-amber-100 dark:bg-amber-950 rounded-2xl group-hover:rotate-12">
                🧩
              </div>
              <div class="text-5xl font-bold text-gray-100 transition-colors dark:text-gray-800 group-hover:text-amber-100 dark:group-hover:text-amber-950">
                03
              </div>
            </div>
            
            <h3 class="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Design & Prototype</h3>
            <p class="leading-relaxed text-gray-600 dark:text-gray-400">
              Creating beautiful, high-fidelity interfaces and interactive prototypes that feel real.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="relative p-8 transition-all duration-300 bg-white border border-transparent group dark:bg-gray-900 rounded-3xl hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-2">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center justify-center text-3xl transition-transform w-14 h-14 bg-emerald-100 dark:bg-emerald-950 rounded-2xl group-hover:rotate-12">
                ✅
              </div>
              <div class="text-5xl font-bold text-gray-100 transition-colors dark:text-gray-800 group-hover:text-emerald-100 dark:group-hover:text-emerald-950">
                04
              </div>
            </div>
            
            <h3 class="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Test & Refine</h3>
            <p class="leading-relaxed text-gray-600 dark:text-gray-400">
              Real user testing, feedback loops, and continuous refinement until the experience is just right.
            </p>
          </div>

        </div>
      </div>

      <!-- Bottom Note -->
      <div class="flex justify-center mt-16">
        <div class="inline-flex items-center gap-3 px-6 py-3 text-sm text-gray-600 bg-gray-100 dark:bg-gray-900 rounded-2xl dark:text-gray-400">
          <span class="relative flex w-3 h-3">
            <span class="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
            <span class="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
          </span>
          Fully iterative & collaborative from start to finish
        </div>
      </div>

    </div>
  </section>
</template>