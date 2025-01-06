<template>
  <div class="fixed top-4 w-full px-4 z-50">
    <div class="flex items-center justify-between max-w-7xl mx-auto">
      <div class="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
        <img src="/placeholder.svg" alt="Logo" class="w-8 h-8" />
      </div>
      
      <router-link 
        :to="isAboutPage ? '/' : '/about'"
        :class="[
          isAboutPage ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300',
          'transition-colors text-lg'
        ]"
      >
        {{ isAboutPage ? 'Portfolio' : 'About & Contact' }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isAboutPage = computed(() => route.path === '/about');
</script>