<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
            <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <div class="md:flex justify-between items-center">
                            <h5 class="text-lg font-semibold">Starter Page</h5>

                            <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/">Techwind</router-link></li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                                <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Starter Page</li>
                            </ul>
                        </div>

                        <div class="grid grid-cols-1 mt-6">
                            <div class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <p class="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, aliquid soluta. Voluptas neque adipisci fuga magnam nulla exercitationem corrupti ducimus itaque soluta earum! Fugiat, animi id sit ad magnam facilis.</p>
                            </div>
                        </div>
                    </div>
                </div>
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