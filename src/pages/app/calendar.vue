<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
           <calendar />
            <footers />
            <switcher />
        </main>

    </div>
</template>

<script setup>
    import { onMounted, } from 'vue';
    import sidebar from '@/components/sidebar/sidebar-dark.vue';
    import topheader from '@/components/top-header/top-header.vue';
    import footers from '@/components/footer/footer.vue';
    import switcher from '@/components/switcher.vue';
    import calendar from '@/components/app/calendar.vue'

    let toggle = true

    const handleClick = () => {
        toggle = !toggle
    }

    const darkmode = () => {
        document.documentElement.classList.remove('dark');
    }

    const bodurtl = () =>{
        document.documentElement.removeAttribute("dir", "rtl");
    }

    onMounted(()=>{
        darkmode()
        bodurtl()
    })

</script>
