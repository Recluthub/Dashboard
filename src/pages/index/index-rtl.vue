<template>
    <rtlindex />
</template>

<script setup>
    import { onMounted } from 'vue';
    import rtlindex from '@/pages/index/index.vue';

    const bodurtl = () => {
        document.documentElement.setAttribute('dir', 'rtl');
    };

    onMounted(() => {
        bodurtl();
    });
</script>