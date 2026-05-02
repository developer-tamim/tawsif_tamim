<template>
  <section id="about" class="py-24 bg-[#020602]">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="grid items-center gap-16 lg:grid-cols-2">

        <div class="space-y-8">
          <span class="text-sm font-medium tracking-[0.32em] uppercase text-[#16db65]">
            About Me
          </span>
          <h2 class="text-4xl font-bold leading-tight text-white lg:text-5xl">
            Hi, I'm <span class="text-[#16db65]">Tawsif Tamim</span>
          </h2>

          <div class="space-y-5 text-lg text-gray-400 max-w-xl">
            <p>
              I am a developer who builds expressive digital experiences with clean architecture and strong visual polish.
            </p>
            <p>
              I focus on fast, accessible interfaces and brand-led products that help businesses grow without compromising performance.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <div class="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
              <p class="text-sm text-gray-400">Projects Delivered</p>
              <p class="mt-3 text-3xl font-bold text-white">15+</p>
            </div>
            <div class="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
              <p class="text-sm text-gray-400">Happy Clients</p>
              <p class="mt-3 text-3xl font-bold text-white">8+</p>
            </div>
            <div class="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
              <p class="text-sm text-gray-400">Years Experience</p>
              <p class="mt-3 text-3xl font-bold text-white">2</p>
            </div>
          </div>
        </div>

        <div class="grid w-full max-w-xl gap-5">
          <div class="relative gradient-border rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="../assets/me.jpg"
              class="object-cover w-full h-[520px] transition-transform duration-700 ease-out hover:scale-105"
              alt="Tawsif Tamim"
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute top-6 left-6 rounded-2xl border border-[#16db65]/30 bg-black/70 px-4 py-2 text-sm font-medium text-white">
              Creative Design Lead
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 to-transparent">
              <p class="text-xs uppercase tracking-[0.3em] text-[#16db65] font-mono">Chattogram, BD</p>
              <h3 class="mt-3 text-3xl font-semibold text-white">Building high-end digital products</h3>
              <p class="max-w-lg mt-3 text-sm text-gray-400">Design systems, brand experiences, and performant interfaces that scale.</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-5">
            <div class="rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-5 backdrop-blur-[8px]">
              <p class="text-sm text-gray-400">Projects</p>
              <p class="mt-4 text-4xl font-bold text-white">15+</p>
              <p class="mt-2 text-xs uppercase tracking-[0.3em] text-[#16db65]">Delivered</p>
            </div>
            <div class="rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-5 backdrop-blur-[8px]">
              <p class="text-sm text-gray-400">Design Focus</p>
              <p class="mt-4 text-4xl font-bold text-white">UI/UX</p>
              <p class="mt-2 text-xs uppercase tracking-[0.3em] text-[#16db65]">Brand Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.gradient-border::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.05);
  pointer-events: none;
}
</style>
>