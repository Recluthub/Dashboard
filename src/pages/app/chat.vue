<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
            <div class="container-fluid relative px-3">
                <div class="layout-specing">
                    <div class="md:flex justify-between items-center">
                        <h5 class="text-lg font-semibold">Chatbox</h5>

                        <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                            <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                <router-link to="/">Techwind</router-link></li>
                            <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                <i class="uil uil-angle-right-b"></i>
                            </li>
                            <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Chatbox</li>
                        </ul>
                    </div>

                    <div class="grid md:grid-cols-12 grid-cols-1 mt-6 gap-2">
                        <chatbox />
                        <div class="xl:col-span-9 lg:col-span-7 md:col-span-7">
                            <chat :addclass="'max-h-[565px]'" />
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
    import chat from '@/components/chat.vue';
    import chatbox from '@/components/app/chatbox.vue';
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
</script>>
