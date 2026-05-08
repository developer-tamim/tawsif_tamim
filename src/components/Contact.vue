<template>
  <section id="contact" class="relative py-12 overflow-hidden text-white sm:py-16 md:py-20 lg:py-24">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- Left Side - Info -->
        <div class="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          <div>
            <!-- Badge -->
            <div
              class="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium border border-[#04471c] rounded-full bg-black/80 backdrop-blur-md w-max max-w-full">
              <span class="relative flex w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0">
                <span
                  class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#16db65]"></span>
                <span class="relative inline-flex w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#16db65]"></span>
              </span>
              <span class="truncate">Available for Freelance & Opportunities</span>
            </div>

            <h2 class="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Let's create<br>something <span
                class="text-transparent bg-gradient-to-r from-[#058c42] via-[#0eb454] to-[#16db65] bg-clip-text">extraordinary</span>
            </h2>
          </div>

          <p class="max-w-md text-base text-gray-400 sm:text-lg md:text-xl">
            I'm always excited to work on meaningful projects. Whether you have a vision or just want to say hi, feel
            free to reach out.
          </p>

          <!-- Contact Details -->
          <div class="space-y-4 sm:space-y-5 md:space-y-6">
            <div class="flex items-start gap-3 sm:gap-4 md:gap-5">
              <div>
                <p class="text-xs text-gray-500 sm:text-sm">Email</p>
                <a href="mailto:tawsiftamim24@gmail.com" class="text-lg sm:text-xl md:text-2xl transition-colors hover:text-[#16db65] break-all">
                  tawsiftamim24@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-start gap-3 sm:gap-4 md:gap-5">
              <div>
                <p class="text-xs text-gray-500 sm:text-sm">Contact</p>
                <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <a href="tel:+8801829725123" class="text-lg sm:text-xl md:text-2xl transition-colors hover:text-[#16db65]">
                    +880 1829 725123
                  </a>
                  <span class="hidden text-lg text-gray-400 sm:inline sm:text-xl md:text-2xl">|</span>
                  <a href="tel:+8801538268579" class="text-lg sm:text-xl md:text-2xl transition-colors hover:text-[#16db65]">
                    +880 1538 268579
                  </a>
                </div>
              </div>
            </div>

            <div class="flex items-start gap-3 sm:gap-4 md:gap-5">
              <div>
                <p class="text-xs text-gray-500 sm:text-sm">Based in</p>
                <p class="text-lg sm:text-xl md:text-2xl">Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>

          <!-- Social Icons -->
          <div>
            <p class="mb-2 text-xs text-gray-500 sm:mb-3 md:mb-4 sm:text-sm">Find me on</p>
            <div class="flex items-center gap-4 text-xl text-white sm:text-2xl sm:gap-5 md:gap-7">
              <a href="https://t.me/+8801829725123" target="_blank" class="transition hover:text-green-400"
                aria-label="Telegram">
                <i class="fa-brands fa-telegram-plane"></i>
              </a>
              <a href="https://wa.me/8801829725123" target="_blank" class="transition hover:text-green-400"
                aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/syed-tawsif-azam-tamim/" target="_blank"
                class="transition hover:text-green-400" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/tamimtawsif/" target="_blank" class="transition hover:text-green-400"
                aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Side - Enhanced Form -->
        <div class="relative">
          <!-- Background with requested styling applied to the form container -->
          <div class="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/10 bg-[rgba(10,15,12,0.92)] p-4 sm:p-6 md:p-8 shadow-2xl">
            <!-- Glowing orbs from your preferred background - hidden on mobile for performance -->
            <div class="hidden sm:block absolute -right-12 top-12 h-40 w-40 rounded-full bg-[#16db65]/20 blur-3xl"></div>
            <div class="hidden sm:block absolute -left-10 bottom-8 h-32 w-32 rounded-full bg-[#0eb454]/15 blur-3xl"></div>

            <form @submit.prevent="handleSubmit" class="relative z-10 space-y-4 sm:space-y-5 md:space-y-6">
              <div class="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
                <div>
                  <label class="block mb-1.5 sm:mb-2 text-[11px] sm:text-xs text-gray-400">FIRST NAME</label>
                  <input v-model="form.firstName" type="text" required
                    class="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 transition-all border border-gray-700 outline-none bg-gray-950 focus:border-[#16db65] rounded-xl sm:rounded-2xl text-sm sm:text-base"
                    placeholder="first name" />
                </div>
                <div>
                  <label class="block mb-1.5 sm:mb-2 text-[11px] sm:text-xs text-gray-400">LAST NAME</label>
                  <input v-model="form.lastName" type="text" required
                    class="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 transition-all border border-gray-700 outline-none bg-gray-950 focus:border-[#16db65] rounded-xl sm:rounded-2xl text-sm sm:text-base"
                    placeholder="last name" />
                </div>
              </div>

              <div>
                <label class="block mb-1.5 sm:mb-2 text-[11px] sm:text-xs text-gray-400">EMAIL ADDRESS</label>
                <input v-model="form.email" type="email" required
                  class="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 transition-all border border-gray-700 outline-none bg-gray-950 focus:border-[#16db65] rounded-xl sm:rounded-2xl text-sm sm:text-base"
                  placeholder="you@email.com" />
              </div>

              <div>
                <label class="block mb-1.5 sm:mb-2 text-[11px] sm:text-xs text-gray-400">SUBJECT</label>
                <input v-model="form.subject" type="text" required
                  class="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 transition-all border border-gray-700 outline-none bg-gray-950 focus:border-[#16db65] rounded-xl sm:rounded-2xl text-sm sm:text-base"
                  placeholder="Freelance Project / Collaboration" />
              </div>

              <div>
                <label class="block mb-1.5 sm:mb-2 text-[11px] sm:text-xs text-gray-400">MESSAGE</label>
                <textarea v-model="form.message" rows="5" required
                  class="w-full bg-gray-950 border border-gray-700 focus:border-[#16db65] rounded-xl sm:rounded-2xl md:rounded-3xl px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 outline-none resize-y min-h-[120px] sm:min-h-[140px] transition-all text-sm sm:text-base"
                  placeholder="Hi Tawsif, I'd love to discuss..."></textarea>
              </div>

              <button type="submit" :disabled="loading"
                class="w-full mt-2 sm:mt-4 bg-white hover:bg-gradient-to-r hover:from-[#058c42] hover:via-[#0eb454] hover:to-[#16db65] hover:text-white text-black font-semibold py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 active:scale-[0.97] disabled:opacity-70">
                {{ loading ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Success Modal -->
          <transition name="fade">
            <div v-if="showSuccessModal"
              class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
              <div
                class="w-full max-w-xs p-4 space-y-3 text-left border border-green-500 shadow-2xl sm:max-w-sm sm:p-5 md:p-6 sm:space-y-4 bg-gray-950 rounded-2xl sm:rounded-3xl">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-xs font-semibold tracking-wide text-green-400 uppercase sm:text-sm">Success</p>
                    <p class="mt-1 text-base font-semibold text-white sm:mt-2 sm:text-lg">Message sent successfully!</p>
                  </div>
                  <button type="button" @click="closeSuccessModal" class="text-lg text-white/70 hover:text-white">
                    ✕
                  </button>
                </div>
                <p class="text-xs text-gray-400 sm:text-sm">
                  Thank you for reaching out. I&apos;ll reply soon.
                </p>
              </div>
            </div>
          </transition>

          <!-- Error Message -->
          <div v-if="error" class="p-3 mt-3 text-sm text-center text-red-400 border border-red-500 sm:p-4 sm:mt-4 bg-red-900/50 rounded-xl sm:rounded-2xl">
            {{ error }}
          </div>
        </div>

        <!-- Subtle bottom glow -->
        <div
          class="absolute bottom-0 w-3/4 h-1 -translate-x-1/2 left-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-md">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const showSuccessModal = ref(false)
const error = ref('')
let successModalTimer = null

const closeSuccessModal = () => {
  showSuccessModal.value = false
  if (successModalTimer) {
    clearTimeout(successModalTimer)
    successModalTimer = null
  }
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  closeSuccessModal()

  try {
    const templateParams = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message
    }

    await emailjs.send(
      'service_e1atfmp',
      'template_bw2b856',
      templateParams,
      '4P6E5tqhe-4P_UDzv'
    )

    showSuccessModal.value = true
    successModalTimer = setTimeout(() => {
      showSuccessModal.value = false
      successModalTimer = null
    }, 3000)

    // Reset form
    form.value = { firstName: '', lastName: '', email: '', subject: '', message: '' }

  } catch (err) {
    console.error(err)
    error.value = 'Failed to send message. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Fade transition for modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>