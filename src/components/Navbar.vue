<template>
  <ul class="flex gap-8 my-4 justify-center">
    <li
      v-for="item in navs"
      class="hover:text-black"
      :class="route.name === item.name ? 'text-black' : 'text-slate-600'"
    >
      <router-link :to="{ name: item.name }">
        {{ item.text }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();

const navs = computed(() => [
  { text: t('navbar.home'), name: 'Home' },
  { text: t('navbar.about'), name: 'About' },
]);
const route = useRoute();
</script>

<style scoped></style>
