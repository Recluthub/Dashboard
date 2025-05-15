<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />

            <div class="container-fluid relative px-3">
                <div class="layout-specing">
                    <div class="md:flex justify-between items-center">
                        <h5 class="text-lg font-semibold">Invoice List</h5>
                        <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                            <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                <router-link to="/">Techwind</router-link></li>
                            <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                <i class="uil uil-angle-right-b"></i></li>
                            <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Invoice List</li>
                        </ul>
                    </div>

                    <div class="grid grid-cols-1 mt-6">
                        <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                            <table class="w-full text-start">
                                <thead class="text-base">
                                    <tr>
                                        <th class="text-start p-4 min-w-[128px]">Invoice No.</th>
                                        <th class="text-start p-4 min-w-[192px]">Client Name</th>
                                        <th class="text-center p-4 min-w-[200px]">Phone</th>
                                        <th class="text-center p-4">Amount</th>
                                        <th class="text-center p-4 min-w-[150px]">Generate(Dt.)</th>
                                        <th class="text-center p-4">Status</th>
                                        <th class="text-end p-4 min-w-[200px]"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="item in datas" :key="item">
                                        <th class="text-start border-t border-gray-100 dark:border-gray-800 p-4">{{ item.no }}</th>
                                        <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                            <router-link to="#" class="hover:text-indigo-600">
                                                <div class="flex items-center">
                                                    <img :src="item.image" class="h-10 w-10 rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                                    <span class="ms-2 font-medium">{{ item.name }}</span>
                                                </div>
                                            </router-link>
                                        </td>
                                        <td class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                            <span class="text-slate-400">{{ item.phone }}</span>
                                        </td>
                                        <td class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                            <span class="text-slate-400">{{ item.amount }}</span>
                                        </td>
                                        <td class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                            <span class="text-slate-400">{{ item.date }}</span>
                                        </td>
                                        <td class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                            <span v-if="item.status === 'Unpaid'" class="bg-red-600/10 dark:bg-red-600/20 text-red-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{ item.status }}</span>
                                            <span v-if="item.status === 'Paid'" class="bg-emerald-600/10 dark:bg-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{ item.status }}</span>
                                        </td>
                                        <td class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                            <router-link to="/invoice" class="py-1 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Preview</router-link>
                                            <router-link to="#" class="py-1 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md ms-2">Print</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="mt-5 flex items-center justify-between">
                            <div class="">
                                <router-link to="#" class="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full me-1"><i class="mdi mdi-arrow-left"></i></router-link>
                                <router-link to="#" class="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"><i class="mdi mdi-arrow-right"></i></router-link>
                            </div>
                            <span class="text-slate-400">Showing 1 - 8 out of 45</span>
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

import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'
import client7 from '@/assets/images/client/07.jpg'
import client8 from '@/assets/images/client/08.jpg'

// Reactive state
const toggle = ref(true);

const datas = ref([
  {
    no: '#tw001',
    image: client1,
    name: 'Howard Tanner',
    phone: '(+12)85-4521-7568',
    amount: '$253',
    date: '16th Aug 2023',
    status: 'Unpaid'
  },
  {
    no: '#tw002',
    image: client2,
    name: 'Wendy Filson',
    phone: '(+12)85-4521-7568',
    amount: '$482',
    date: '16th Aug 2023',
    status: 'Paid'
  },
  {
    no: '#tw003',
    image: client3,
    name: 'Faye Bridger',
    phone: '(+12)85-4521-7568',
    amount: '$546',
    date: '16th Aug 2023',
    status: 'Unpaid'
  },
  {
    no: '#tw004',
    image: client4,
    name: 'Ronald Curtis',
    phone: '(+12)85-4521-7568',
    amount: '$154',
    date: '16th Aug 2023',
    status: 'Paid'
  },
  {
    no: '#tw005',
    image: client5,
    name: 'Melissa Hibner',
    phone: '(+12)85-4521-7568',
    amount: '$458',
    date: '16th Aug 2023',
    status: 'Unpaid'
  },
  {
    no: '#tw006',
    image: client6,
    name: 'Randall Case',
    phone: '(+12)85-4521-7568',
    amount: '$548',
    date: '16th Aug 2023',
    status: 'Paid'
  },
  {
    no: '#tw007',
    image: client7,
    name: 'Jerry Morena',
    phone: '(+12)85-4521-7568',
    amount: '$658',
    date: '16th Aug 2023',
    status: 'Paid'
  },
  {
    no: '#tw008',
    image: client8,
    name: 'Lester McNally',
    phone: '(+12)85-4521-7568',
    amount: '$457',
    date: '16th Aug 2023',
    status: 'Paid'
  }
]);

// Methods
const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute("dir", "rtl");
};

// Lifecycle hook
onMounted(() => {
  darkmode();
  bodurtl();
});
</script>