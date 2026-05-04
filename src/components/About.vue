<template>
  <section id="about" class="py-24 bg-[#020602]">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="flex flex-col gap-16 lg:flex-row lg:items-center">

        <!-- Right Side - Text Content (Shows FIRST on mobile & tablet) -->
        <div class="order-1 space-y-8 lg:order-2 lg:w-1/2">
          <span class="text-sm font-medium tracking-[0.32em] uppercase text-[#16db65]">
            About Me
          </span>
          <h2 class="text-3xl font-bold leading-tight text-white lg:text-4xl">
            Hi, I'm <span class="text-[#16db65]">Tawsif Tamim</span>
          </h2>

          <div class="max-w-xl space-y-5 text-base text-gray-400">
            <p>
              I design things, then I build them.
            </p>
            <p>
              Most days I'm somewhere between Figma and VS Code—toggling between user flows, social media assets, and
              Vue components. I started in graphic design making posters and thumbnails, got obsessed with how people
              actually use software, fell into UI/UX designing SaaS dashboards and CRMs solo, and eventually got tired
              of handing off files I couldn't control. So I learned to code the frontend too.
            </p>
            <p>
              Over the past couple of years, I've been the go-to design person wearing multiple hats. Built CRM
              interfaces from scratch, shipped a real estate site, knocked out email signatures, and kept social feeds
              looking sharp. No translation layers, no "dev said it's impossible"—if something felt off, I fixed it in
              the layout or the CSS, whichever was faster.

            </p>
            <p>
              I care about stuff that works for real humans, not just looks good in a portfolio shot. Clean typography,
              dashboards that don't overwhelm, accessible contrast, and code that doesn't collapse on mobile.
            </p>
            <p>
              When I'm not pushing pixels or hunting a z-index bug, I'm probably over-analyzing why that one app's
              onboarding felt so smooth.
            </p>
            <p>
              Let's make something that looks great and actually ships.
            </p>

            <!-- Social Icons -->
            <div class="flex items-center pt-4 text-2xl text-white gap-7">
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
          </div>
        </div>

        <!-- Left Side - Image + Stats (Shows AFTER text on mobile & tablet) -->
        <div class="order-2 lg:order-1 lg:w-1/2">
          <div class="grid w-full max-w-xl gap-5">
            <div class="relative gradient-border rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="../assets/me.jpg"
                class="object-cover w-full h-[520px] transition-transform duration-700 ease-out hover:scale-105 filter grayscale" 
                alt="Tawsif Tamim" 
              />
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute top-6 left-6 rounded-2xl border border-[#16db65]/30 bg-black/70 px-4 py-2 text-sm font-medium text-white">
                Creative Designer
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-transparent">
                <p class="text-xs uppercase tracking-[0.3em] text-[#16db65] font-mono">Chattogram, Bangladesh</p>
                <h4 class="mt-3 text-3xl font-semibold text-white">UI/UX & Graphics Designer | Frontend Developer</h4>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-5">
              <div class="rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-5 backdrop-blur-[8px]">
                <p class="text-sm text-gray-400">Design Experience</p>
                <p class="mt-4 text-4xl font-bold text-white">5+</p>
                <p class="mt-2 text-xs uppercase tracking-[0.3em] text-[#16db65]">Years</p>
              </div>
              <div class="rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-5 backdrop-blur-[8px]">
                <p class="text-sm text-gray-400">Design Focus</p>
                <p class="mt-4 text-4xl font-bold text-white">UI/UX</p>
                <p class="mt-2 text-xs uppercase tracking-[0.3em] text-[#16db65]">Web & Mobile App</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>