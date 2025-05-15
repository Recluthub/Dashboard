<template>
<darkindex />
</template>

<script setup>
import { onMounted } from 'vue';
import darkindex from '@/pages/index/index.vue';

const darkmode = () => {
  document.documentElement.classList.add('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir');
};

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>
