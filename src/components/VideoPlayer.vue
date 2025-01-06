<template>
  <iframe
    :src="embedUrl"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="absolute top-0 left-0 w-full h-full"
    :title="title"
  />
</template>

<script setup lang="ts">
defineProps<{
  embedUrl: string;
  title: string;
}>();
</script>