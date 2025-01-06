<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>