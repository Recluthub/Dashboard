<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />

            <div class="container-fluid relative px-3">
                <div class="layout-specing">
                    <div class="md:flex justify-between items-center">
                        <div>
                            <h5 class="text-lg font-semibold">Frequently Asked Questions</h5>
                            <ul class="tracking-[0.5px] inline-block mt-2">
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                    <router-link to="/">Techwind</router-link>
                                </li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                    <i class="uil uil-angle-right-b"></i>
                                </li>
                                <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">FAQs</li>
                            </ul>
                        </div>

                        <div>
                            <router-link to="" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><i data-feather="plus" class="h-4 w-4"></i></router-link>
                        </div>
                    </div>

                    <div class="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        <div class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <h5 class="font-semibold">Buying Product</h5>

                            <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas" :key="item" class="relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4 first:mt-0">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button @click="activeIndex = activeIndex === item.id ? null : item.id" :class="item.id === activeIndex ? 'text-indigo-600 bg-gray-50 dark:bg-slate-800' : 'dark:bg-slate-900'" type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{{ item.title }}</span>
                                            <svg :class="item.id === activeIndex ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div :class="activeIndex === item.id ? '' : 'hidden'" id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <h5 class="font-semibold">General Questions</h5>

                            <div id="accordion-collapsetwo" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas" :key="item"
                                    class="relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4 first:mt-0">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button @click="activeIndex2 = activeIndex2 === item.id ? null : item.id" :class="item.id === activeIndex2 ? 'text-indigo-600 bg-gray-50 dark:bg-slate-800' : 'dark:bg-slate-900'" type="button"  class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"  aria-controls="accordion-collapse-body-1">
                                            <span>{{ item.title }}</span>
                                            <svg :class="item.id === activeIndex2 ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div :class="item.id === activeIndex2 ? '' : 'hidden'" id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <h5 class="font-semibold">Payments Questions</h5>

                            <div id="accordion-collapsetwo" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas" :key="item"
                                    class="relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4 first:mt-0">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button @click="activeIndex3 = activeIndex3 === item.id ? null : item.id" :class="item.id === activeIndex3 ? 'text-indigo-600 bg-gray-50 dark:bg-slate-800' : 'dark:bg-slate-900'" type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{{ item.title }}</span>
                                            <svg :class="item.id === activeIndex3 ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div :class="item.id === activeIndex3 ? '' : 'hidden'" id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <h5 class="font-semibold">Support Questions</h5>

                           
                            <div id="accordion-collapsetwo" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas" :key="item"
                                    class="relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4 first:mt-0">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button @click="activeIndex4 = activeIndex4 === item.id ? null : item.id" :class="item.id === activeIndex4 ? 'text-indigo-600 bg-gray-50 dark:bg-slate-800' : 'dark:bg-slate-900'" type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{{ item.title }}</span>
                                            <svg :class="item.id === activeIndex4 ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div :class="item.id === activeIndex4 ? '' : 'hidden'" id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
import { ref } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';

const toggle = ref(true);
const activeIndex = ref(1);
const activeIndex2 = ref(1);
const activeIndex3 = ref(1);
const activeIndex4 = ref(1);

const datas = [
  {
    id: 1,
    title: 'How does it work ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 2,
    title: 'Do I need a designer to use Techwind ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 3,
    title: 'What do I need to do to start selling ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 4,
    title: 'What happens when I receive an order ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
];

const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

darkmode();
bodurtl();
</script>