<script setup>
import Hero from './components/Hero.vue'
// import Hero2 from './components/Hero2.vue'
// import Animation from './components/Animation.vue'
// import Header from './components/Header.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue';
import Project from './components/Project.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
</script>

<template lang="">
  <div class="relative p-10 px-20 overflow-hidden">
    <div class="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#16db65]/20 blur-3xl"></div>
    <!-- <div class="absolute -left-20 bottom-20 h-52 w-52 rounded-full bg-[#0eb454]/15 blur-3xl"></div> -->
    <Hero/>
    <!-- <Hero2/> -->
    <!-- <Animation/> -->
    
    <!-- <Header /> -->
    <About/>
    <Experience/>
    <Project/>
    <Work/>
    <Contact/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>