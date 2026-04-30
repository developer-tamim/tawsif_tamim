<template>
  <section id="about" class="py-24 bg-white dark:bg-gray-950">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        
        <!-- Left Side: Image -->
        <div class="relative">
          <div class="overflow-hidden shadow-2xl aspect-square rounded-3xl">
            <img 
              src="../assets/me.jpg" 
              alt="About me" 
              class="object-cover w-full h-full"
            >
          </div>
          
          <!-- Optional decorative elements -->
          <div class="absolute p-6 bg-white border border-gray-100 shadow-xl -bottom-6 -right-6 dark:bg-gray-900 rounded-2xl dark:border-gray-800">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary">2+</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        <!-- Right Side: Content -->
        <div class="space-y-8">
          <div>
            <span class="text-sm font-medium tracking-widest uppercase text-primary">
              About Me
            </span>
            <h2 class="mt-3 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl dark:text-white">
              Hi, I'm <span class="text-primary">Tawsif Tamim</span>
            </h2>
          </div>

          <div class="text-lg prose text-gray-600 dark:prose-invert dark:text-gray-300">
            <p>
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I love turning ideas into beautiful, functional digital experiences.
            </p>
            <p>
              With a strong focus on clean code, performance, and user experience, 
              I create applications that not only look great but also deliver real value.
            </p>
          </div>

          <!-- Stats or Highlights -->
          <div class="grid grid-cols-3 gap-8 pt-6">
            <div>
              <div class="text-3xl font-semibold text-gray-900 dark:text-white">50+</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div class="text-3xl font-semibold text-gray-900 dark:text-white">30+</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div class="text-3xl font-semibold text-gray-900 dark:text-white">15+</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Technologies</div>
            </div>
          </div>

          <!-- CTA Button -->
          <!-- <button 
            @click="scrollToContact"
            class="flex items-center gap-3 px-8 py-4 mt-8 font-medium text-white transition-all duration-300 bg-primary hover:bg-primary/90 rounded-2xl group"
          >
            Let's Work Together
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>
>