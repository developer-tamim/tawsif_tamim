<template>
  <section id="contact" class="py-20 overflow-hidden text-white bg-gray-950">
    <div class="max-w-6xl px-6 mx-auto">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        
        <!-- Left Side - Modern Content -->
        <div class="space-y-10">
          <div>
            <div class="inline-flex items-center gap-3 px-5 py-2 mb-6 bg-gray-900 border rounded-full border-cyan-500/20">
              <div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span class="text-sm font-medium tracking-widest text-cyan-400">GET IN TOUCH</span>
            </div>
            
            <h2 class="text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
              Let's build<br>something <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">great</span> together
            </h2>
          </div>

          <p class="max-w-md text-lg text-gray-400">
            Have a project in mind? I'm always excited to discuss new opportunities, 
            collaborations, or just have a friendly chat about tech.
          </p>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="flex items-center justify-center w-12 h-12 text-2xl bg-gray-900 border border-gray-800 rounded-2xl">
                📧
              </div>
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <a href="mailto:tawsif@example.com" class="text-lg transition-colors hover:text-cyan-400">
                  tawsif.dev@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="flex items-center justify-center w-12 h-12 text-2xl bg-gray-900 border border-gray-800 rounded-2xl">
                📍
              </div>
              <div>
                <p class="text-sm text-gray-500">Location</p>
                <p class="text-lg">Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex gap-6">
            <a href="#" class="text-3xl transition-colors hover:text-cyan-400">𝕏</a>
            <a href="#" class="text-3xl transition-colors hover:text-cyan-400">𝕃</a>
            <a href="#" class="text-3xl transition-colors hover:text-cyan-400">𝔾</a>
            <a href="#" class="text-3xl transition-colors hover:text-cyan-400">𝕀</a>
          </div>
        </div>

        <!-- Right Side - Contact Form (Matching your image style) -->
        <div class="relative">
          <div class="bg-[#0f172a] border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <label class="block mb-2 text-xs text-gray-400">First Name</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full bg-[#1e2937] border border-gray-600 focus:border-cyan-400 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-xs text-gray-400">Last Name</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full bg-[#1e2937] border border-gray-600 focus:border-cyan-400 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label class="block mb-2 text-xs text-gray-400">Email Address</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full bg-[#1e2937] border border-gray-600 focus:border-cyan-400 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label class="block mb-2 text-xs text-gray-400">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full bg-[#1e2937] border border-gray-600 focus:border-cyan-400 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label class="block mb-2 text-xs text-gray-400">Your Message</label>
                <textarea
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full bg-[#1e2937] border border-gray-600 focus:border-cyan-400 rounded-3xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none transition-all resize-y"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-5 text-lg font-semibold text-black transition-all duration-300 bg-white rounded-2xl hover:bg-cyan-400 hover:text-black active:scale-95"
              >
                Contact Sales
              </button>
            </form>
          </div>

          <!-- Decorative Glow -->
          <div class="absolute -inset-6 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-[2.5rem] -z-10 blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert("Thank you! Your message has been received. (Demo)")
  // Here you can integrate with EmailJS, Formspree, or your backend
  form.value = { firstName: '', lastName: '', email: '', subject: '', message: '' }
}
</script>