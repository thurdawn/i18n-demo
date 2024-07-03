<template>
  <header class="flex justify-center my-4 gap-36">
    <ul class="flex gap-8">
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
    <button
      class="border rounded px-3 py text-sm text-gray-600"
      @click="toggleLocale"
    >
      {{ locale === 'en' ? $t('lang.zh') : $t('lang.en') }}
    </button>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

const { t, locale } = useI18n();

const navs = computed(() => [
  { text: t('navbar.home'), name: 'Home' },
  { text: t('navbar.about'), name: 'About' },
]);
const route = useRoute();
const router = useRouter();

function toggleLocale() {
  let lang = locale.value === 'en' ? 'zh' : 'en';
  router.push({ name: route.name, params: { lang } });
}
</script>

<style scoped></style>
