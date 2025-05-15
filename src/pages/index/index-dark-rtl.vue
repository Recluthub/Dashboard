<template>
  <darkrtlindex />
</template>

<script setup>
import { onMounted } from 'vue';
import darkrtlindex from '@/pages/index/index-dark.vue';

const bodurtl = () => {
  document.documentElement.setAttribute('dir', 'rtl');
};

onMounted(() => {
  bodurtl();
});
</script>