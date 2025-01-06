<template>
  <div class="min-h-screen bg-[#a47864] text-black overflow-hidden flex flex-col p-8 md:p-16">
    <div class="max-w-3xl mx-auto space-y-12">
      <!-- About Me Section -->
      <section class="space-y-4">
        <div class="flex items-center gap-2">
          <User class="w-6 h-6 text-black" />
          <h2 class="text-2xl font-bold">About Me</h2>
        </div>
        <p class="text-black">
          I am a creative professional specializing in video production and visual storytelling. My work focuses on creating compelling narratives through dynamic visual content.
        </p>
      </section>

      <!-- Contact Information -->
      <section class="space-y-4">
        <div class="flex items-center gap-2">
          <Mail class="w-6 h-6 text-black" />
          <h2 class="text-2xl font-bold">Contact</h2>
        </div>
        <div class="space-y-2">
          <p class="text-black">Email: karl@inde.se</p>
          <p class="text-black">Location: Stockholm, Sweden</p>
          <div class="flex items-center gap-2 mt-4">
            <Instagram class="w-4 h-4 text-black" />
            <a 
              href="https://instagram.com/bakgator" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-black hover:underline"
            >
              @bakgator
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, User, Instagram } from 'lucide-vue-next'
</script>