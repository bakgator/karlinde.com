<template>
  <div class="video-thumbnail-container">
    <img 
      :src="thumbnail || '/placeholder.svg'"
      :alt="title"
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div class="video-overlay">
      <div class="video-text">
        <p class="video-subtitle">{{ subtitle }}</p>
        <h2 class="video-title">{{ title }}</h2>
      </div>
      <button 
        @click="$emit('play')"
        class="play-button"
      >
        PLAY VIDEO
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  thumbnail: string;
  title: string;
  subtitle: string;
}>();

defineEmits<{
  (e: 'play'): void;
}>();
</script>