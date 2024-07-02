<template>
  <div class="px-4 text-center">
    <Navbar />
    <hr class="mb-8" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
</script>
