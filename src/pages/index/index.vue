<template>
    <div class="page-wrapper" :class="{ toggled: toggle }">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
            <div class="container-fluid relative px-3">
                <div class="layout-specing">
                    <indexdetails />
                    <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                        <apexcharts />
                        <country />
                    </div>
                    <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                        <orders />
                        <div class="xl:col-span-4 lg:col-span-6">
                            <chat :addclass="'max-h-[350px]'" />
                        </div>
                        <products />
                    </div>
                </div>
            </div>
            <footers />
        </main>
        <switcher />
    </div>
</template>

<script setup>
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import apexcharts from '@/components/apexchart/first-apexchart.vue';
import indexdetails from '@/components/index-detail.vue'
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import country from '@/components/country.vue';
import orders from '@/components/orders.vue';
import chat from '@/components/chat.vue';
import products from '@/components/products.vue'
import { onMounted, ref } from 'vue';

const toggle = ref(true)

onMounted(()=>{
    document.documentElement.classList.remove('dark');
    document.documentElement.removeAttribute("dir", "rtl");
})

const handleClick =() =>{
    toggle.value = !toggle.value
}
</script>

<style lang="scss" scoped></style>