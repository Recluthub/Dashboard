<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
             <emails />
            <footers />
            <switcher />
        </main>

    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import sidebar from '@/components/sidebar/sidebar-dark.vue';
    import topheader from '@/components/top-header/top-header.vue';
    import footers from '@/components/footer/footer.vue';
    import switcher from '@/components/switcher.vue';
    import emails from '@/components/app/email.vue';

    const toggle = ref(true);

    const handleClick = () => {
        toggle.value = !toggle.value;
    };

    const darkmode = () => {
        document.documentElement.classList.remove('dark');
    };

    const bodurtl = () => {
        document.documentElement.removeAttribute('dir', 'rtl');
    };

    onMounted(() => {
        darkmode();
        bodurtl();
    });
</script>

<style lang="scss" scoped></style>